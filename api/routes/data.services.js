const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const await = require("await");
const async = require("async");
let moment = require('moment');



let Mdb = require('../models/post.model');
let AssetTags = require("../models/AssetTags");
let Metadt = require("../models/Metadt");
let appConfig = require('../models/config');
let JobProcess = require('../models/JobProcess');
let ApiProcess = require('../models/ApiProcess');

const oauth = OAuth({
  consumer: { key: '71BEFFCC-2CC9-476D-93A8A79BB92BD87B', secret: 'a8de7d89165b8234405b35c83553a318' },
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

// new changes 
// starships

// end new changes
postRoutes.route('/updateAsset/').post(function (req, res) {
  console.log("updateAssetasset data :", req.body);
  //let id='88021AB3-AA05-4E6C-985CC6AFBBBC2CCB';
  Mdb.bynder_jobs.find({ updateTag: 'Processing' }).limit(1).then((data) => {
    if(data.length > 0){
      for(let dt of data){
        var request_data = appConfig.getActionInfo("updateAsset", "88021AB3-AA05-4E6C-985CC6AFBBBC2CCB/" );
        request_data.method = 'POST';
        let formData= { tags: dt.generatedTags };
        request_data.data={ } //tags : dt.generatedTags };
        let authheader= oauth.toHeader( oauth.authorize(request_data, appConfig.getToken()) );

        let updtInfo= new Promise(resolve => {
            request({ method: "POST", url: request_data.url,  headers: authheader , formData: formData}, 
              function (error, response, body) {
                if(!error)
                  resolve(body);
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
        });
        console.log(updtInfo, "data => ", data);
      }
    }
  }).catch(Err => { console.log("Error:", Err); });
  //res.send(request_data);
});
postRoutes.route('/getdata/:campaignId').get(function (req, res) {

  let campaignId = req.params.campaignId;

  var request_data = appConfig.getActionInfo("getAssets", campaignId);
  //request_data.data={ "limit": 5, page: 1 }
  var token = appConfig.getToken();
  console.log(campaignId, "::", request_data, "token=>", token);
  try {
    request({
      url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
    }, function (error, response, body) {
      console.log("API responded ...", JSON.stringify(request_data));
      res.send(response);
    });
  } catch (err) {
    console.log(err);
  }

});
postRoutes.route('/getAssetsProp/:id').get(function (req, res) {
  let id = req.params.id;
  //console.log("hitting getAssetsProp", id);

  var request_data = appConfig.getActionInfo("getAssetsProp");
  var token = appConfig.getToken();
  request_data.data = {};
  //console.log("request_data :1 ==>", request_data,"token=>",token);

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
postRoutes.route('/getjobsmeta/').get(function (req, res) {

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
              //Update
              let set = { ID: MetaDatas[temp].ID };
              let where = { ID: MetaDatas[temp].ID };
              console.log("set:", set, "where:", where)
              //Mdb.metaproperties.updateOne({ set} ,{ where })
            } else {
              //Insert 
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

      //res.send(response.body);
    }
  });

});
//
postRoutes.route('/moveAssetBanktoWorkflow/').post(function (req, res) {
  Mdb.asset.find(

    { tagReader: { $exists: true } }

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
        //

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
  Mdb.asset.find(
    //{ "tags":"SC_0402TE1_L10_L11"}
    //{'id':'4A86BF38-A7D7-4893-ABCC121FC58FC61D'}
    //{'id':'B1874BF8-165D-42F4-95881737D7487D9E'}
    //{'id':'90A1FE91-2C56-41EC-88EE1075D6EB7D49'}
    { tagReader: { $exists: false } }
  ).limit(200).then((data) => {
    console.log("reader working AT:", data.length, " Jobs");
    for (let i = 0; i < data.length; i++) {
      console.log("reading progress AT:", data[i].id);
      let asset = new AssetTags(data[i]);
      Mdb.asset.updateOne({ id: data[i].id }, {
        $set: { tagReader: asset.getJobs() }
      }).then(dt => {
        console.log("asset tagReader has been updated :", data[i].id);
      }).catch((Err) => {
        console.log("Error In Updating asset", data[i].id);
      });
    }
    res.send(data.length, " jobs updated");
  }).catch((Err) => {
    console.log("Getting Jobs have error:", Err);
  });
});
postRoutes.route('/getAssets/:page').get(function (req, res) {
  let page = req.params.page;
  var request_data = appConfig.getActionInfo("getAssets");
  var token = appConfig.getToken();
  request_data.data = {}; //={ "limit": 5, page: 1 }
  request_data.url = request_data.url + "?limit=250&page=" + page; //append parra
  console.log("request_data ==>", request_data, "token=>", token);
  request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function (error, response, body) {
    console.log("getting");
    if (error) {
      console.log("GET Asset API Error");
    } else {
      console.log("Res getting");
      try {
        var data = JSON.parse(response.body);
        console.log("API responded :", data.length);
        //res.send(data);
        let Update = 0, Saved = 0;
        for (let temp = 0; temp < data.length; temp++) {
          Mdb.asset.find({ id: data[temp].id }).then((dt) => {
            if (dt.length > 0) {
              //Update case 
              //Update++;
              let set = { id: data[temp].id };
              let where = { id: data[temp].id };
              console.log("set:", set, "where:", where)

            } else {
              //save Case

              let asset = new Mdb.asset(data[temp]);
              asset.save().then((rs) => {
                console.log("asset Saved SUCESSFULLY")
              }).catch((Err) => console.log("Asset Save ERROR:", Err));
            }
            if (temp == dt.length - 1) {
              //console.log(" Total :",Saved ,"New Data Added and Total:",Update, " Data Modified SUCESSFULLY" )
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
postRoutes.route('/jobprocessing').post( function (req, res) {
  console.log("jobprocessing Action called jobs processing working...!");
  const myProm1 = new Promise(function(resolve, reject) {
      Mdb.campaign.find({ process: true, ExeOrder: true }).limit(1).then(dt=>{
        if(dt.length > 0) {
          resolve(dt);
        } else {
          //bb6f3943-5a47-49f0-ab82-c6278d1dad29
          let where ={ ExeOrder: true }
          Mdb.campaign.updateMany(where ,{
           $set:{
            process: true,
            processedPage:0
           }
          }).then(d=>{ 
          }).catch(e=>{
            console.log(e.message);
          });
        }
      }).catch((e) => {
         reject( new Error('REJECTError:', Err));
      });
  });
  // Promish 1 For Data Selection 
  let i= 0;
  myProm1.then((data)=>{
      //res.send(data);
      console.log("Data Processed ", data[0].ID ,"Name:", data[0].name );
      var token=appConfig.getToken(); 
      const myProm2 = new Promise(function(resolve, reject) {
      if(!!data[0].processedPage && data[0].processedPage > 0){
          i= data[0].processedPage +1;
      } else {
        i = 1;
      }
      let tillDate = moment().add(1, 'days').toISOString();  
      var request_data=appConfig.getActionInfo("jobsbycampaignid", data[0].ID );
          request_data.data= {  
          dateCreatedFrom :  new Date("2019-02-25").toISOString(),
          dateCreatedTo :  tillDate,
          limit: 1000, page: i  };
        //request_data.url= request_data.url + +"?limit=1000&page="+i
        console.log("data", request_data.url,  request_data.data);
        request({url: request_data.url, method: request_data.method, qs: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
          }, function(error, response, body) {
          //console.log(error, response.body);
          if(error){
             reject(new Error( error));
           }else if(response.body.indexOf("504 Gateway Time-out") >-1){
            console.log("API Response : ==>504 Gateway Time-out");
             reject(new Error( '504 Gateway Time-out'));
          }else if(response.body.indexOf("400 Bad Request") >-1 && response.body.indexOf("page is higher than amount of pages") >-1){
            console.log("API Response : ==>page is higher than amount of pages");
            //code hear for highre than amout of pages //
             reject(new Error( 'page is higher than amount of pages'));
          }else{
            let dt=[];
            try{
              dt= JSON.parse(response.body);
              console.log("Data getting at Bynder End Total:", dt.length );
              resolve( { ID: data[0].ID,  name: data[0].name , data : dt, });
            }catch(e){
                reject( new Error('API Responce Have Invalid Error: ', e.message));
            }
         }
        })
      });
      // Promish 2 for Bynder API 
      myProm2.then(data=>{
        console.log( "Total Data Length :", data.data.length );
        let $campSet={  process: true, processedPage: i /* totalPage: i,*/ }
        if(data.data.length < 1000){  $campSet.totalPage = i; $campSet.process = false  };
        Mdb.campaign.updateMany({ ID: data.ID } ,{
          $set: $campSet
         }).then(d=>{
           console.log(d);
         }).catch(e=>{
          console.log("Update Err:", e.message );
         });
         let responceDt = {ID: data.ID , Name: data.name , processedPage: i, TotalData: data.data.length }
         // Code Hear For Merging in LocalDatabase
         let JobsResult = data.data;
         console.log("responded on JobsResult", JobsResult.length);
         var presetsforUpdating=[...new Set(JobsResult.map(x =>  x.presetID))];
         var jobsForUpdate=new Array();
         var saveSuccess=new Array();
         var movedCount=0; 
         let updatedID = new Array(), savedID = new Array();
         let APIProcess = new ApiProcess(Mdb); // No need to avpid data before 25 feb
         JobsResult= JobsResult.filter(dd=> new Date(dd.dateCreated) > new Date("2019-02-25"));
         for(let k=0; k <JobsResult.length; k++){
           if( APIProcess.checkAvoideJobs( JobsResult[k] ) ){
              var Query=[{"$lookup":{"localField":"presetID","from":"job_presets","foreignField":"ID","as":"joincollection"}}];
              Query.push({$match: { id: JobsResult[k].id }});
              const myProm3 = new Promise(function(resolve, reject) {
                Mdb.bynder_jobs.aggregate( Query ).then((docs)=>{
                  resolve(docs)
                });
              })
              myProm3.then((docs)=>{
                if(docs.length> 0){   // Update Cases 
                  APIProcess.updateHandler(docs, JobsResult[k]);
                } else { 
                  APIProcess.saveHandler(JobsResult[k]);
                }
              });
            }
         }
         res.send(responceDt);
      });
  });
});

module.exports = postRoutes;