const express = require('express');
const nodemailer = require('nodemailer');
const postRoutes = express.Router();
const request = require('request');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const await = require("await");
const async = require("async");
let Mdb = require('../models/post.model');
let AssetTags = require("../models/AssetTags");
let Metadt = require("../models/Metadt");
let moment = require('moment');
let appConfig = require('../models/config');

const oauth = OAuth({
  consumer: appConfig.getConsumer(),
  signature_method: 'HMAC-SHA1', hash_function (base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

let d = [], WorkFlowJobsMetaData = [], GGrades = [], GModules = [], GCurriculaWIP = [], GArtComplex = [], GArtAssign = [],
  GRisk = [], GImpact = [];
let GMeta = new Metadt(d);

Mdb.metaproperties.find().then((metaData) => {
  WorkFlowJobsMetaData = metaData;
  GMeta.iniMeta(metaData);

  GGrades = GMeta.getAMetaOptionsBykey(GMeta.gradekey);
  GModules = GMeta.getAMetaOptionsBykey(GMeta.modulekey);
  GArtComplex = GMeta.getAMetaOptionsBykey(GMeta.artComplexkey);
  GArtAssign = GMeta.getAMetaOptionsBykey(GMeta.artAssionkey);
  GRisk = GMeta.getAMetaOptionsBykey(GMeta.riskkey);
  GImpact = GMeta.getAMetaOptionsBykey(GMeta.impactkey);
}).catch((Err) => {
  console.log("Finding Metadata ERROR:", Err);
});
Mdb.assetMeta.find({}, { "curricula_wip.options": 1 }).then((dt) => {
  if (dt.length > 0) {
    GCurriculaWIP = dt[0].curricula_wip.options.map(d => ({ value: d.id, label: d.label, name: d.name }));
    GMeta.initAssetMeta(GCurriculaWIP);
  }
}).catch((Err) => { console.log(" Error in ASset Meta:", Err); });
// changed 
postRoutes.route('/updateAsset/').post(function (req, res) {
  console.log("updateAssetasset data :", req.body);
  Mdb.bynder_jobs.find({ updateTag: 'Processing', assetID: {$exists: true} }).limit(1).then((data) => {
    if(data.length > 0){
      // console.log('data:---',data);
      res.send({'TotLength': data.length,"target":'For UpdateAsset' });
      for(let dt of data){
        var request_data = appConfig.getActionInfo("updateAsset", data[0].assetID +"/" );
        request_data.method = 'POST';
        let tags =dt.jobMetaproperties['dde4714035904b0cb68888e0acf389b2'] ||'';
        let allTags=dt.generatedTags.split(",");
        if(tags.split(",").length > 0){
          for(let t=0; t < tags.split(",").length; t++ ){
            if(tags.split(",")[t]!="")
            allTags.push(tags.split(",")[t]);
          }
        }
        let formData= { tags: allTags.join(',') };
        request_data.data={ } ;//tags : dt.generatedTags };
        let authheader= oauth.toHeader( oauth.authorize(request_data, appConfig.getToken()) );
        console.log('formData---', formData);
        console.log(' request_data.url---',  request_data.url);
        console.log('headers:---', authheader);
        let updtInfo= new Promise(resolve  => {
            request({ method: "POST", url: request_data.url,  headers: authheader , formData: formData},function (error, response, body) {
                if(!error) {
                  resolve(body);
                 } else {
                  //reject([]);
                  console.log("Error in DT:", error );
                } 
            });
        }).then(value => {
            // process value here
            console.log(value ,"data => ", data);
            Mdb.bynder_jobs.updateOne({_id: data[0]._id },{ 
              $set:{
                updateTag:'Moved'
              }
            }).then(dt=>{
              console.log("updated dt", dt);
            }).catch(Err=>{
              console.log("Error in Data Update:", Err);
            });
        }).catch( Err => {
          console.log("Error on Tag Pushing :", Err);
        });
        console.log(updtInfo, "data => ", data);
      }
    }
  }).catch(Err => { 
    console.log("Error:", Err);
   });
  //res.send(request_data);
});
postRoutes.route('/notification1').post(function (req, res) {
  console.log("notification action")
  var transporter = nodemailer.createTransport({
    host: '10.31.3.71', port: 25});
  var mailOptions = {
    from: 'greatminds-support@mpslimited.com',
    to: appConfig.getNotification(),
    subject: appConfig.getNotificationSub(),
    html: ''
  };
  //abbi.hoerst@greatminds.org need to be intregated In Live
  let today = moment().set("hour", 0).set('minute',0).toString();
  let table =`<table border="1" width="100%">
      <tr>
      <th> ProcessID</th><th> Job Key</th><th>Tag Pushing Status</th>
      </tr>`;
  Mdb.bynder_jobs.find(
    { updateTag: { $exists: true }, 
    tagGenerationDt: {
        $exists: true,
        $gte: new Date(today)
    },  isMailed: 'false'  }
    ).then(data=>{
      if(data.length > 0){
        /*jshint esversion: 6 */
        console.log("data is:", data.length);
        for( let temp =0; temp < data.length; temp ++){
          let isindex= ( typeof data[temp].depopulate === 'undefined ')? "Index": "Duplicate";
          table= table + `<tr>
            <td> ${data[temp]._id }</td>
            <td> ${data[temp].job_key }</td>
            <td> ${data[temp].updateTag }</td>
          
          </tr>` ;
          // <td> ${ isindex  }</td>
        }
        table=table + `</table>`;
        let msg='<p>Dear User,<p><p>Automated tag generation and pushing to asset bank activity has been completed. Please see the status report below for complete details.</p>';
        msg=msg + table +`<br> Thanks,<br> Administrator`;
        mailOptions.html=msg;
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response, info.messageId);
            let serIds=data.map(d=>d._id);
           /* Mdb.bynder_jobs.updateMany({ _id: {$in : serIds}},{ $set: { isMailed: 'true'}}).then(d=>{
              console.log("Mail sended");
            });
            */
            res.send({"sended": new Date()});
          }
        });
      }else{
        res.send({"Not send": new Date()});
      }
    }).catch(Err=>{
      console.log("Error In data", Err);
    });
});
postRoutes.route('/notification').post(function (req, res) {
  console.log("notification action")
  var transporter = nodemailer.createTransport({
    host: '10.31.3.71', port: 25});
  var mailOptions = {
    from: 'greatminds-support@mpslimited.com',
    to: appConfig.getNotification(),
    subject: appConfig.getNotificationSub(),
    html: ''
  };
  //abbi.hoerst@greatminds.org need to be intregated In Live
  let table =`<table border="1" width="100%">
      <tr>
      <th> ProcessID</th><th> Job Key</th><th>Tag Pushing Status</th><th>Is Index</th>
      </tr>`;
  Mdb.bynder_jobs.find(
    { updateTag: { $exists: true, $ne: 'Processing' },  isMailed: 'false'}
    ).then(data=>{
      if(data.length > 0){
        /*jshint esversion: 6 */
        console.log("data is:", data.length);
        for( let temp =0; temp < data.length; temp ++){
          let isindex= ( typeof data[temp].depopulate === 'undefined ')? "Index": "Duplicate";
          table= table + `<tr>
            <td> ${data[temp]._id }</td>
            <td> ${data[temp].job_key }</td>
            <td> ${data[temp].updateTag }</td>
            <td> ${ isindex  }</td>
          </tr>` ;
        }
        table=table + `</table>`;
        let msg='<p>Dear User,<p><p>Automated tag generation and pushing to asset bank activity has been completed. Please see the status report below for complete details.</p>';
        msg=msg + table +`<br> Thanks,<br> Administrator`;
        mailOptions.html=msg;
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response, info.messageId);
            let serIds=data.map(d=>d._id);
            Mdb.bynder_jobs.updateMany({ _id: {$in : serIds}},{ $set: { isMailed: 'true'}}).then(d=>{
              console.log("Mail sended");
            });
            res.send({"sended": new Date()});
          }
        });
      }else{
        res.send({"Not send": new Date()});
      }
    }).catch(Err=>{
      console.log("Error In data", Err);
    });
});


postRoutes.route('/getAssetsProp/:id').get(function (req, res) {
  let id = req.params.id;
  var request_data = appConfig.getActionInfo("getAssetsProp");
  var token = appConfig.getToken();
  request_data.data = {};
  request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function (error, response, body) {
    console.log("RES getting")
    if (error) {
      console.log("API ERROR:", error);
    } else {
      let d = JSON.parse(response.body);
      let assetMeta = new Mdb.assetMeta({ usedfor: d.usedfor, curricula_wip: d.curricula_wip });
      assetMeta.save().then((dt) => {
        console.log("data saved");
        res.send(d);
      }).catch((Err) => {
        console.log("Error in Saved Data", Err);
      });
    }
  });
});
postRoutes.route('/getjobsmeta/').post(function (req, res) {

  console.log("getjobsmeta");

  var request_data = appConfig.getActionInfo("getjobsmeta");
  var token = appConfig.getToken();
  request_data.data = {};
  console.log("request_data :1 ==>", request_data, "token=>", token);
  request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function (error, response, body) {
    console.log("RES getting")
    if (error) {
      console.log("API ERROR:", error);
    } else {
      try {
        let MetaDatas = JSON.parse(response.body);
        for (let temp = 0; temp < MetaDatas.length; temp++) {
          Mdb.metaproperties.find({ ID: MetaDatas[temp].ID }).then((dt) => {
            if (dt.length > 0) {
              let set = { ID: MetaDatas[temp].ID };
              let where = { ID: MetaDatas[temp].ID };
              console.log("set:", set, "where:", where)
            } else {
              //Insert 
              MetaDatas[temp].tempId= MetaDatas[temp].ID.split('-').join('');
              let metaproperties = new Mdb.metaproperties(MetaDatas[temp]);
              metaproperties.save().then((rs) => {
                console.log("metaproperties Saved SUCESSFULLY")
              }).catch((Err) => console.log("metaproperties Save ERROR:", Err));
            }
          }).catch((Err) => { console.log("finding Meta data Error: ", Err) });
        }
      } catch (Err) {
        console.log("Error to getting Jobs Metapropertyes", Err);
      }
    }
  });
});
postRoutes.route('/moveAssetBanktoWorkflow/').post(function (req, res) {
  Mdb.asset.find(
    { tagreaded: true }
  ).then(data => {
    if (data.length > 0) {
      console.log("ASSET Bank Totol Jobs ==>", data.length);
      let resData = [];
      for (let temp = 0; temp < data.length; temp++) {
        let AsBynderJobs = {
          id: data[temp].id,
          jobID: data[temp].id.split("-").join(""),
          name: data[temp].name,
          description: data[temp].description,
          dateCreated: ((!!data[temp].dateCreated) ? data[temp].dateCreated : ''),
          job_date_started: ((!!data[temp].dateCreated) ? data[temp].dateCreated : ''),
          job_date_finished: ((!!data[temp].datePublished) ? data[temp].datePublished : ''),
          dateModified: ((!!data[temp].dateModified) ? data[temp].dateModified : ''),
          job_active_stage: { status: 'Asset Bank' },
          job_key: '',
          presetName: '',
          isAssetBank: true,
          jobMetaproperties: {},
          thumb: ''
        };
        // neet thumbnial
        //carriculam
        if (!!data[temp].property_workflowjobkey && data[temp].property_workflowjobkey.length > 0) {
          AsBynderJobs.job_key = data[temp].property_workflowjobkey[0];
        }
        if (!!data[temp].property_workflowType && data[temp].property_workflowType.length > 0) {
          AsBynderJobs.presetName = " " + data[temp].property_workflowType[0];
        }
        if (!!data[temp].thumbnails && data[temp].thumbnails.length > 0) {
          AsBynderJobs.thumb = data[temp].thumbnails['PNG_Web Ready'];
        }
        let MetaDT = new Metadt(AsBynderJobs);
        MetaDT.iniMeta(WorkFlowJobsMetaData);
        MetaDT.initAssetMeta(GCurriculaWIP);

        if (!!data[temp].tagReader && data[temp].tagReader.length > 0) {
          if (!!data[temp].property_art_assignment && data[temp].property_art_assignment.length > 0) {
            MetaDT.setArtAssion(MetaDT.referValueByKey(MetaDT.artAssionkey, data[temp].property_art_assignment[0]));
          } if (!!data[temp].property_art_complexity && data[temp].property_art_complexity.length) {
            MetaDT.setArtComplex(MetaDT.referValueByKey(MetaDT.artComplexkey, data[temp].property_art_complexity[0]));
          } if (!!data[temp].tags && data[temp].tags.length > 0) {
            MetaDT.setTag(data[temp].tags.join(","));
          }
          if (!!data[temp].thumbnails) {
            if (!!data[temp].thumbnails['PNG_Web Ready']) {
              AsBynderJobs.thumb = data[temp].thumbnails['PNG_Web Ready'];
            } else if (!!data[temp].thumbnails['thul']) {
              AsBynderJobs.thumb = data[temp].thumbnails['thul'];
            } else if (!!data[temp].thumbnails['mini']) {
              AsBynderJobs.thumb = data[temp].thumbnails['mini'];
            }
          }
          for (let i = 0; i < data[temp].tagReader.length; i++) {
            let reader = data[temp].tagReader[i];
            if (!!reader.grade) {
              MetaDT.setGrade(MetaDT.referValueByKey(MetaDT.gradekey, reader.grade.replace('G', '')));
            } if (!!reader.module) {
              MetaDT.setModule(MetaDT.referValueByKey(MetaDT.modulekey, parseInt(reader.module.replace("M", ""))));
            } if (!!reader.comp) {
              MetaDT.setComponent(reader.comp);
            } if (!!reader.lesson) {
              MetaDT.setLesson(reader.lesson);
            }
            if (i + 1 != data[temp].tagReader.length) {
              console.log("Dulpicate Asset ");
              let bynder_jobs = new Mdb.bynder_jobs(MetaDT.data);
              bynder_jobs.save().then((rs) => {
                console.log("data saved");
              }).catch((Err) => {
                console.log("data moved field orG ERR:", Err);
              });
            }
          }
          // other grade module components setting
        } else {
          if (!!data[temp].property_Grade && data[temp].property_Grade.length > 0) {
            MetaDT.setGrade(MetaDT.referValueByKey(MetaDT.gradekey, data[temp].property_Grade[0].replace('G', '')));
          } if (!!data[temp].property_GeodesBookNumber && data[temp].property_GeodesBookNumber.length > 0) {
            MetaDT.setModule(MetaDT.referValueByKey(MetaDT.modulekey, parseInt(data[temp].property_GeodesBookNumber[0].replace('B', ''))));
          }
          if (!!data[temp].property_art_assignment && data[temp].property_art_assignment.length > 0) {
            MetaDT.setArtAssion(MetaDT.referValueByKey(MetaDT.artAssionkey, data[temp].property_art_assignment[0]));
          } if (!!data[temp].property_art_complexity && data[temp].property_art_complexity.length) {
            MetaDT.setArtComplex(MetaDT.referValueByKey(MetaDT.artComplexkey, data[temp].property_art_complexity[0]));
          } if (!!data[temp].tags && data[temp].tags.length > 0) {
            MetaDT.setTag(data[temp].tags.join(","));
          }
          if (!!data[temp].thumbnails) {
            if (!!data[temp].thumbnails['PNG_Web Ready']) {
              AsBynderJobs.thumb = data[temp].thumbnails['PNG_Web Ready'];
            } else if (!!data[temp].thumbnails['thul']) {
              AsBynderJobs.thumb = data[temp].thumbnails['thul'];
            } else if (!!data[temp].thumbnails['mini']) {
              AsBynderJobs.thumb = data[temp].thumbnails['mini'];
            }
          }
        }
        let bynder_jobs = new Mdb.bynder_jobs(MetaDT.data);
        bynder_jobs.save().then((rs) => {
          console.log("data saved");
        }).catch((Err) => {
          console.log("data moved field orG ERR:", Err);
        });
        // console.log("SAVE CODE for single Jobs:",MetaDT.data.jobMetaproperties);
      }
      res.send(MetaDT);
    }
  }).catch(Err => { console.log("Error in finding reader jobs from Asset ERROR:", Err) })
});
postRoutes.route('/assetJobs/').post(function (req, res) {
  console.log("Action assetJobs for Tagreader ")
  Mdb.asset.find(
    //{ "tags":"SC_0402TE1_L10_L11"}
    //{'id':'4A86BF38-A7D7-4893-ABCC121FC58FC61D'}
    //{'id':'B1874BF8-165D-42F4-95881737D7487D9E'}
    //{'id':'90A1FE91-2C56-41EC-88EE1075D6EB7D49'}
    { tagreaded: false  }
  ).limit(200).then((data) => {
    console.log("reader working AT:", data.length, " Jobs");
    for (let i = 0; i < data.length; i++) {
      console.log("reading progress AT:", data[i].id);
      let asset = new AssetTags(data[i]);
      Mdb.asset.updateOne({ id: data[i].id }, {
        $set: { tagReader: asset.getJobs(), tagreaded: true }
      }).then(dt => {
        console.log("asset tagReader updated :", data[i].id);
      }).catch((Err) => {
        console.log("Error In Updating asset", data[i].id);
      });
    }
    res.send(data.length, " jobs updated");
  }).catch((Err) => {
    console.log("Getting Jobs have error:", Err);
  });
});
// 
postRoutes.route('/assetSynced/').post(function (req, res) {
  console.log("ACTION assetSynced ")
  var request_data = appConfig.getActionInfo("getAssets");
  var token = appConfig.getToken();
  request_data.data = {};
  request_data.url = request_data.url + "?limit=0&page=1&total=1";
  let response= request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  },function (error, response, body) {
    if(!error){
      try{
        var data = JSON.parse(response.body);
        Mdb.asset.find().count().then(totalDB=>{
          if(data.total.count != totalDB){
            let page, limit=500;
            let Totalpage=parseInt(data.total.count/limit);
            if(data.total.count%limit){
              Totalpage++;
            }
            page= parseInt(totalDB/limit || 1) ;
            if((page!=1) &&(totalDB%limit > 0 || page < Totalpage)  ){
              page++;
            }
            page=1;
            Totalpage=30;
            do{
              console.log("Init page:", page)
              //https://gmartlogautomation.mpstechnologies.com
              excuteURL("http://localhost:3000/sync/getAssets/"+page, true);
             // excuteURL("https://gmartlogautomationdemo.mpstechnologies.com/sync/getAssets/"+page, true);
              if(!( page <  Totalpage)){
                res.send({data:"jobs merged",d: new Date()});
              }
              page++;
            }
            while( page <  Totalpage)
          }else{
            res.send({data:"No more changes found ",d: new Date()});
          }
        }).catch(Err=>{
          console.log("Error in Data: ", Err);
        })
      }
      catch(e){
        console.log("Error generated in assetSynced");
      }
    }
  })
});

// getting assetbank data using Limit
postRoutes.route('/getAssets/:page').post(function (req, res) {
  console.log("Requesting ");
  let page = req.params.page;
  //page=1;
  var request_data = appConfig.getActionInfo("getAssets");
  var token = appConfig.getToken();
  request_data.data = {}; //={ "limit": 5, page: 1 }
  request_data.url = request_data.url + "?limit=500&page=" + page; 
  request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function (error, response, body) {
    if (error) {
      console.log("GET Asset API Error");
    } else {
      console.log("Res getting");
      try {
        var data = JSON.parse(response.body);
        console.log("API responded :", data.length);
        let Update = 0, Saved = 0;
        for (let temp = 0; temp < data.length; temp++) {
          Mdb.asset.find({ id: data[temp].id }).then((dt) => {
            if (dt.length > 0) {
              console.log("Jobs Updation case", data[temp].id, 'jobs:', temp)
            } else {
              console.log("data for Saving..", data[temp].id , 'jobs:', temp)
              data[temp].tagreaded=false;
              let asset = new Mdb.asset(data[temp]);
              asset.save().then((rs) => {
                console.log("saved id", rs.id);
              }).catch((Err) => console.log("Asset Save ERROR:", Err));
            }
            if (temp == data.length ) {
              res.send("try to save or update assets AT:" + new Date());
            }
          }).catch((Err) => {
            console.log("Err in checking exist ERROR:", Err);
          })
        }
      } catch (e) {
        console.log("API response Not Valid. ERROR:", e);
      }
    }
  });
});
postRoutes.route('/updateStageName').post(function (req, res) {
  console.log("Action updateStageName ")
  Mdb.bynder_jobs.find({"Preset_Stages.name":{$exists:true}, "Preset_Stages.StageNames":{$exists:true} }).then(data=>{
    let notStageName=new Array();
    for( let dt of data){
      let allStages=dt.Preset_Stages;
      for(let temp=0; temp < allStages.length; temp ++){
        //) && (typeof allStages[temp].name == 'undefined' || allStages[temp].name=="" ) 
        //if( typeof allStages[temp].StageNames == 'undefined' || allStages[temp].StageNames=="" ){
         // notStageName.push(dt);
          if(allStages[temp].has){
            allStages[temp].StageNames=allStages[temp].name;
            delete allStages[temp].name;
            console.log("stage data", allStages)
            Mdb.bynder_jobs.updateMany({
              id: dt.id
            },{ $set :{ Preset_Stages: allStages  }}).then(d=>{
              console.log( "Modified:", d);
            });
          }
        }
      //}
    }
    res.send({ length: notStageName.length, data:notStageName })
  });
})
// Missing StageName
postRoutes.route('/missingStages').post(function (req, res) {
  //let q= {"Preset_Stages.StageNames":{$exists: false}};
  Mdb.bynder_jobs.find({'job_active_stage.status':'Active'}).then(data=>{
    for( let dt of data){
      let allStages=dt.Preset_Stages;
      for(let temp=0; temp < allStages.length; temp ++){
        if(!!dt.presetstages && dt.presetstages.length > 0){
          let stage=dt.presetstages.filter(d=> d.position == allStages[temp].position);
          if(stage.length > 0){
            allStages[temp].StageNames = stage[0].name;
          }else{
            console.log("Length Not found", JSON.stringify(allStages[temp]))
          }
        }
      }
      if(dt.presetstages.length > 0 ){
        Mdb.bynder_jobs.updateMany({ id: dt.id},
          {  $set:{ Preset_Stages: allStages }  })
        .then(d=>{
          console.log("data Updated", dt.id);
        }).catch(Err=>{
          console.log("Error In data");
        });
      }
    }
  }).catch(Err=>{
    console.log("ERr:", Err);
  });
})
// updating Missing Jobs MetaProperty 

postRoutes.route('/approvedworkfolwasset').post(function (req, res) {
  console.log('approvedworkflowasset action for merging approved job which is in asset bank');
  let Founded=[], NotFounded=[];
  Mdb.bynder_jobs.find({ "job_active_stage.status": 'Approved', assetID: { $exists: false} ,  job_key: { $exists: true, $ne: ''}}).then(data=>{
    console.log( "total Active Jobs :", data.length);
    for(let temp =0; temp < data.length ; temp ++){
      let NoSql={
        $or: [{
            property_workflowjob: data[temp].jobID
        }, {
            property_workflowjobkey: data[temp].job_key
        }]
    };
        Mdb.asset.find( NoSql
         // {  "property_workflowjobkey": data[temp].job_key }
          //{ "property_workflowjob" : data[temp].jobID }
          ).then(CData=> {
        if(CData.length > 0){
          Founded.push( data[temp].job_key );
          console.log("Finded CData : ", CData.length, CData[0].id);
          // code hear for Update Thumb & tags in Workflow Jobs // and also aknowledge about job exist both side //
          let thumb ="";
          if(!!CData[0].thumbnails){
            let thumb = CData[0].thumbnails.webimage || CData[0].thumbnails.thul || '';
          }
          Mdb.bynder_jobs.updateMany({ id : data[temp].id },
              { $set:{ 
                thumb : thumb ,
                assetTags: CData[0].tags,
                assetID : CData[0].id
              } })
          .then(rs=>{
            console.log('updated', rs);
          }).catch(Err=>{ 
            console.log("Error In Updating:", Err) 
          });
          Mdb.asset.updateMany({ id: CData[0].id }, { $set: { isWorkflow: true}})
          .then(rs2=> { 
            console.log( 'updated data ', rs2);
          }).catch(Err=>{ 
            console.log("Error in Update jobs in asset bank: ", Err)
          })
        }else{
          NotFounded.push(data[temp].job_key);
          console.log("Not Finded CData : ", data[temp].job_key );
        }
        if(temp ==  data.length-1){
          req.send("Founded Jobs : ", Founded.length ,' Not Founded Is ', NotFounded.length);
          //job_active_stage
        }
      }).catch(Err=> {
        console.log("Error in finding CData: ", Err);
      });
    }
  }).catch(Err=>{ console.log("Error In finding :", Err); });
})



postRoutes.route('/updatePresets').post(function (req, res) {
  // here we have need to add API performance action
  console.log("updatePresets Action");
  
  let ApiInfo = {};
  ApiInfo.apiTaskName = 'Bynder Presets sync';
  let ApiObj = appConfig.getApiConfigByID(2);
  let  startTime = moment().toDate();
  let nextRunTime = moment().add(ApiObj.addedm, 'minutes').toDate()
  ApiInfo.process={ apiType: ApiObj.ID , startTime: startTime, trigger: ApiObj.trigger, nextRunTime: nextRunTime } ;
  let testQ={
    $or: [{  presetName: { $exists: false } }, { presetName: "" }]
  };
 // testQ = { presetID : "2c918082-7346-db6b-0173-49ec71020113" , presetName: { $exists: false }  };
  Mdb.bynder_jobs.find( testQ ).then(dt => {
    if (dt.length > 0) {
      let persetsIds = [...new Set(dt.map(d => d.presetID))];
      persetsIds= persetsIds.filter(d=>d!=null);
      console.log("Un-updated Preset jobs,", dt.length, "Total Unique Preset: ", persetsIds.length);
      // console.log("Data ", persetsIds.length);
      ApiInfo.dataProcessed = { ID: dt[0].presetID , name : "Un-updated Preset job:" + dt.length + "Total Unique Preset: "+ persetsIds.length ,key: 'P:'+persetsIds.length }
      let TotalPresets=0; let TotalActions =[];
      for (let t = 0; t < persetsIds.length; t++) {
        if (!!persetsIds[t]) {
          var token = appConfig.getToken();
          var request_data = appConfig.getActionInfo("getPresetByJobs", persetsIds[t]);
          ApiInfo.APISendInfo ={ url: request_data.url, data:request_data.data};

          request({  url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token)) }, function (error, response, body) {
            console.log("TotalPresets"+ TotalPresets); let actPer = { presetID: persetsIds[TotalPresets]};
            TotalPresets ++;
          if(error){
              console.log("Error IN Api", error);
              actPer.error ='Error IN Api '+ error;
            }
            else if(response.body.indexOf('<html')!=-1 && response.body.indexOf('<body')!=-1) {
              console.log("Invalid Api response! sending HTML data!");
              actPer.error ='Invalid Api response! sending HTML data!';
            }
            else if (response.statusCode == 200) {
              
              console.log(response.body);
              let persetDt = JSON.parse(response.body);
              actPer.resp ="Preset API getting of : "+ persetDt.preset.ID;
              actPer.responed = true;
              let where = { presetID: persetDt.preset.ID, presetName: { $exists: false } };
              console.log(persetDt.preset.ID ," ID and => ", JSON.stringify(persetDt.preset.presetstages) );
              Mdb.bynder_jobs.find(where).then(data=>{
                for(let t=0; t < data.length; t++ ){
                 let AllStages= data[t].Preset_Stages;
                 let PresetStage=persetDt.preset.presetstages;
                 if( !!persetDt.preset.presetstages && persetDt.preset.presetstages.length > 0){
                   PresetStage=persetDt.preset.presetstages.map(d=>({ ID:d.ID, name:d.name, position:d.position}));
                 }
                 for(let stageDt of AllStages){
                   if((! stageDt.name && stageDt.name!="") || !stageDt.StageNames || stageDt.StageNames ==""){
                     let Ele=PresetStage.filter(d=> d.position == stageDt.position);
                     if(Ele.length > 0){
                      stageDt.StageNames= Ele[0].name;
                     }
                   }
                 }
                 // Update Referance Data
                 Mdb.bynder_jobs.updateOne({_id: data[t]._id},{
                   $set: {
                    presetName    : persetDt.preset.name,
                    presetstages  : persetDt.preset.presetstages,
                    Preset_Stages : AllStages
                   }
                 }).then(dt=>{
                   console.log("data Updated", dt)
                 }).catch(Err=>{
                   console.log("Error in Update data:", Err)
                 })
                }
              }).catch(Err=>{
                console.log("Error in Finding data:", Err)
              })
            }else{
              console.log("Preset API have Some Error: ", response.statusCode);
              actPer.error ="Preset API have Some Error: "+ response.statusCode;
            }
            // final stage of cond
            TotalActions.push(actPer);
            if( TotalPresets == persetsIds.length  ){
              ApiInfo.process.endTime= new Date() ;
              ApiInfo.responce= "Data processed of "+ dt.length + " Presets" ;
              console.log("ALL TotalPresets"+ TotalPresets);
              res.send({action: TotalPresets, description: TotalActions});
              let ApiPerformance = new Mdb.ApiPerformance(ApiInfo);
              ApiPerformance.save().then(d=>{
                console.log(d);
              });
              // here responce
            }

          });
        }
      }
    }
  }).catch(Err => console.log('Error in finding data', Err))
})


postRoutes.route('/fixcurrentDuration').post(function (req, res) {
  console.log("ACTION: fixcurrentDuration")
  let q={ "job_active_stage.status":'Approved'};
  //, "Preset_Stages.job_date_finished":{$exists: false}
    Mdb.bynder_jobs.find(q,{Preset_Stages:1, job_date_finished:1 }).then(data=>{
      if(data.length > 0){
        for(let t=0; t< data.length; t++){
          if(data[t].Preset_Stages.length > 0 && !data[t].Preset_Stages[ data[t].Preset_Stages.length -1].job_date_finished ){
            if(!!data[t].job_date_finished && data[t].job_date_finished.toISOString() == data[t].Preset_Stages[ data[t].Preset_Stages.length -1].start_date.toISOString() ){
                data[t].Preset_Stages[data[t].Preset_Stages.length -1].job_date_finished = data[t].job_date_finished;
                Mdb.bynder_jobs.updateOne({_id: data[t]._id},{
                  Preset_Stages: data[t].Preset_Stages
                }).then(data=>{
                  console.log("Data Updated");
                }).catch(Err=>{
                  console.log("Update Error:", Err);
                });
            }else{
              data[t].Preset_Stages[data[t].Preset_Stages.length -1].job_date_finished = data[t].Preset_Stages[ data[t].Preset_Stages.length -1].start_date ;
              data[t].job_date_finished = data[t].Preset_Stages[ data[t].Preset_Stages.length -1].start_date;
              Mdb.bynder_jobs.updateOne({_id: data[t]._id},{
                Preset_Stages: data[t].Preset_Stages,
                job_date_finished : data[t].job_date_finished
              }).then(data=>{
                console.log("Data Updated");
              }).catch(Err=>{
                console.log("Update Error:", Err);
              });
            }
            
          }
        }
      }else{
        res.send({'msg':'No Data found for current stage currection!'})
      }
    }).catch(e=>{
      console.log("Error in find Data", e)
    })
})
function  excuteURL(URLexc, ispost){
  console.log("\n\n excuteURL",URLexc );
  try{
    var options = { method: 'GET', url: URLexc, headers:{ 'Cache-Control': 'no-cache' }};
    if(ispost){
      options.method='POST'; 
    }
    request(options,  function (error, response, body) {
      if (error) //throw new Error(error);
      console.log(error);
    });
  }catch(Err){
    console.log("Error:", Err);
  }
}
postRoutes.route('/checkAPI').post(function (req, res) {
  var request = require("request");

  var options = { method: 'GET',
    url: 'http://staging.mpstrak-service-rpt.mpstechnologies.com/mpstrak-service-rpt/rest/journal/task_process_time_by_date/ALL/ALL',
    headers: 
     { 'postman-token': '7f9924a3-f6d4-327f-5863-029bb8e4e8a3',
       'cache-control': 'no-cache',
       authorization: 'Basic cHJvdG9uQHN0YWdpbmc6cHJvdG9uQDE4MQ==' } };
  
  request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log("API DATA",body);
  });
})
module.exports = postRoutes;