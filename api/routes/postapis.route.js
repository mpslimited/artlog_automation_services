const express = require('express');
const async = require('async');
const await = require('await');
const poRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const fetch = require('node-fetch');
let mysql  = require('mysql');
let slashes = require('slashes');
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
let UpdatingRequest= new Array(
 // { ID: 'ee19e14d-bdb9-407b-ab56-17292d585787' , ExeOrder: false, name:"Marketing", pageCount:0}, 
 // { ID: '12087c22-260a-4fb8-834e-d231c4c277a3' , ExeOrder: true , name: 'Geodes Readable Library', pageCount:0}, 
 // { ID: '3d39f53b-3123-4eb1-a3f1-274cd4160efe' , ExeOrder: true, name :"Wit & Wisdom", pageCount:0}, 
  //{ ID: '9618db88-fc78-47a5-9916-e864e696ae11' , ExeOrder: true, name: 'Eureka Math 2', pageCount:0}, 
  { ID: '4924dc05-03c5-4086-90ce-41d8bf501684' , ExeOrder: true, name: "PhD Science", pageCount:0 , complated:0 }, 
);

poRoutes.route('/synccampaignId').post(function (req, res) {
  var hostname="http://localhost:3000";
  for( let i=0; i<  UpdatingRequest.length ; i++){
    if(UpdatingRequest[i].ExeOrder==true){
      var targetURL= hostname+"/dataApi/jobsbycampaignid/"+ UpdatingRequest[i].ID;
          excuteURL( targetURL );
          res.send(UpdatingRequest[i]);
         // UpdatingRequest[i].ExeOrder=false; 
          break;
    }
  }
  if(UpdatingRequest.filter(d=> d.ExeOrder === false).length ==0){
    UpdatingRequest = UpdatingRequest.map(d=> ({ ID : d.ID, ExeOrder : true, name : d.name }));
    console.log("Round Complated");
  }
});

function  excuteURL(URLexc){
  console.log("\n\n excuteURL",URLexc );
  try{
    var options = { method: 'POST', url: URLexc, headers:{ 'Cache-Control': 'no-cache' }};
    request(options,  function (error, response, body) {
      if (error) //throw new Error(error);
      console.log(error);
    });
  }catch(Err){
    console.log("Error:", Err);
  }
}
poRoutes.route('/jobprocessing').post( function (req, res) {
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
            reject();
          }).catch(e=>{
            console.log(e.message);
          });
        }
      }).catch((e) => {
        console.log("Error:", Err);
        reject();
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
        var request_data=appConfig.getActionInfo("jobsbycampaignid", data[0].ID );
          request_data.data= { dateCreatedFrom :  new Date("2019-02-25").toISOString(),
          dateCreatedTo :new Date().toISOString(), limit: 1000, page: i  };
        //request_data.url= request_data.url + +"?limit=1000&page="+i
        console.log("data", request_data.url,  request_data.data);
        request({url: request_data.url, method: request_data.method, qs: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
          }, function(error, response, body) {
          //console.log(error, response.body);
          if(error){
            reject();
            console.log("API ERROR==>", error.message);
           }else if(response.body.indexOf("504 Gateway Time-out") >-1){
            console.log("API Response : ==>504 Gateway Time-out");
            reject();
          }else if(response.body.indexOf("400 Bad Request") >-1 && response.body.indexOf("page is higher than amount of pages") >-1){
            console.log("API Response : ==>page is higher than amount of pages");
            //code hear for highre than amout of pages //

            reject();
          }else{
            let dt=[];
            try{
              dt= JSON.parse(response.body);
              console.log("Data getting at Bynder End Total:", dt.length );
              resolve( { ID: data[0].ID,  name: data[0].name , data : dt, });
            }catch(e){
              // self.mainTainError(response, e.error);
               throw new Error('API Responce Have Invalid Error: ', e.message);
               reject();
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

poRoutes.route('/jobsbycampaignid/:campaignId').post( function (req, res) {
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
            reject();
            console.log("API ERROR==>", error.message);
           }else if(response.body.indexOf("504 Gateway Time-out") >-1){
            console.log("API Response : ==>504 Gateway Time-out");
            reject();
         }else{
            let dt=[];
            try{
              dt= JSON.parse(response.body);
              console.log("Data getting at Bynder End Total:", dt.length );
              resolve(dt);
            }catch(e){
               self.mainTainError(response, e.error);
               throw new Error('API Responce Have Invalid Error: ', e.message);
               reject();
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




module.exports = poRoutes;