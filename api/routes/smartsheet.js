const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const await = require("await");
const async = require("async");
let  Metadt  =require("../models/Metadt");
let Mdb  = require('../models/post.model');
let checkToken = require('../models/middleware');
var mongoose = require( 'mongoose' );
var jwt = require('jsonwebtoken');
//let appConfig=require('./config');
// Metadt= new Metadt('dddd');
// Metadt.print("hello this is metdt class");
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (bearerHeader) {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

let d=[], WorkFlowJobsMetaData=[], GGrades=[], GModules=[], GCurriculaWIP=[], GArtComplex=[], GArtAssign=[],
GRisk=[],GImpact=[];
let GMeta=new Metadt(d);

Mdb.metaproperties.find().then((metaData)=>{
  WorkFlowJobsMetaData = metaData;
  GMeta.iniMeta(metaData);
  GMeta.initAssetMeta(GCurriculaWIP);
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
  }
}).catch((Err)=>{ console.log(" Error in ASset Meta:", Err);});
postRoutes.route('/dt').get(function (req, res) {  
  
  res.send({ grade: GGrades, module: GModules, artcomplex: GArtComplex, artAssign: GArtAssign, risk: GRisk, impact: GImpact});
});
postRoutes.route('/dataInit').post(function (req, res) {  
  res.send({ grade: GGrades, module: GModules, artcomplex: GArtComplex, artAssign: GArtAssign, risk: GRisk, impact: GImpact});
});
postRoutes.route('/logout').post(function (req, res) {  
  console.log("Action Logout");
  res.send(data={'mag':"cleard"});
});
//dellSearchState
postRoutes.route('/dellSearchState', verifyToken).post(function (req, res) {
  console.log("ACTION : dellSearchState REQ==>",req.body);
  Mdb.searchState.remove({'_id': req.body._id}).then((data)=>{
    res.send({'msg': 'DELETED', "did": req.body._id});
  }).catch((Err)=>{
    console.log("Error in delete data", Err);
  });
});
postRoutes.route('/setDefaultSearch', verifyToken).post(function (req, res) {
  console.log("ACTION : dellSearchState REQ==>",req.body);
  Mdb.searchState.updateMany({'uid':  req.headers['authuser']},{ $set:{ isDefault: false }}).then((rs)=>{
    Mdb.searchState.updateOne({"_id": req.body.default},{
        $set:{ isDefault : true }
      }).then((rr)=>{
        
        res.send({'msg':'DEFAULTADDED', rid:req.body.default });
      }).catch((Error)=>{ console.log( "ERROR in SET DEFAULT :", Error) ; })
  }).catch((Err)=>{
    console.log("Updating Mulit Err: ", Err);
  });
});
//cleargridStage
postRoutes.route('/cleargridStage', verifyToken).post(function (req, res) { 
  console.log("ACTION : cleargridStage selectedColumn REQ==>",req.body);
  Mdb.searchState.remove({ uid: req.headers['authuser'] , state:'GridStage' }).then((data)=>{
   res.send(data);
  });
});
postRoutes.route('/gridStage', verifyToken).post(function (req, res) {  
  console.log("ACTION : gridStage selectedColumn REQ==>",req.body);
  Mdb.searchState.find({ uid: req.headers['authuser'] , state:'GridStage' }).then((data)=>{
    if(data.length > 0){
      Mdb.searchState.updateOne({ uid: req.headers['authuser'] , state:'GridStage'},{
        $set:{
          fields: req.body.selectedColumn
         }
      }).then((dt)=>{
        res.send(dt);
      }).catch((Err)=>{ console.log("Error in updating data"); })
    }else{
      let searchState= new Mdb.searchState({ uid: req.headers['authuser'] ,searchTitle : "Reset Grid Data",
      fields: req.body.selectedColumn, state:'GridStage' });
      searchState.save().then((rs)=>{
      res.send(rs);
      }).catch(Err=>{
        console.log("ERROR in SAVED: ERR:", Err);
      });
    }
  }).catch((Err)=>{
    console.log("Finding Error :", Err);
  });
})
postRoutes.route('/searchState', verifyToken).post(function (req, res) {  
  console.log("ACTION : searchState REQ==>",req.body);
  let searchState= new Mdb.searchState({uid: req.headers['authuser'] , searchTitle : req.body.searchText, fields: req.body.frmdt, state:'SearchStage' });
  searchState.save().then((rs)=>{
    console.log("value saved sucessfully ", rs); 
    res.send(rs);
    }).catch(Err=>{
      console.log("ERROR in SAVED: ERR:", Err);
    });
});

postRoutes.route('/getUserInfo').post(function (req, res) {  
   console.log("getUserInfo cookies values :: ", req.cookies);
   if(!req.cookies.jssonId){
    res.status(404);
   }else{
     console.log(" else data ");
     var options = { method: 'POST',
        url: 'https://greatminds.mpstechnologies.com/GreatMinds/admin/getLoggedInUserDeatils',
        headers: 
        { 'cache-control': 'no-cache', Connection: 'keep-alive', 'Content-Length': '0',
          Cookie: 'JSESSIONID='+req.cookies.jssonId,  'Accept-Encoding': 'gzip, deflate',
          Host: 'greatminds.mpstechnologies.com',
          'Postman-Token': '253922e1-1531-47b2-b9d7-5ec943db1a91,24e7633e-1344-4d5d-a7d2-1a73fd497799',
          'Cache-Control': 'no-cache', Accept: '*/*', 'User-Agent': 'PostmanRuntime/7.17.1' } 
      };
      res.clearCookie("jssonId");
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if(body!=""){
          let d=JSON.parse(body);
          let data= {email: d.email, firstName: d.firstName,lastName:d.lastName, roleName:d.roleName, userId: d.userId };
          var User = mongoose.model('User');
          let query={ email: d.email, roleName: d.roleName };
          console.log("finding ", JSON.stringify(query));
          User.findOne(query, function (err, user) {
          if(!!user ){
              let token = user.generateJwt();
                res.status(200);
                res.json({
                  "token" : token,
                  "Status" : "OK",
                  "id" : user._id,
                  "name" : user.name,
                  "roleName": user.roleName,
                });
            }else{
              //https://gmartlogautomation.mpstechnologies.com?jssonId=804FB9E240D5EF825B8E1EA7F8D9817A"
              var users = new User();
              users.name = d.firstName +' '+ d.lastName;
              users.roleName= d.roleName;
              users.email = d.email;
              users.setPassword('gm@remote');
              users.save(function(err, rest) {
                console.log("data=>", err, rest);
                var token;
                token = rest.generateJwt();
                res.status(200);
                res.json({
                  "token" : token,
                  "Status": "OK",
                  "id":rest._id,
                  "name":rest.name,
                  "roleName": rest.roleName,
                });
              });
            }
          });
        }else{
          res.send({'msg':'NOTFOUND','para': options});
        }
        console.log(body);
      });
   }
});

postRoutes.route('/jobsMetadata').post(function (req, res) {  
  console.log("calling api jobsMetadata");
  res.send(WorkFlowJobsMetaData);
});
postRoutes.route('/updateartlog').post(function (req, res) {
  if(!!req.body.RowData){
      let set={ ID: MetaDatas[temp].ID };
      let where ={ ID: MetaDatas[temp].ID };
      res.send("Data Update Successfully");
  }
});
postRoutes.route('/updateBulkBatch').post(function (req, res) {
  console.log("ACTION : updateBulkBatch REQ==>",req.body);
  if(req.body.selectedids ){
    let ids = JSON.parse(req.body.selectedids);
    Mdb.bynder_jobs.find({ _id: { $in : ids}}).then(data=>{
      for(let dt in data){
        //data[dt].jobMetaproperties['662315fccf37435081da009bd3fbe49b']=req.body.batch;
        Mdb.bynder_jobs.updateOne({ _id : data[dt]._id},{
          $set : { 
            //jobMetaproperties: data[dt].jobMetaproperties
            batch : req.body.batch
           }
        }).then(dt=>{
          console.log("data Updated Successfully");
        }).catch(Err=>{
          console.log('Error In data');
        });
      }
      res.send(data.map(d=> ({_id: d._id, batch: req.body.batch})));
    }).catch(Err=>{
      console.log('finding Data have some error');
    });
  }
});
postRoutes.route('/reactiveJobs').post(function (req, res) {
  if(!!req.body.status &&  !!req.body.id){
    
  }
})
postRoutes.route('/updateBulkTags').post(function (req, res) {
  console.log("ACTION : updateBulkTags REQ==>",req.body);
  if(req.body.selectedids ){
    let ids = JSON.parse(req.body.selectedids);
    Mdb.bynder_jobs.find({ _id: { $in : ids}}).then(data=>{
      for(let dt in data){
        if(!!data[dt].jobMetaproperties['dde4714035904b0cb68888e0acf389b2']){
          data[dt].jobMetaproperties['dde4714035904b0cb68888e0acf389b2']=data[dt].jobMetaproperties['dde4714035904b0cb68888e0acf389b2']+','+req.body.tags;
        }else{
          data[dt].jobMetaproperties['dde4714035904b0cb68888e0acf389b2']=req.body.tags;
        }
        Mdb.bynder_jobs.updateOne({ _id : data[dt]._id},{
          $set : { jobMetaproperties: data[dt].jobMetaproperties }
        }).then(dt=>{
          console.log("data Updated Successfully");
        }).catch(Err=>{
          console.log('Error In data');
        });
      }
      res.send(data.map(d=> ({_id: d._id})));
    }).catch(Err=>{
      console.log('finding Data have some error');
    });
  }
});
postRoutes.route('/unflagedRows').post(function (req, res) {
  console.log("ACTION : unflagedRows REQ==>",req.body);
  if(req.body.UnflagedID ){ 
    Mdb.bynder_jobs.updateMany({ _id: req.body.UnflagedID},{
      $set: { flaged: false}
    }).then(dt=>{
      res.send({'msg':'Row Un-flaged successfully', code:2000});
    }).catch(Er=>{
      console.log("Error in flagging data : ", Er);
    });
  }else{
    res.send({'msg':'There have some Error to Unflaged record', code : 5000})
  }
})
postRoutes.route('/flagedRows').post(function (req, res) {
  console.log("ACTION : flagedRows REQ==>",req.body);
  if(req.body.flagedID ){ 
    let flagedID= JSON.parse(req.body.flagedID);
    Mdb.bynder_jobs.updateMany({ _id: { $in : flagedID}},{
      $set: { flaged: true}
    }).then(dt=>{
      res.send({'msg':'Selected rows has been flagged successfully', code:2000});
    }).catch(Er=>{
      console.log("Error in flagging data : ", Er);
    });
  }else{
    res.send({'msg':'Please select at least once row', code : 5000})
  }
})
postRoutes.route('/killedRows').post(function (req, res) {
  console.log("ACTION : killedRows REQ==>",req.body);
  if(req.body.killedID ){ 
    let killedID= JSON.parse(req.body.killedID);
    Mdb.bynder_jobs.updateMany({ _id: { $in : killedID}},{
      $set: { killed: true}
    }).then(dt=>{
      res.send({'msg':'Selected rows has been killed successfully', code:2000});
    }).catch(Er=>{
      console.log("Error in flagging data : ", Er);
    });
  }else{
    res.send({'msg':'Please Select at least once row', code : 5000})
  }
});
postRoutes.route('/unkilledRows').post(function (req, res) {
  console.log("ACTION : unkilledRows REQ==>",req.body);
  if(req.body.UnkilledID ){ 
    Mdb.bynder_jobs.updateOne({ _id: req.body.UnkilledID},{
      $set: { killed: false}
    }).then(dt=>{
      res.send({'msg':'Row has been re-activated successfully', code:2000});
    }).catch(Er=>{
      console.log("Error in flagging data : ", Er);
    });
  }else{
    res.send({'msg':'Please Select at least once row', code : 5000})
  }
})
postRoutes.route('/updateJob').post(function (req, res) {
  console.log("ACTION : updateJob  REQ==>",req.body);
  if(req.body.newData ){
    let newDt=JSON.parse(req.body.newData);
    // Lesson, components, tags, artComplex, artAssign, Risk, Impact, module, grade,
    let Mdt= new Metadt(newDt);
    Mdt.iniMeta(WorkFlowJobsMetaData);
   
    if(!!newDt.lesson){
      Mdt.setLesson(newDt.lesson);
    }if(!!newDt.lessonlet){
      Mdt.setLessonlet(newDt.lessonlet);
    }if(!!newDt.lessonlet){
      Mdt.setLessonlet(newDt.lessonlet);
    }if(!!newDt.component){
      Mdt.setComponent(newDt.component);
    }if(!!newDt.tags){
      Mdt.setTag(newDt.tags);
    }if(!!newDt.artcomplex){
      Mdt.setArtComplex( Mdt.referValueByKey(Mdt.artComplexkey , newDt.artcomplex));
    }if(!!newDt.artassion){
      Mdt.setArtAssion( Mdt.referValueByKey( Mdt.artAssionkey, newDt.artassion));
    }if(!!newDt.risk){
      Mdt.setRisk( Mdt.referValueByKey( Mdt.riskkey, newDt.risk));
    }if(!!newDt.impact){
      Mdt.setImpact( Mdt.referValueByKey( Mdt.impactkey, newDt.impact));
    }if(!!newDt.module){
      Mdt.setModule(Mdt.referValueByKey( Mdt.modulekey, newDt.module));
    }if(!!newDt.grade && newDt.grade!=""){
      Mdt.setGrade( Mdt.referValueByKey(Mdt.gradekey,newDt.grade));
    }if(!!newDt.topic && newDt.topic!=""){
      Mdt.setTopic( newDt.topic);
    }
    if(!!Mdt.getM()){
      let where ={ _id: newDt._id};
      //let set={ jobMetaproperties: Mdt.getM() };
      try{
        Mdb.bynder_jobs.updateOne({ _id : newDt._id },{
          $set:{
            jobMetaproperties: Mdt.getM(),
            description: newDt.description,
            comment  : newDt.comment,
            isPaging : newDt.isPaging,
            batch    : newDt.batch,
            mverification : newDt.mverification
          }
        }).then((rs)=>{
           console.log("data updated",rs, newDt._id);
           let ress=[{'msg':"SUCCESS"}];
           res.send(ress);
        }).catch((Err)=>{
           console.log("Error in updating data", Err, newDt._id);
           let ress=[{'msg':"FAILED"}];
           res.send(ress);
        });
        
    }catch(Err){
      console.log("Error In update", Err);
    } 
    }
  }
  //res.send(req.body);
}); 
postRoutes.route('/addnewjobs').post(function (req, res) {
    console.log("ACTION : addnewjobs REQ==>",req.body);
    //res.send(req.body);
    if(req.body.jobAdd){
      let rqdata = JSON.parse(req.body.jobAdd);
      let BynderSaved= Array();
      if(rqdata.length > 0){
        let allJobs=rqdata.map(d => d.jobkey.trim());
        let QueryForC={job_key : {$in : allJobs },  duplicate : {$exists: false } };
        console.log("adding Query:", JSON.stringify(QueryForC));
        Mdb.bynder_jobs.find(QueryForC ).then((data)=>{
          if(data.length > 0){
            
           var InsData= data.map(d=> ({id:d.id, name: d.name, Preset_Stages : d.Preset_Stages, campaignID: d.campaignID, dateCreated:d.dateCreated, dateModified:d.dateModified, description:d.description, id: d.id, jobID: d.jobID, autoStage: d.autoStage,  jobMetaproperties: d.jobMetaproperties, job_active_stage:d.job_active_stage, job_date_finished: d.job_date_finished , job_key: d.job_key, presetName:d.presetName 
              , duplicate: true, thumb: d.thumb
            }));
            for(let i in  InsData ){
             let changes= rqdata.filter(d=> d.jobkey== InsData[i].job_key);
              for( let ch of changes){
                  if(!!ch.grade && ch.grade.value)
                  InsData[i].jobMetaproperties['c0ac0a86e65f4f7ebd88dbd7e77965ef']=ch.grade.id;
                  if(!!ch.module && ch.module)
                  InsData[i].jobMetaproperties['7388493928bc4a9aa57ca65306ed1579']=ch.module.id;
                  if(!!ch.component && ch.component)
                  InsData[i].jobMetaproperties['87d538e6d3a442468b20426285aef253']=ch.component;
                  if(!!ch.lesson && ch.lesson)
                  InsData[i].jobMetaproperties['b447dc7d70b0420a8ac9ec9aeff78296']=ch.lesson;
                  let saveBynderJobs= new Mdb.bynder_jobs(InsData[i]);
                  BynderSaved.push(saveBynderJobs)
                  /*
                  let Meta= new Metadt(InsData[i]);
                  Meta.iniMeta(WorkFlowJobsMetaData);
                  Meta.initAssetMeta(GCurriculaWIP);
                  let Mdt= Meta.getMeta();
                  InsData[i].lesson=Mdt.lesson;
                  // workflow / age
                  if(InsData[i].Preset_Stages.length > 0 ){
                    let lastChangeCreated= InsData[i].Preset_Stages[InsData[i].Preset_Stages.length -1].start_date;
                    let lastChangeComplated=(!!InsData[i].Preset_Stages[InsData[i].Preset_Stages.length -1].job_date_finished)?
                    InsData[i].Preset_Stages[InsData[i].Preset_Stages.length -1].job_date_finished: new Date();
                    InsData[i].lastage=dateDiff(lastChangeCreated, lastChangeComplated);
                   }
                   var dateCreatedJob = Mdt.dateCreatedM;
                   if(InsData[i].job_date_finished===null && InsData[i].job_active_stage.status!="Approved"){
                    InsData[i].job_date_finished=new Date().toISOString();
                   }
                   InsData[i].cstage=""; 
                   
                   if(InsData[i].Preset_Stages.length > 0){
                     // IT Should be another that we can not captuchred 
                     let ob=InsData[i].Preset_Stages[ InsData[i].Preset_Stages.length-1 ];
                     if(ob.hasOwnProperty('name')){
                      InsData[i].cstage=ob.name;
                     }else if(ob.hasOwnProperty('StageNames')){
                      InsData[i].cstage=ob.StageNames;
                     }
                   }
                  InsData[i].totalage=dateDiff(dateCreatedJob, InsData[i].job_date_finished);
                  InsData[i].workflow=Meta.getWorkflow();
                  InsData[i].component=Mdt.component; 
                  InsData[i].tags=Mdt.tag; 
                  InsData[i].gradeID=Mdt.grade;
                  InsData[i].grade=Mdt.gradeVal;
                  InsData[i].moduleID=Mdt.module;
                  InsData[i].module=Mdt.moduleVal;
                  InsData[i].artcomplexId=Mdb.artcomplex;
                  InsData[i].artcomplex=Mdb.artcomplexVal;
                  InsData[i].artassionID=Mdb.artassion;
                  InsData[i].artassion=Mdb.artassionVal;
                  InsData[i].riskID=Mdb.risk;
                  InsData[i].risk=Mdb.riskVal;
                  InsData[i].impactID=Mdb.impact;
                  InsData[i].impact=Mdb.impactVal;
                  resultedDt.push(InsData[i]);
                  */
                  // saveBynderJobs.save().then((rs)=>{
                  // console.log("value saved sucessfully ", rs); 
                  // }).catch(Err=>{
                  //   console.log("ERROR in SAVED: ERR:", Err);
                  // })
              }
              
            }
            let jobsInfo=Array();
            for(let d in rqdata){
              if(BynderSaved.filter(o=>o.job_key == rqdata[d].jobkey).length > 0){
                jobsInfo.push({'jobkey': rqdata[d].jobkey,'exist':true});
              }else{
                jobsInfo.push({'jobkey': rqdata[d].jobkey,'exist':false});
              }
            }
            let requests = BynderSaved.map(d=> d.save());

            // Promise.all waits until all jobs are resolved
            Promise.all(requests).then(responses => {
              let dtt = responses.map(d=> ({ _id: d._id, id: d.id, job_key:d.job_key, jobID:d.jobID, jobMetaproperties:d.jobMetaproperties ,
                name: d.name, Preset_Stages : d.Preset_Stages, campaignID: d.campaignID, dateCreated:d.dateCreated, dateModified:d.dateModified, description:d.description, id: d.id, jobID: d.jobID, autoStage: d.autoStage,  jobMetaproperties: d.jobMetaproperties, job_active_stage:d.job_active_stage, job_date_finished: d.job_date_finished , job_key: d.job_key, presetName:d.presetName
                , duplicate: true, isAssetBank : true
              }))
              let resDt= Array();
              dtt.forEach(response => {
                  let Meta= new Metadt(response);
                  Meta.iniMeta(WorkFlowJobsMetaData);
                  Meta.initAssetMeta(GCurriculaWIP);
                  let Mdt= Meta.getMeta();
                  response.lesson=Mdt.lesson;
                  if(response.Preset_Stages.length > 0 ){
                    let lastChangeCreated= response.Preset_Stages[response.Preset_Stages.length -1].start_date;
                    let lastChangeComplated=(!!response.Preset_Stages[response.Preset_Stages.length -1].job_date_finished)?
                    response.Preset_Stages[response.Preset_Stages.length -1].job_date_finished: new Date();
                    response.lastage=dateDiff(lastChangeCreated, lastChangeComplated);
                   }
                   var dateCreatedJob = Mdt.dateCreatedM;
                   if(response.job_date_finished===null && response.job_active_stage.status!="Approved"){
                    response.job_date_finished=new Date().toISOString();
                   }
                   response.cstage=""; 
                   
                   if(response.Preset_Stages.length > 0){
                     // IT Should be another that we can not captuchred 
                     let ob=response.Preset_Stages[ response.Preset_Stages.length-1 ];
                     if(ob.hasOwnProperty('name')){
                      response.cstage=ob.name;
                     }else if(ob.hasOwnProperty('StageNames')){
                      response.cstage=ob.StageNames;
                     }
                   }
                  response.totalage=dateDiff(dateCreatedJob, response.job_date_finished);
                  response.workflow=Meta.getWorkflow();
                  response.component=Mdt.component; 
                  response.tags=Mdt.tag; 
                  response.gradeID=Mdt.grade;
                  response.grade=Mdt.gradeVal;
                  response.moduleID=Mdt.module;
                  response.module=Mdt.moduleVal;
                  response.artcomplexId=Mdb.artcomplex;
                  response.artcomplex=Mdb.artcomplexVal;
                  response.artassionID=Mdb.artassion;
                  response.artassion=Mdb.artassionVal;
                  response.riskID=Mdb.risk;
                  response.risk=Mdb.riskVal;
                  response.impactID=Mdb.impact;
                  response.impact=Mdb.impactVal;
                  
                  resDt.push(response);
                //console.log((responses))
              });
              
              res.send({jobsInfo:jobsInfo, resDt: resDt});
            });
            //res.send( resultedDt );
          }else{
            //res.send({'msg':'Invalid Job Key'});
            let resDt= Array();
            let jobsInfo=rqdata.map(d=>({jobkey:d.jobkey, exist:false}));
            res.send({jobsInfo:jobsInfo, resDt: resDt});
          }
        }).catch((Err)=>{
          console.log("Finding ERROR:", Err);
        })
      }
    }else{
      res.send("Not Saved Msg");
    }
});
postRoutes.route('/updateAsset', checkToken.checkToken).post(function (req, res) {
  console.log("req parameters :" , req.body);
  let data=JSON.parse(req.body.data)
  for(let d of data){
    console.log("data processing =>", JSON.stringify(d));
  Mdb.bynder_jobs.updateOne({_id: d._id},{
    $set:{ isMailed: false, updateTag:'Processing', duplicate: false, generatedTags:  d.generatedTags } 
  }).then((rs)=>{
    console.log("successfully updated:", rs);
  }).catch(Err=>{
    console.log("ERRor:", Err)
  });
}
res.send({'msg': 'processing'});
});
postRoutes.route('/artloginit', checkToken.checkToken).post(function (req, res) {
  Mdb.searchState.find({ uid: req.headers['authuser'] }).then((dt)=>{
    let resJSON={ inData:dt, grade: GGrades, module: GModules, artcomplex: GArtComplex, artAssign: GArtAssign, risk: GRisk, impact: GImpact, wip: GCurriculaWIP
    }
    res.send(resJSON);
  }).catch((Err)=>{
    console.log("Finding error from searchState: ", Err);
  });
})
postRoutes.route('/artlogdata', checkToken.checkToken).post(function (req, res) {
    console.log("req parameters :" , req.body);
    let $and = [ ];
    if(!!req.body.grade && req.body.grade!=""){
      let g=req.body.grade.split(",");
      //console.log("\n\n Finding data as =>", JSON.stringify(req.body.grade),"\n\n");
      if(g.length ==1){
        $and.push( { "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef" : g[0] } )
      }else{
        $and.push( { "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef" :{ $in: g }} )
      }
    }
    if(!!req.body.module && req.body.module!=""){
      let m=req.body.module.split(",");
      let $or=[];
      if(m.length ==1){
        $or.push( { "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579" : m[0] } ) 
      }else{
        $or.push( { "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579" :{$in:  m  }  }) 
      }
      $and.push({$or:$or})
    }
    if(!!req.body.topic && req.body.topic!=""){
      //"jobMetaproperties.662315fccf37435081da009bd3fbe49b"
      $and.push(
        { "batch" : req.body.topic }
      ); 
    }
    //662315fccf37435081da009bd3fbe49b
    if(!!req.body.curricula && req.body.curricula!=""){
      $and.push(
        { "jobMetaproperties.0790cd4f2aed4ce0a315ff8034a43994" : req.body.curricula }
      ); 
    }
    if(!!req.body.added && req.body.added!= ""){
      if(req.body.added==1){
        $and.push(
          { "duplicate" : {$exists: false} }
        );
      }else if(req.body.added==2){
        $and.push(
          { "duplicate" : true }
        );
      }else if(req.body.added==3){
        $and.push(
          { "duplicate" : false }
        );
      }
       
    }
    if(!!req.body.workflow && req.body.workflow!=""){
      $and.push(
        //{"presetName": /.*Created Image*./}
        {'presetName':{ $regex:  new RegExp(".*"+req.body.workflow+".*") }}
      ) 
    }
    if(req.body.status && req.body.status!=""){
      let st=req.body.status.split(",");
      if(st.indexOf('Active') > -1){
        st.push('NeedsChanges')
      }
      if(st.length ==0){
        $and.push( {"job_active_stage.status":{"$in": st[0] } });
      }else{
        $and.push( {"job_active_stage.status":{"$in": st } });
      }
    }else if($and.length >0){
      $and.push(
        {"job_active_stage.status":{"$ne":"Cancelled"}}
      ) 
    }
    let q={"job_active_stage.status": { $in: [ 'Active', 'NeedsChanges']} ,"campaignID":{"$in": ['4924dc05-03c5-4086-90ce-41d8bf501684','9618db88-fc78-47a5-9916-e864e696ae11'] } };
      
    if(!!req.body.jobkey && req.body.jobkey!=""){
      q={"job_key": req.body.jobkey }
    }else if($and.length >0){
      // condition for ignore other Jobs 
      $and.push( {"campaignID":{"$in": ['4924dc05-03c5-4086-90ce-41d8bf501684','9618db88-fc78-47a5-9916-e864e696ae11'] } });
       q= { $and};
    } 
    let fields={killed:1,flaged:1,batch:1,presetstages:1,isPaging:1, comment:1, mverification:1, duplicate:1, presetName:1, Preset_Stages:1, id:1, name:1, description:1, job_active_stage:1, jobMetaproperties:1, jobID:1, job_key:1, dateCreated:1, job_date_finished:1, thumb:1, generatedTags:1};
    console.log("Calling artlogdata Data " , JSON.stringify(q), JSON.stringify(fields));
    //.limit(50) testing in Live Build with Pradeep Sir
    Mdb.bynder_jobs.find(q, fields ).sort({job_key:-1}).limit(50).then((data)=>{
    let dataResult=[];

    for(let  dtkey in data){
      var objData = data[dtkey].toObject();
      //console.log("Object VAlue:", objData);
      if(!!data[dtkey].jobMetaproperties){
        let Meta= new Metadt(data[dtkey])
        Meta.iniMeta(WorkFlowJobsMetaData);
        Meta.initAssetMeta(GCurriculaWIP);
        let Mdt= Meta.getMeta();
        //console.log("Metadata", data[dtkey].jobMetaproperties);
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
        if(data[dtkey].Preset_Stages.length > 0 ){
         let lastChangeCreated= data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].start_date;
         let lastChangeComplated=(!!data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished)?
          data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished: new Date();
          objData.lastage=dateDiff(lastChangeCreated, lastChangeComplated);
        }
        var dateCreatedJob = Mdt.dateCreatedM || data[dtkey].dateCreated;
        if(data[dtkey].job_date_finished===null && data[dtkey].job_active_stage.status!="Approved"){
          data[dtkey].job_date_finished=new Date().toISOString();
        }else if(data[dtkey].job_date_finished===null){
          data[dtkey].job_date_finished=new Date().toISOString();
        }
        objData.cstage=""; objData.workflow=Meta.getWorkflow();
       
        if(objData.Preset_Stages.length > 0){
          // IT Should be another that we can not captuchred 
          let ob=objData.Preset_Stages[ objData.Preset_Stages.length-1 ];
          if(ob.hasOwnProperty('name')){
            objData.cstage=ob.name;
          }else if(ob.hasOwnProperty('StageNames')){
            objData.cstage=ob.StageNames;
          }
          if(objData.cstage=="" && !!ob.position && objData.presetstages.length > 0){
            let objdt=objData.presetstages.filter(d=> d.position == ob.position);
            if(objdt.length > 0)
            objData.cstage = objdt[0].name;
          }
        }
         objData.currentRTeam =   Meta.getStageRTeam(objData.cstage);
         objData.totalage     =   dateDiff(dateCreatedJob, data[dtkey].job_date_finished);
         objData.lesson       =   Mdt.lesson;
         objData.lessonlet    =   Mdt.lessonlet;
         objData.component    =   Mdt.component; 
         objData.tags         =   Mdt.tag; 
         objData.gradeID      =   Mdt.grade;
         objData.grade        =   Mdt.gradeVal;
         objData.moduleID     =   Mdt.module;
         objData.module       =   Mdt.moduleVal;
         objData.topic        =   Mdt.topic;
         objData.facing       =   Mdt.facingVal;
         objData.facingID     =   Mdt.facing;
         objData.series       =   Mdt.series;
         //test
         objData.revisionID   =   Mdt.revision;
         objData.revisionC     =  Mdt.revisionVal;
         objData.artcomplexID =   Mdt.artComplex;
         objData.artcomplex   =   Mdt.artComplexVal;
         objData.artassionID  =   Mdt.artAssion;
         objData.artassion    =   Mdt.artAssionVal;
         objData.riskID       =   Mdt.risk;
         objData.risk         =   Mdt.riskVal;
         objData.impactId     =   Mdt.impact;
         objData.impact       =   Mdt.impactVal;
         objData.curriculum   =   Mdt.wip;
         objData.creditLine   =   Mdt.creditLine;

        
      }
      //console.log("Object Final VAlues: ==>", objData);
      dataResult.push(objData);
    }
     job_keys=dataResult.filter( (d)=> d.job_key!="" ).map(d=>d.job_key);
     GridFilters={
       curriculum     :   [...new Set(dataResult.filter( (v, i)=> !!v.curriculum ).map(d=>d.curriculum))],
       workflow       :   [...new Set(dataResult.filter( (v, i)=> !!v.workflow ).map(d=>d.workflow))],
       currentRTeam   :   [...new Set(dataResult.filter( (v, i)=> !!v.currentRTeam ).map(d=>d.currentRTeam))],
       lesson         :   [...new Set(dataResult.filter( (v, i)=> !!v.lesson ).map(d=>d.lesson))],  //.filter((v,i) => grades.indexOf(v) === i),
       lessonlet      :   [...new Set(dataResult.filter( (v, i)=> !!v.lessonlet ).map(d=> d.lessonlet))],
       component      :   [...new Set(dataResult.filter( (d)=> !!d.component ).map(d=>d.component))],
       grade          :   [...new Set(dataResult.filter( (d)=> !!d.grade ).map(d=>d.grade))],
       module         :   [...new Set(dataResult.filter( (d)=> !!d.module ).map(d=>d.module))],
       artcomplex     :   [...new Set(dataResult.filter( (d)=> !!d.artcomplex ).map(d=>d.artcomplex))],
       artassion      :   [...new Set( dataResult.filter( (d)=> !!d.artassion ).map(d=>d.artassion))],
       risk           :   [...new Set(dataResult.filter( (d)=> !!d.risk ).map(d=>d.risk))],
       impact         :   [...new Set(dataResult.filter( (d)=> !!d.impact ).map(d=>d.impact))],
       facing         :   [...new Set(dataResult.filter( (d)=> !!d.facing ).map(d=>d.facing))],
       series         :   [...new Set(dataResult.filter( (d)=> !!d.series ).map(d=>d.series))],
       topic          :   [...new Set(dataResult.filter( (d)=> !!d.topic ).map(d=>d.topic))],
       batch          :   [...new Set(dataResult.filter( (d)=> !!d.batch ).map(d=>d.batch))],
       revision       :   [...new Set(dataResult.filter( (d)=> !!d.revisionC ).map(d=>d.revisionC))],
       cstages        :   [...new Set(dataResult.filter( (d)=> !!d.cstage ).map(d=>d.cstage))],
       cstatus        :   [...new Set(dataResult.filter( (d)=> !!d.job_active_stage.status ).map(d=>d.job_active_stage.status))],
     };
     
    //  let assetQ={property_workflowjobkey: {
    //   $in:  job_keys 
    //   }};
     // console.log("Query of Assets: ", JSON.stringify(assetQ));
     //Mdb.asset.find({ assetQ }).then((data)=>{
      // console.log("total data is :", data.length);
      // console.log(data);
      // for(let atdt of dataResult){
      //   if(atdt.hasOwnProperty("job_key")){
      //     data.filter(df=> dt.)
      //   }
      // }  Jot51339
      let result={ artLogData : dataResult, GridFilters : GridFilters};
      res.send( result );
     //}).catch((Err)=> { console.log("Error in Finding asset:", Err)})
     
    }).catch((Err)=>console.log("Error in finder ERROR:", Err));
});

function dateDiff( string1, string2){
  try{
    if(typeof string1 =="object"){
      string1= string1.toISOString();
    }if(typeof string2 =="object"){
      string2= string2.toISOString();
    }
    var date1 = new Date(string1);
    var date2 = new Date(string2);
    var diffTime = Math.abs(date2.getTime() - date1.getTime());
    var diffForH = diffTime % (1000 * 60 * 60 * 24);
    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return Math.floor(diffDays+'.'+ Math.ceil(diffForH));
  }catch(E){ console.log("Error:",E)}
}
module.exports = postRoutes;

//[export]="false"