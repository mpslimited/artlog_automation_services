const express = require('express');
const async = require('async');
const await = require('await');
const poRoutes1 = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const fetch = require('node-fetch');
let mysql  = require('mysql');
let slashes = require('slashes');
let moment = require('moment');
let config = require('./../config/Mysqlconfig');
let Mdb = require('../models/post.model');
let AssetTags = require("../models/AssetTags");
let Metadt = require("../models/Metadt");
let appConfig = require('../models/config');
let JobProcess = require('../models/JobProcess');
let ApiProcess = require('../models/ApiProcess');
let token=appConfig.getToken();



const oauth = OAuth({
  consumer: { key: '71BEFFCC-2CC9-476D-93A8A79BB92BD87B', secret: 'a8de7d89165b8234405b35c83553a318' },
  signature_method: 'HMAC-SHA1', hash_function (base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});




poRoutes1.route('/dataAutomation').post( function (req, res) {
  Mdb.bynder_jobs.find({
    isUpdated: true
  }).then(data=>{
    for( let dt of data) {
      console.log(dt.presetstages)
      if( dt.presetstages.length > 0 && dt.Preset_Stages.length < dt.autoStage.length ) {
        let StageData = [];
        for(let ddd of dt.presetstages){
           let ddata = dt.autoStage.filter(d => d.StageName  == ddd.name );
           if(ddata.length > 0 ){
            StageData.push({
              ID: ddd.ID,
              name : ddd.name ,
              position : ddd.position ,
              start_date : ddata[0].start_date ,
              job_date_finished : ddata[0].job_date_finished
            })
           }
        }
        console.log(StageData);
        Mdb.bynder_jobs.updateOne({ id: dt.id }, { 
          $set: { 
            backupStage: dt.Preset_Stages,
            Preset_Stages : StageData 
          }
        }).then(data=> {
          console.log("Data Updated sucessfully ");
        }).catch(E=>{
          console.log("Error: ", E);
        });
      }
    }
  })
});
poRoutes1.route('/jobprocessing').post( function (req, res) {
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
poRoutes1.route('/jobsbycampaignid/:campaignId').post( function (req, res) {
  let campaignId = req.params.campaignId;
  console.log("ACT: jobsbycampaignid and :", campaignId );
  let RunningDt  = UpdatingRequest.filter(d=> d.ID == campaignId );

  Mdb.campaign.find( { 'ID': campaignId}).then(redt=>{
    if(redt.length > 0 ){
      let JProcess = new JobProcess(Mdb);
      let ActivePage = redt[0].activePage |0;
      let NeedChagnePage = redt[0].needchangePage |0;
      let tillPage = 0;
      if( ActivePage >= NeedChagnePage ){ tillPage = ActivePage } else { tillPage = NeedChagnePage; }
      if(tillPage ==0) { tillPage =12; }
      var token=appConfig.getToken(); 
      const myProm = new Promise(function(resolve, reject) {
        let i=1;
        var request_data=appConfig.getActionInfo("jobsbycampaignid", campaignId);
        request_data.data= { limit: '1000', page: i  };
        console.log("data", request_data.url,  request_data.data);
        request({url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
          }, function(error, response, body) {
          //console.log(error, response.body);
          if(error){
            reject(new Error('API Responce Have Invalid Error: ', error.message));
           }else if(response.body.indexOf("504 Gateway Time-out") >-1){
            console.log("API Response : ==>504 Gateway Time-out");
            reject(new Error('504 Gateway Time-out: '));
         }else{
            let dt=[];
            try{
              dt= JSON.parse(response.body);
              console.log("Data getting at Bynder End Total:", dt.length );
              resolve(dt);
            }catch(e){
               self.mainTainError(response, e.error);
               reject(new Error('API Responce Have Invalid Error: ', e.message));
            }
         }
        })
      });
      myProm.then((dt) =>{
        console.log('resolved', d.length );
        RunningDt[0].complated =1;
      });
    }
  })
});
module.exports = poRoutes1;