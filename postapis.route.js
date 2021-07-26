const express = require('express');
const async = require('async');
const await = require('await');
const poRoutes1 = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const fetch = require('node-fetch');
// let mysql  = require('mysql');
// let slashes = require('slashes');
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


const axios = require("axios");


poRoutes1.route('/activeJobs').post( function (req, res) {
  Mdb.bynder_jobs.find({ "job_active_stage.status": {
    $in: ["Active","NeedsChanges"]
  }}).then((data)=>{
    if(data.length > 0){ //3600,
      res.send({'msg':'active job moved in redis', 'Length': data.length});
    }
  });
});
poRoutes1.route('/approvedJobs').post( function (req, res) {
  Mdb.bynder_jobs.find({'job_active_stage.status':'Approved'}).then((data)=>{
    if(data.length > 0){ //3600,
      res.send({'msg':'approved job moved in redis', 'Length': data.length});
    }
  });
}); 

poRoutes1.route('/existingArtTeamData1').post( function (req, res) {
  Mdb.bynder_jobs.find({ artTeamStatus: 'Delivered', receiveddate: {$exists: true }}).then((data)=>{
    for( let dt of data ){
      console.log("data==>", dt);
      let stages= dt.Preset_Stages.filter(d=> d.StageNames =="Designer Create Asset" || d.name == "Designer Create Asset");
      if(stages.length > 0){
       let index= dt.Preset_Stages.indexOf(stages[0]);
       if(!! dt.Preset_Stages[index+1]){
        console.log(dt.Preset_Stages[index] , dt.Preset_Stages[index+1]);
        let artComplateDt=dt.Preset_Stages[index+1].start_date || dt.Preset_Stages[index+1].job_date_finished ;
        Mdb.bynder_jobs.updateMany({ id: dt.id},{
          $set:{
            artComplateDate: artComplateDt
          }
        }).then(data=>{
          console.log("Data:", dt.ID);
        })
       }
       if(dt._id == data[data.length-1]._id){
         res.send(dt);
       }
      }
    }
  }).catch(e=>{
    console.log("eEEEEE:", e);
  });
});
poRoutes1.route('/uodateMetadt').post( function (req, res) {
  console.log("uodateMetadt in metapropertiesbyid");
  let id='cd8809565088496da4955eb3327fea04';
  var request_data=appConfig.getActionInfo("metapropertiesbyid", id );
    console.log("data", request_data.url,  request_data.data);
    request({url: request_data.url, method: request_data.method, qs: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token)) }, function(error, response, body) {
    
    });
});

poRoutes1.route('/mpsdueDate').post( function (req, res) {
  let start = moment('2020-04-16').format('YYYY-MM-DD') +'T00:00:00';
  let end = moment('2020-04-16').format('YYYY-MM-DD') +'T23:59:59';
   let q={
      receiveddate: {
        $gte: new Date(start),
        $lt: new Date(end)
      }};
  Mdb.bynder_jobs.find(
    //q
    //{ artComplateDate:{$exists: true}, receiveddate:{$exists: false}}
   // { job_key: 'EM2-10142' , receiveddate:{$exists: true} }
   //{ receiveddate : new Date('2020-04-16')}
   {receiveddate:{$exists: true}}
    ).then((data)=>{
    for(let ddt of data){
      let momentdt= moment(ddt.receiveddate);
      if( parseInt(momentdt.format('H'))  > 12  ) {
        momentdt= momentdt.add(1, 'days');
      } 
      let addedDay = 1;
      if(ddt.job_active_stage.status == 'NeedsChanges'){
        addedDay = 0;
        if(momentdt.day()==0 ){
          addedDay = 1;
        } else if(momentdt.day()==6  ){
          addedDay = 2;
        } else if(momentdt.day()==5 && parseInt(momentdt.format('H'))  > 12){
          if(moment(ddt.receiveddate).day() == momentdt.day()){
            addedDay = 2;
          }else {
            addedDay = 0;
          }
        } 
      } else {
        if(momentdt.day()==0  ){
          addedDay = 2;
        } else if(momentdt.day()==6  ){
          addedDay = 3;
        } else if(momentdt.day()==5 && parseInt(momentdt.format('H'))  > 12){
          if(moment(ddt.receiveddate).day() == momentdt.day()){
            addedDay = 4;
          }else {
            addedDay = 3;
          }
        } else if(momentdt.day()==5 && parseInt(momentdt.format('H'))  <= 12){
          addedDay = 3;
        } 
      }
      let $set={};
      $set.mpsDueDate = new Date(momentdt.add( addedDay , 'days').toISOString());
      console.log("Jobkey:", ddt.job_key, "receiveddate", ddt.receiveddate ,"mpsDueDate:", $set.mpsDueDate);
      Mdb.bynder_jobs.updateOne({_id: ddt._id},{
        $set: $set
      }).then(d=>{
        console.log(d);
      }).catch(error=>{
        console.log("ERROR:", error);
      });
    }
    res.send({'msg':'Data modified'});
  });
})
poRoutes1.route('/existingArtTeamData').post( function (req, res) {
  Mdb.bynder_jobs.find().then((data)=>{
     for(let dt of data){
       if(!!dt.presetstages && dt.presetstages.length > 0 && !!dt.Preset_Stages && dt.Preset_Stages.length > 0){
        let dd = dt.presetstages.filter(d => d.name =='Designer Create Asset');
        if(dd.length > 0 ){
         let poData= dt.Preset_Stages.filter(d => d.position == dd[0].position );
         if(poData.length > 0 && !!poData[poData.length-1].start_date ) {
           let $set = {}
           $set.receiveddate = poData[poData.length-1].start_date;
           if(!!poData[poData.length-1].job_date_finished){
            $set.artTeamStatus ='Delivered';
            $set.artComplateDate = poData[poData.length-1].job_date_finished;
           }else {
            $set.artTeamStatus ='WIP';
           }
           Mdb.bynder_jobs.updateOne({ _id: dt._id },{
             $set: $set
           }).then((dt)=>{
            console.log(dt);
           }).catch((err)=>{ 
             console.log('Data Error:', err);
           });  
         }
        }
       }
     }
  });
}); 

poRoutes1.route('/refreshJobs').post( function (req, res) {
  Mdb.bynder_jobs_refresh.find({ isRefresh: false}).limit(1).then((data)=>{
    console.log(data.length);
    if(data.length > 0 ) {
      for(let dt of data){
        var request_data=appConfig.getActionInfo("jobsbyID", dt.id );
        console.log("data", request_data.url,  request_data.data);
        request({url: request_data.url, method: request_data.method, qs: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token)) }, function(error, response, body) {
         // console.log("data:", response);
          if(!!response.body){
            let jsonDt = JSON.parse(response.body); 
            let job_key = (jsonDt.jobMetaproperties.hasOwnProperty('ccf531b93d1c46428aa5c52bc8cc639f'))? jsonDt.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'].trim():''; 
            //console.log(jsonDt.id,  jsonDt.NewjobMetaproperties, job_key );
            Mdb.bynder_jobs_refresh.updateOne({ id: jsonDt.id, isRefresh: false },{
              $set:{
                NewjobMetaproperties : jsonDt.jobMetaproperties,
                isRefresh: true,
                job_key: job_key
              }
            }).then((rs)=>{
              //console.log('Data testing 123:', rs, jsonDt.id);
              Mdb.bynder_jobs.updateOne({ id: jsonDt.id },{
                $set:{
                  jobMetaproperties : jsonDt.jobMetaproperties,
                  job_key: job_key
                }
              }).then((ddt)=>{
               // console.log(ddt);
                res.send(data);
              });
            });
            
          }
        });
      }
    } else {
      res.send({'msg':'Data not found for refresh the metadata'});
    }
  }).catch((error)=>{
    console.log("Error data: ", error);
  })
});

poRoutes1.route('/jobprocessing').post( function (req, res) {
  console.log("jobprocessing Action");
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
            console.log("change dt req......");
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
          limit: 500, page: i  };
        //request_data.url= request_data.url + +"?limit=1000&page="+i
        console.log("data", request_data.url,  request_data.data);
        request({url: request_data.url, method: request_data.method, qs: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
          }, function(error, response, body) {
          //console.log(error, response.body);
          if(error){
             reject(new Error( error));
             //
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
                reject( new Error('API Response Have Invalid Error: ', e.message));
            }
         }
        })
      });
      // Promish 2 for Bynder API 
      myProm2.then(data=>{
        console.log( "Total Data Length :", data.data.length );
        let $campSet={  process: true, processedPage: i /* totalPage: i,*/ }
        if(data.data.length < 500){  $campSet.totalPage = i; $campSet.process = false  };
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
                if(docs.filter(d=> d.id =='2626c8ac-167e-422b-b766-60a7a0990aef').length > 0){
                  console.log("Data syncing found", JobsResult[k]);
                }
                if(docs.length > 0){   // Update Cases 
                  
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
function changeStageName(StageNames){
  try{
    if( StageNames.trim().toLowerCase() =='research asset and original source') {
      return 'Permission 1: Research Asset and Original Source';
    } else if( StageNames.trim().toLowerCase() =='select job type') {
      return 'Permission 2: Copyright Status';
    } else if( StageNames.trim().toLowerCase() =='copyright status') {
      return 'Permission 2: Copyright Status';
    } else if( StageNames.trim().toLowerCase() =='contract negotiation and asset procurement') {
      return 'Permission 3: Contract Negotiation and Asset Procurement';
    } else if( StageNames.trim().toLowerCase() =='asset approval') {
      return 'Permission 4: A&P Record Keeping';
    } else if( StageNames.trim().toLowerCase() =='a&p record keeping') {
      return 'Permission 4: A&P Record Keeping';
    } else if( StageNames.trim().toLowerCase() =='art production lead assigns designer') {
      return 'Art 1: Assign Designer';
    } else if( StageNames.trim().toLowerCase() =='designer create asset') {
      return 'Art 2: Designer Create Asset';
    } else if( StageNames.trim().toLowerCase() =='art production lead review') {
      return 'Art 3: Tech Review';
    } else if( StageNames.trim().toLowerCase() =='math audit review') {
      return 'Content Feedback 1';
    } else if( StageNames.trim().toLowerCase() =='math managing editor feedback and approval') {
      return 'Content Feedback 2';
    } else if( StageNames.trim().toLowerCase() =='waiting room preflight') {
      return 'Permission 5: Waiting Room Preflight';
    } else if( StageNames.trim().toLowerCase() =='complete image research and provide options to writer') {
      return 'Stock 1: Complete Image Research and Provide Options to Writer';
    } else if( StageNames.trim().toLowerCase() =='upload final image') {
      return 'Stock 2: Upload Final Image';
    } else {
      return StageNames.trim();
    }
  } catch(e){
    return StageNames.trim();
  }
  
}
poRoutes1.route('/stagelabelchange').post( function (req, res) {
  console.log("stagelabelchange Action has been called:");
  Mdb.bynder_jobs.find({ Preset_Stagesq:{$exists: false},
    "job_active_stage.status": {
        $ne: "Cancelled"
    }
  }).limit(500).then((data)=>{
    for( let dt of data){
      let Oldpresetstages = JSON.parse(JSON.stringify(dt.presetstages));
      let OldPreset_Stages = JSON.parse(JSON.stringify(dt.Preset_Stages));
      if( dt.presetstages &&  dt.Preset_Stages ){
        console.log( data.length);
        let New_Preset_Stages = [];
        for( let ddt of dt.Preset_Stages){
          if(ddt.name){
            ddt.name = changeStageName(ddt.name);
          } else if(ddt.StageNames) {
            ddt.StageNames = changeStageName(ddt.StageNames);
          }
          New_Preset_Stages.push( ddt );
        }
        //console.log(" New Data : ", New_Preset_Stages);
        // data for Preset_Stages
        for (let ddtt of dt.presetstages ) {
          if(ddtt.name) {
            ddtt.name = changeStageName(ddtt.name);
          }
        }
       // break;
      // console.log("data testing:", dt );
       Mdb.bynder_jobs.updateOne({ _id: dt._id },{
         $set:{
          presetstages: dt.presetstages ,
          presetstagesq: Oldpresetstages,
          Preset_Stages: New_Preset_Stages,
          Preset_Stagesq:  OldPreset_Stages ,
         }
       }).then((rs)=>{
         console.log('responce found:', rs);
       });
       
      }
    }
    res.send({ 'Total Data' : data.length });
  });
});
poRoutes1.route('/thumbsdata').post( function (req, res) {
  console.log("jobprocessing Action");  console.log("Data summary");
  Mdb.bynder_jobs.find({ "job_active_stage.status": "Approved", thumb: "", updatethm:{ $exists: false}, assetID: { $exists: true,  $ne: "" }
  },{ job_key: true, 'job_active_stage.status': true, thumb:1,  assetID:1 }).limit(1).then(data=>{
    var token = appConfig.getToken(); 
    var request_data=appConfig.getActionInfo( 'getAssets', data[0].assetID );
    //request_data.data= { limit: '1000', page: i  };
    request_data.url = request_data.url + '?id=' + data[0].assetID;
    console.log('URL:', request_data.url);
    var token=appConfig.getToken(); 
    request({url: request_data.url, method: request_data.method, qs: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token)) }, function(error, response, body) {
      if(error){
        console.log(error, response.body);
      } else {
        try {
          let dt = JSON.parse(response.body);
          if(dt.message){
            console.log(dt, data[0].assetID);
            Mdb.bynder_jobs.updateMany({ assetID: data[0].assetID},{
              $set : {
               // thumb: dt.thumbnails.thul || dt.thumbnails.webimage,
                updatethm: false
              }
            }).then(dt=>{
              res.send( {'thm': dt.thumbnails , dt: dt});
            })
          } else {
            Mdb.bynder_jobs.updateMany({ assetID: dt.id},{
              $set : {
                thumb: dt.thumbnails.thul || dt.thumbnails.webimage,
                updatethm: true
              }
            }).then(dt=>{
              res.send( {'thm': dt.thumbnails , dt: dt});
            })
          }
          //res.send(dt.thumbnails);
          
        } catch (Error){
          console.log(Error);
        }
      }
       // res.send(response.body);
    });
   // res.send({ 'msg':'data testing'});
  }) ; 
  
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