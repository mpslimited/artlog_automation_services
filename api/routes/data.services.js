const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const await = require("await");
const async = require("async");
let Mdb = require('../models/post.model');
let  AssetTags  =require("../models/AssetTags");
let  Metadt  =require("../models/Metadt");
let appConfig=require('../models/config');

const oauth = OAuth({
  consumer: { key: '71BEFFCC-2CC9-476D-93A8A79BB92BD87B', secret: 'a8de7d89165b8234405b35c83553a318' },
  signature_method: 'HMAC-SHA1', hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

let d=[], WorkFlowJobsMetaData=[], GGrades=[], GModules=[], GCurriculaWIP=[], GArtComplex=[], GArtAssign=[],
GRisk=[],GImpact=[];
let GMeta=new Metadt(d);

Mdb.metaproperties.find().then((metaData)=>{
  WorkFlowJobsMetaData = metaData;
  GMeta.iniMeta(metaData);
  
  GGrades=GMeta.getAMetaOptionsBykey(GMeta.gradekey);
  GModules=GMeta.getAMetaOptionsBykey(GMeta.modulekey);
  GArtComplex=GMeta.getAMetaOptionsBykey(GMeta.artComplexkey);
  GArtAssign=GMeta.getAMetaOptionsBykey(GMeta.artAssionkey);
  GRisk=GMeta.getAMetaOptionsBykey(GMeta.riskkey);
  GImpact=GMeta.getAMetaOptionsBykey(GMeta.impactkey);
}).catch((Err)=>{
  console.log("Finding Metadata ERROR:", Err);
});
Mdb.assetMeta.find({},{"curricula_wip.options":1}).then((dt)=>{
  if(dt.length > 0){
    GCurriculaWIP=dt[0].curricula_wip.options.map(d=>({value:d.id, label: d.label , name: d.name}));
    GMeta.initAssetMeta(GCurriculaWIP);
  }
}).catch((Err)=>{ console.log(" Error in ASset Meta:", Err);});


postRoutes.route('/getdata/:campaignId').get(function (req, res) {

  let campaignId = req.params.campaignId;

  var request_data=appConfig.getActionInfo("getAssets", campaignId);
  //request_data.data={ "limit": 5, page: 1 }
  var token=appConfig.getToken();
  console.log(campaignId, "::", request_data, "token=>",token);
  try{
    request({url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
    }, function(error, response, body) {
      console.log("API responded ...", JSON.stringify(request_data));
      res.send(response);
    });
  }catch(err){
    console.log(err);
  }
  
});
postRoutes.route('/getAssetsProp/:id').get(function (req, res) {
  let id = req.params.id;
  //console.log("hitting getAssetsProp", id);

  var request_data=appConfig.getActionInfo("getAssetsProp");
  var token=appConfig.getToken();
  request_data.data={};
  //console.log("request_data :1 ==>", request_data,"token=>",token);

  request({url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
    console.log("RES getting")
    if(error){
      console.log("API ERROR:", error);
    }else{
     let d= JSON.parse(response.body);
      let assetMeta = new Mdb.assetMeta({usedfor: d.usedfor, curricula_wip: d.curricula_wip});
      assetMeta.save().then((dt)=>{
        console.log("data saved");
        res.send(d);
      }).catch((Err)=>{
         console.log("Error in Saved Data", Err); 
        });
      
    }
  });

});
postRoutes.route('/getjobsmeta/').get(function (req, res) {
 
  console.log("getjobsmeta");

  var request_data=appConfig.getActionInfo("getjobsmeta");
  var token=appConfig.getToken();
  request_data.data={};
  console.log("request_data :1 ==>", request_data,"token=>",token);

  request({url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
    console.log("RES getting")
    if(error){
      console.log("API ERROR:", error);
    }else{
      try{
        let MetaDatas=JSON.parse(response.body);
        for(let temp=0; temp < MetaDatas.length; temp++){
          
          Mdb.metaproperties.find({ ID: MetaDatas[temp].ID }).then((dt)=>{
            if(dt.length >0){
              //Update
              let set={ ID: MetaDatas[temp].ID };
              let where ={ ID: MetaDatas[temp].ID };
              console.log("set:", set, "where:", where )
              //Mdb.metaproperties.updateOne({ set} ,{ where })
            }else{
              //Insert 
              let metaproperties= new Mdb.metaproperties(MetaDatas[temp]);
              metaproperties.save().then((rs)=>{
                console.log("metaproperties Saved SUCESSFULLY")
              }).catch((Err)=>console.log("metaproperties Save ERROR:", Err ));
            }
          }).catch((Err)=> { console.log("finding Meta data Error: ", Err) });
        }
      }catch(Err){
        console.log("Error to getting Jobs Metapropertyes", Err);
      }
      
      //res.send(response.body);
    }
  });

});
//
postRoutes.route('/moveAssetBanktoWorkflow/').post(function (req, res) {
  Mdb.asset.find(
    
    {tagReader:{$exists: true}}

    ).then(data=>{
    if(data.length > 0){
      console.log("ASSET Bank Totol Jobs ==>", data.length);
      let resData=[];
      for(let temp=0; temp < data.length  ; temp++){
       let AsBynderJobs={
        id                  : data[temp].id ,
        jobID               : data[temp].id.split("-").join(""),
        name                : data[temp].name ,
        description         : data[temp].description ,
        dateCreated         : ((!!data[temp].dateCreated)?data[temp].dateCreated :''),
        job_date_started    : ((!!data[temp].dateCreated)?data[temp].dateCreated :''),
        job_date_finished   : ((!!data[temp].datePublished)?data[temp].datePublished :''),
        dateModified        : ((!!data[temp].dateModified)?data[temp].dateModified :''),
        job_active_stage    : { status:'Asset Bank' },
        job_key             : '',
        presetName          : '',
        isAssetBank         : true,
        jobMetaproperties   : {},
        thumb               : ''
      };
      // neet thumbnial
      //carriculam
      //
      
      if(!!data[temp].property_workflowjobkey && data[temp].property_workflowjobkey.length >0){
        AsBynderJobs.job_key=data[temp].property_workflowjobkey[0];
      }
      if(!!data[temp].property_workflowType && data[temp].property_workflowType.length >0){
        AsBynderJobs.presetName=" "+data[temp].property_workflowType[0];
      }
      if(!!data[temp].thumbnails && data[temp].thumbnails.length > 0){
        AsBynderJobs.thumb=data[temp].thumbnails['PNG_Web Ready'];
      }
      let MetaDT=new Metadt(AsBynderJobs);
      MetaDT.iniMeta(WorkFlowJobsMetaData);
      MetaDT.initAssetMeta(GCurriculaWIP);

      if(!!data[temp].tagReader && data[temp].tagReader.length >0){
        if(!!data[temp].property_art_assignment && data[temp].property_art_assignment.length > 0 ) {
          MetaDT.setArtAssion(MetaDT.referValueByKey(MetaDT.artAssionkey , data[temp].property_art_assignment[0]));
        }if(!!data[temp].property_art_complexity && data[temp].property_art_complexity.length){
          MetaDT.setArtComplex(MetaDT.referValueByKey(MetaDT.artComplexkey , data[temp].property_art_complexity[0]));
        } if(!!data[temp].tags && data[temp].tags.length > 0){
          MetaDT.setTag(data[temp].tags.join(","));
        }
        if(!!data[temp].thumbnails){
          if(!!data[temp].thumbnails['PNG_Web Ready']){
            AsBynderJobs.thumb=data[temp].thumbnails['PNG_Web Ready'];
          }else if(!!data[temp].thumbnails['thul']){
            AsBynderJobs.thumb=data[temp].thumbnails['thul'];
          }else if(!!data[temp].thumbnails['mini']){
            AsBynderJobs.thumb=data[temp].thumbnails['mini'];
          }
        }
        for(let i=0; i < data[temp].tagReader.length; i++){
          let reader=data[temp].tagReader[i];
          if(!!reader.grade ){
            MetaDT.setGrade(MetaDT.referValueByKey(MetaDT.gradekey , reader.grade.replace('G','')));
          }if(!!reader.module ){
            MetaDT.setModule(MetaDT.referValueByKey(MetaDT.modulekey , parseInt(reader.module.replace("M","") ) ));
          }if(!!reader.comp ){
            MetaDT.setComponent(reader.comp);
          }if(!!reader.lesson ){
            MetaDT.setLesson(reader.lesson);
          }
          if(i+1 != data[temp].tagReader.length){
            console.log("Dulpicate Asset ");
            let bynder_jobs= new Mdb.bynder_jobs(MetaDT.data);
            bynder_jobs.save().then((rs)=>{
              console.log("data saved");
            }).catch((Err)=>{
              console.log("data moved field orG ERR:", Err);
            });
          }
        }
        // other grade module components setting
      }else{
        if(!!data[temp].property_Grade && data[temp].property_Grade.length > 0){
          MetaDT.setGrade(MetaDT.referValueByKey(MetaDT.gradekey , data[temp].property_Grade[0].replace('G','')));
        }if( !!data[temp].property_GeodesBookNumber && data[temp].property_GeodesBookNumber.length > 0){
          MetaDT.setModule(MetaDT.referValueByKey(MetaDT.modulekey , parseInt(data[temp].property_GeodesBookNumber[0].replace('B',''))));
        }
        if(!!data[temp].property_art_assignment && data[temp].property_art_assignment.length > 0 ) {
          MetaDT.setArtAssion(MetaDT.referValueByKey(MetaDT.artAssionkey , data[temp].property_art_assignment[0]));
        }if(!!data[temp].property_art_complexity && data[temp].property_art_complexity.length){
          MetaDT.setArtComplex(MetaDT.referValueByKey(MetaDT.artComplexkey , data[temp].property_art_complexity[0]));
        }if(!!data[temp].tags && data[temp].tags.length > 0){
          MetaDT.setTag(data[temp].tags.join(","));
        }
        if(!!data[temp].thumbnails){
          if(!!data[temp].thumbnails['PNG_Web Ready']){
            AsBynderJobs.thumb=data[temp].thumbnails['PNG_Web Ready'];
          }else if(!!data[temp].thumbnails['thul']){
            AsBynderJobs.thumb=data[temp].thumbnails['thul'];
          }else if(!!data[temp].thumbnails['mini']){
            AsBynderJobs.thumb=data[temp].thumbnails['mini'];
          }
        }
      }
      let bynder_jobs= new Mdb.bynder_jobs(MetaDT.data);
      bynder_jobs.save().then((rs)=>{
        console.log("data saved");
      }).catch((Err)=>{
        console.log("data moved field orG ERR:", Err);
      });
     // console.log("SAVE CODE for single Jobs:",MetaDT.data.jobMetaproperties);
      }
      res.send(MetaDT);
    }
  }).catch(Err=>{ console.log("Error in finding reader jobs from Asset ERROR:", Err)})
});
postRoutes.route('/assetJobs/').post(function (req, res) {
  Mdb.asset.find(
    //{ "tags":"SC_0402TE1_L10_L11"}
    //{'id':'4A86BF38-A7D7-4893-ABCC121FC58FC61D'}
    //{'id':'B1874BF8-165D-42F4-95881737D7487D9E'}
    //{'id':'90A1FE91-2C56-41EC-88EE1075D6EB7D49'}
    {tagReader:{$exists: false}}
  ).limit(200).then((data)=> {
    console.log("reader working AT:", data.length ," Jobs");
    for(let i=0; i < data.length; i++){
      console.log("reading progress AT:", data[i].id);
      let asset = new AssetTags(data[i]);
      Mdb.asset.updateOne({ id: data[i].id},{
        $set:{ tagReader: asset.getJobs() }
      }).then(dt=>{
        console.log("asset tagReader has been updated :", data[i].id);
      }).catch((Err)=>{
        console.log("Error In Updating asset", data[i].id);
      });
    }
    res.send(data.length," jobs updated");
  }).catch((Err)=>{ 
    console.log("Getting Jobs have error:", Err);
  });
});
postRoutes.route('/getAssets/:page').get(function (req, res) {

  let page = req.params.page;
  var request_data=appConfig.getActionInfo("getAssets");
  var token=appConfig.getToken();
  request_data.data={}; //={ "limit": 5, page: 1 }
  request_data.url=request_data.url+"?limit=250&page="+page; //append parra
  console.log("request_data ==>", request_data,"token=>",token);
  request({url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
      console.log("getting");
      if(error){
        console.log("GET Asset API Error");
      }else{
         console.log("Res getting");
         try{
              var data=JSON.parse(response.body);
              console.log("API responded :", data.length);
              //res.send(data);
             let Update=0,Saved=0;
             for(let temp=0; temp < data.length; temp++){
                Mdb.asset.find({ id: data[temp].id }).then((dt)=>{
                if(dt.length > 0){
                   //Update case 
                   //Update++;
                   let set={ id: data[temp].id };
                   let where ={ id: data[temp].id };
                   console.log("set:", set, "where:", where )

                 }else{
                   //save Case
                   
                  let asset= new Mdb.asset(data[temp]);
                  asset.save().then((rs)=>{
                    console.log("asset Saved SUCESSFULLY")
                  }).catch((Err)=>console.log("Asset Save ERROR:", Err ));
                 }
                 if(temp == dt.length-1){
                   //console.log(" Total :",Saved ,"New Data Added and Total:",Update, " Data Modified SUCESSFULLY" )
                   res.send("try to save or update assets AT:" + new Date());
                 }
               }).catch((Err)=> {
                console.log("Err in checking exist ERROR:", Err);
              })

            }
           
          }catch(e){
           console.log("API response Not Valid. ERROR:", e);
          }
      }  
  });
  
});

// postRoutes.route('/checkLogin').get(function (req, res) {
//   res.send("Testing checkLogin");
//   // let noSql=[];
//   // Mdb.bynder_jobs.find(noSql).limit(200).then((dt)=>{
//   //   res.send(dt);
//   // }).catch((Err)=>{
//   //   console.log("art log select error:", Err);
//   // });
// });

module.exports = postRoutes;