const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const await = require("await");
const async = require("async");
const  Metadt  =require("../models/Metadt");
const Mdb  = require('../models/post.model');
const checkToken = require('../models/middleware');
const mongoose = require( 'mongoose' );
const jwt = require('jsonwebtoken');
let moment = require('moment'); //Test By Pradeep sir

//let appConfig=require('./config');
// Metadt= new Metadt('dddd');
// Metadt.print("hello this is metdt class");
//var memcached = new Memcached();
/* code to connect with your memecahced server */
/*
memcached.connect( 'localhost:11211', function( err, conn ){
  if( err ) {
  console.log( conn.server,'error while memcached connection!!');
  }else {
    console.log("mamcached connected sucessfully ");
  }
});
/*
Mdb.bynder_jobs.find({ }).then((data)=>{
   console.log("data", data.length);
}).catch(Err=>{ 
  console.log("Error In Data: ", Err);
});
*/

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
GRisk=[],GImpact=[], GPrintReady = [];
let GMeta=new Metadt(d);

Mdb.metaproperties.find().then((metaData)=>{
  WorkFlowJobsMetaData = metaData;
  GMeta.iniMeta(metaData);
  GMeta.initAssetMeta(GCurriculaWIP);
  GMeta.PrintAssetMeta(GPrintReady);
  GGrades=GMeta.getAMetaOptionsBykey(GMeta.gradekey);
  GModules=GMeta.getAMetaOptionsBykey(GMeta.modulekey);
  GArtComplex=GMeta.getAMetaOptionsBykey(GMeta.artComplexkey);
  GArtAssign=GMeta.getAMetaOptionsBykey(GMeta.artAssionkey);
  GRisk=GMeta.getAMetaOptionsBykey(GMeta.riskkey);
  GImpact=GMeta.getAMetaOptionsBykey(GMeta.impactkey);
}).catch((Err)=>{
  console.log("Finding Metadata ERROR:", Err);
});
Mdb.assetMeta.find({},{"curricula_wip.options":1, "print_ready.options":1}).then((dt)=>{
  if(dt.length > 0){
    GCurriculaWIP = dt[0].curricula_wip.options.map(d=>({value:d.id, label: d.label , name: d.name}));
    GPrintReady   = dt[0].print_ready.options.map(d=>({value:d.id, label: d.label , name: d.name}));
    GMeta.PrintAssetMeta(GPrintReady);
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
  let frm = JSON.parse(req.body.frmdt);
  let searchState= new Mdb.searchState(
    {uid: req.headers['authuser']  , 
    tab: frm.tabData,
    searchTitle : req.body.searchText, 
    fields: req.body.frmdt, 
    state:'SearchStage' 
  });
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
          let data= { userGroupName: d.userGroupName, email: d.email, firstName: d.firstName,lastName:d.lastName, roleName:d.roleName, userId: d.userId };
          var User = mongoose.model('User');
          let query={ email: d.email, roleName: d.roleName, userGroupName: d.userGroupName };
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
                  "userGroupName":user.userGroupName,
                  "roleName": user.roleName,
                });
            }else{
              //https://gmartlogautomation.mpstechnologies.com?jssonId=804FB9E240D5EF825B8E1EA7F8D9817A"
              var users = new User();
              users.name = d.firstName +' '+ d.lastName;
              users.roleName= d.roleName;
              users.email = d.email;
              users.userGroupName= d.userGroupName;
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
                  "userGroupName":rest.userGroupName
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

postRoutes.route('/updateBulkBatchCDate').post(function (req, res) {
  console.log("ACTION : updateBulkBatchCDate REQ==>",req.body);
  if(req.body.selectedids ){
    let ids = JSON.parse(req.body.selectedids);
    Mdb.bynder_jobs.find({ _id: { $in : ids}}).then(data=>{
      for(let dt in data){
        //data[dt].jobMetaproperties['662315fccf37435081da009bd3fbe49b']=req.body.batch;
        Mdb.bynder_jobs.updateOne({ _id : data[dt]._id},{
          $set : { 
            //jobMetaproperties: data[dt].jobMetaproperties
            batchCDate : new Date(req.body.batchCDate)
           }
        }).then(dt=>{
          console.log("data Updated Successfully");
        }).catch(Err=>{
          console.log('Error In data');
        });
      }
      res.send(data.map(d=> ({_id: d._id, batchCDate: new Date(req.body.batchCDate).toISOString()})));
    }).catch(Err=>{
      console.log('finding Data have some error');
    });
  }
});

postRoutes.route('/updateBulkExceptionCat').post(function (req, res) {
  console.log("ACTION : updateBulkExceptionCat REQ==>",req.body);
  if(req.body.selectedids ){
    let ids = JSON.parse(req.body.selectedids);
    Mdb.bynder_jobs.find({ _id: { $in : ids}}).then(data=>{
      for(let dt in data){
        //data[dt].jobMetaproperties['662315fccf37435081da009bd3fbe49b']=req.body.batch;
        Mdb.bynder_jobs.updateOne({ _id : data[dt]._id},{
          $set : { 
            //jobMetaproperties: data[dt].jobMetaproperties
            exceptionCategory : req.body.exceptionCategory
           }
        }).then(dt=>{
          console.log("data Updated Successfully");
        }).catch(Err=>{
          console.log('Error In data');
        });
      }
      res.send(data.map(d=> ({_id: d._id, exceptionCategory: req.body.exceptionCategory})));
    }).catch(Err=>{
      console.log('finding Data have some error');
    });
  }
});
postRoutes.route('/updateBulkException').post(function (req, res) {
  console.log("ACTION : updateBulkException REQ==>",req.body);
  if(req.body.selectedids ){
    let ids = JSON.parse(req.body.selectedids);
    Mdb.bynder_jobs.find({ _id: { $in : ids}}).then(data=>{
      for(let dt in data){
        //data[dt].jobMetaproperties['662315fccf37435081da009bd3fbe49b']=req.body.batch;
        Mdb.bynder_jobs.updateOne({ _id : data[dt]._id},{
          $set : { 
            //jobMetaproperties: data[dt].jobMetaproperties exception
            exception : req.body.exception
           }
        }).then(dt=>{
          console.log("data Updated Successfully");
        }).catch(Err=>{
          console.log('Error In data');
        });
      }
      res.send(data.map(d=> ({_id: d._id, exception: req.body.exception})));
    }).catch(Err=>{
      console.log('finding Data have some error');
    });
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
     // $set: { flaged: false},
      $unset:{ flaged:1, flagedTeam:1}
    }).then(dt=>{
      res.send({'msg':'Row Un-flagged successfully', code:2000});
    }).catch(Er=>{
      console.log("Error in flagging data : ", Er);
    });
  }else{
    res.send({'msg':'There have some Error to Unflaged record', code : 5000})
  }
})
postRoutes.route('/assignAuditors').post(function (req, res) {
  console.log("ACTION : assignAuditors REQ==>",req.body);
  if(req.body.mathAuditor ){
    let mathAuditor = JSON.parse(req.body.mathAuditor);
    let selectedData = JSON.parse(req.body.selectedData);
    Mdb.bynder_jobs.updateMany({ _id: { $in : selectedData}},{
      $set: { mathAuditor:  mathAuditor.name }
    }).then(dt=>{
      res.send({'status':'SUCCESS','msg':'Selected rows auditor assign successfully', code:2000});
    }).catch(Er=>{
      console.log("Error in flagging data : ", Er);
      res.send({'status':'ERROR','msg':'somthing wrong', desc: Er});
    });

  }
});

postRoutes.route('/flagedRows').post(function (req, res) {
  console.log("ACTION : flagedRows REQ==>",req.body);
  if(req.body.flagedID ){ 
    let auth = JSON.parse(req.body.auth);
    let flagedID= JSON.parse(req.body.flagedID);
    Mdb.bynder_jobs.updateMany({ _id: { $in : flagedID}},{
      $set: { 
        flaged: true, 
        flagedTeam: req.body.flagedTeam ,
        flaggedComment : req.body.flaggedComment,
        flaggedUser : auth.name,
        flaggedDate : new Date()
      }
    }).then(dt=>{
      let resdt= { _id: flagedID, flaged: true, 
      flagedTeam: req.body.flagedTeam ,
      flaggedComment : req.body.flaggedComment,
      flaggedUser : auth.name,
      flaggedDate : moment().format('MM-DD-YYYY') };
      res.send({'msg':'Selected rows has been flagged successfully',dt:resdt, code:2000});
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
postRoutes.route('/updateJobVerified').post(function (req, res) {
  console.log("ACTION : updateJobVerified  REQ==>",req.body);
  if(req.body.newData ){
    let newDt=JSON.parse(req.body.newData);
    for(let t =0; t< newDt.length; t++){
      let Mdt= new Metadt(newDt[t]);
      let set={};
      Mdt.iniMeta(WorkFlowJobsMetaData);
      if(!!newDt[t].mverification){
        set.mverification= newDt[t].mverification;
      }if(!!newDt[t].isPaging){
        set.isPaging= newDt[t].isPaging;
      }
      if(!!newDt[t].pageNo){
        set.pageNo= newDt[t].pageNo;
      }
      Mdb.bynder_jobs.updateOne({ _id: newDt[t]._id},{
        $set: set
      }).then((d)=>{
        console.log("updated", d)
      }).catch((err)=>{
        console.log("ERROR:", err)
      })
      console.log(" records:", newDt[t]);
    }
    let ress=[{'msg':"SUCCESS"}];
    res.send(ress);
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
            mverification : newDt.mverification,
            pageNo : newDt.pageNo
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
            data.forEach(function(x){ delete x._id });
            var InsData= data.map(d=> ({
              id        	  : d.id, 
              presetID      : d.presetID,
              name      	  : d.name, 
              Preset_Stages : d.Preset_Stages, 
              campaignID	  : d.campaignID, 
              dateCreated	  : d.dateCreated, 
              dateModified	: d.dateModified, 
              description	  : d.description, 
              id			      : d.id, 
              jobID			    : d.jobID, 
              autoStage		  : d.autoStage,  
              jobMetaproperties	: d.jobMetaproperties, 
              job_active_stage	: d.job_active_stage, 
              job_date_finished	: d.job_date_finished , 
              job_key			      : d.job_key,
              presetName		: d.presetName, 
              duplicate			: true, 
              thumb				  : d.thumb,  
              assetID			  : d.assetID,
              flagedTeam	  : d.flagedTeam,
              pageNo 			  : d.pageNo,
              killed			  : d.killed,
              flaged			  : d.flaged,
              batch				  : d.batch,		
              presetstages	: d.presetstages,
              isPaging			: d.isPaging,
              comment			  : d.comment,
              mverification		: d.mverification,
              generatedTags		: d.generatedTags,
              jobMetaproperties: d.jobMetaproperties
            }));

            let k=0;
            for(let i in  InsData ){
              //delete InsData[i]._id;
              let Meta= new Metadt(InsData[i])
              Meta.iniMeta(WorkFlowJobsMetaData);
              let changes= rqdata.filter(d=> d.jobkey== InsData[i].job_key);
              for( let ch of changes){
                  if(!!ch.grade && ch.grade)
                  InsData[i].jobMetaproperties['c0ac0a86e65f4f7ebd88dbd7e77965ef']= Meta.referValueByKey(Meta.gradekey,ch.grade);
                  if(!!ch.module && ch.module)
                  InsData[i].jobMetaproperties['7388493928bc4a9aa57ca65306ed1579']= Meta.referValueByKey(Meta.modulekey, ch.module);
                  if(!!ch.component && ch.component)
                  InsData[i].jobMetaproperties['87d538e6d3a442468b20426285aef253']=ch.component;
                  if(!!ch.lesson && ch.lesson)
                  InsData[i].jobMetaproperties['b447dc7d70b0420a8ac9ec9aeff78296']=ch.lesson;
                  if(!!ch.topic && ch.topic)
                    InsData[i].topic=ch.topic;
                  if(!!ch.facing && ch.facing.length > 0){
                    if( ch.facing.length > 1){
                      let facingVal=new Array();
                      for( let t=0; t < ch.facing.length; t++){
                        facingVal.push( Meta.referValueByKey( Meta.facingkey, ch.facing[t] ));
                      }
                      InsData[i].jobMetaproperties[Meta.facingkey]=facingVal.join();
                    }else{
                      InsData[i].jobMetaproperties[Meta.facingkey] =  Meta.referValueByKey( Meta.facingkey, ch.facing[0] );
                    }
                  }
                  let saveBynderJobs= new Mdb.bynder_jobs( JSON.parse(JSON.stringify(InsData[i])));
                  BynderSaved.push(saveBynderJobs)
                  k++;
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
              /*let dtt = responses.map(d=> ({ _id: d._id, id: d.id, job_key:d.job_key, jobID:d.jobID, jobMetaproperties:d.jobMetaproperties ,
                name: d.name, Preset_Stages : d.Preset_Stages, campaignID: d.campaignID, dateCreated:d.dateCreated, dateModified:d.dateModified, description:d.description, id: d.id, jobID: d.jobID, autoStage: d.autoStage,  jobMetaproperties: d.jobMetaproperties, job_active_stage:d.job_active_stage, job_date_finished: d.job_date_finished , job_key: d.job_key, presetName:d.presetName
                , duplicate: true, isAssetBank : true
              }))
              */
              let dtt= responses;
              let resDt= Array();
              dtt.forEach(response => {
                var objData = response.toObject();
                if(!!response.jobMetaproperties){
                  let Meta= new Metadt(response);
                  Meta.getInitDataSet(objData);
                  Meta.iniMeta(WorkFlowJobsMetaData);
                  Meta.initAssetMeta(GCurriculaWIP);
                  Meta.PrintAssetMeta(GPrintReady)
                  let Mdt= Meta.getMeta();
                  //console.log("Metadata", response.jobMetaproperties);
                  let metaObj=Object.entries(response.jobMetaproperties);
                  if(response.Preset_Stages.length > 0 ){
                   let lastChangeCreated= response.Preset_Stages[response.Preset_Stages.length -1].start_date;
                   let lastChangeComplated=(!!response.Preset_Stages[response.Preset_Stages.length -1].job_date_finished)?
                    response.Preset_Stages[response.Preset_Stages.length -1].job_date_finished: new Date();
                    objData.lastage=dateDiffinDurationStage( lastChangeComplated , lastChangeCreated,);
                  }
                  var dateCreatedJob = Mdt.dateCreatedM || response.dateCreated;
                  if(response.job_date_finished===null && response.job_active_stage.status!="Approved"){
                    response.job_date_finished=new Date().toISOString();
                  }else if(response.job_date_finished===null){
                    response.job_date_finished=new Date().toISOString();
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
                   objData.totalage     =   dateDiffinDurationStage( response.job_date_finished, dateCreatedJob);
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
                   objData.revisionC    =   Mdt.revisionVal;
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
                   objData.printAsset   =   Mdt.printAsset;
                   objData.printReady   =   Mdt.printReady;
                   objData.permissionType = Mdt.permissionType
                }
                resDt.push(objData);
              });
              
              res.send({jobsInfo:jobsInfo, resDt: resDt});
            });
          }else{
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
        $set:{ isMailed: false, updateTag:'Processing', generatedTags:  d.generatedTags , tagGenerationDt: new Date() } 
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
});

postRoutes.route('/updatelaststage').post(function (req, res) {
  console.log('Data testing.. in updatelaststage action');
  Mdb.bynder_jobs.find({
    job_key: {
        $in: [
          'SCI-2233','EM2-3673','EM2-3672','EM2-3671','EM2-3670','EM2-3669','EM2-3668','EM2-3667','EM2-3666','EM2-3665','EM2-3664','EM2-3662','EM2-3661','EM2-3660','EM2-3659','EM2-3658','EM2-3657','EM2-3656','EM2-3655','EM2-3654','EM2-3653','EM2-3652','EM2-3651','EM2-3650','EM2-3649','EM2-3648','EM2-3647','EM2-3646','EM2-3645','EM2-3644','EM2-3643','EM2-3642','EM2-3641','EM2-3640','EM2-3639','EM2-3638','EM2-3637','EM2-3636','EM2-3635','EM2-3634','EM2-3633','EM2-3632','EM2-3631','EM2-3630','EM2-3629','EM2-3628','EM2-3627','EM2-3626','EM2-3624','EM2-3623','EM2-3622','EM2-3621','EM2-3620','EM2-3619','EM2-3618','EM2-3617','EM2-3616','EM2-3615','EM2-3614','EM2-3613','EM2-3612','EM2-3611','EM2-3610','EM2-3609','EM2-3608','EM2-3607','EM2-3606','EM2-3605','EM2-3604','EM2-3603','EM2-3602','EM2-3601','EM2-3600','EM2-3599','EM2-3598','EM2-3597','EM2-3596','EM2-3595','EM2-3594','EM2-3593','EM2-3592','EM2-3591','EM2-3590','EM2-3589','EM2-3588','EM2-3587','EM2-3586','EM2-3585','EM2-3584','EM2-3583','EM2-3582','EM2-3581','EM2-3580','EM2-3579','EM2-3578','EM2-3577','EM2-3575','EM2-3574','EM2-3573','EM2-3572','EM2-3571','EM2-3570','EM2-3569','EM2-3568','EM2-3567','EM2-3566','EM2-3565','EM2-3564','EM2-3563','EM2-3562','EM2-3561','EM2-3560','EM2-3559','EM2-3558','EM2-3557','EM2-3556','EM2-3555','EM2-3554','EM2-3553','EM2-3552','EM2-3551','EM2-3550','EM2-3549','EM2-3548','EM2-3547','EM2-3546','EM2-3545','EM2-3544','EM2-3543','EM2-3542','EM2-3541','EM2-3540','EM2-3539','EM2-3538','EM2-3537','EM2-3536','EM2-3535','EM2-3534','EM2-3533','EM2-3532','EM2-3531','EM2-3530','EM2-3529','EM2-3528','EM2-3527','EM2-3526','EM2-3525','EM2-3524','EM2-3523','EM2-3522','EM2-3521','EM2-3520','EM2-3519','EM2-3518','EM2-3517','EM2-3516','EM2-3515','EM2-3514','EM2-3513','EM2-3512','EM2-3511','EM2-3510','EM2-3509','EM2-3508','EM2-3507','EM2-3506','EM2-3505','EM2-3504','EM2-3503','EM2-3502','EM2-3501','EM2-3500','EM2-3499','EM2-3498','EM2-3497','EM2-3496','EM2-3495','EM2-3494','EM2-3493','EM2-3492','EM2-3491','EM2-3490','EM2-3489','EM2-3488','EM2-3487','EM2-3486','EM2-3485','EM2-3484','EM2-3483','EM2-3482','EM2-3481','EM2-3480','EM2-3479','EM2-3478','EM2-3477','EM2-3476','EM2-3475','EM2-3474','EM2-3473','EM2-3472','EM2-3471','EM2-3470','EM2-3469','EM2-3468','EM2-3467','EM2-3466','EM2-3465','EM2-3464','EM2-3463','EM2-3462','EM2-3461','EM2-3460','EM2-3459','EM2-3457','EM2-3456','EM2-3455','EM2-3454','EM2-3453','EM2-3452','EM2-3451','EM2-3450','EM2-3449','EM2-3448','EM2-3447','EM2-3446','EM2-3445','EM2-3444','EM2-3443','EM2-3442','EM2-3441','EM2-3440','EM2-3439','EM2-3438','EM2-3437','EM2-3436','EM2-3435','EM2-3434','EM2-3433','EM2-3432','EM2-3431','EM2-3430','EM2-3429','EM2-3428','EM2-3427','EM2-3426','EM2-3425','EM2-3424','EM2-3423','EM2-3422','EM2-3421','EM2-3420','EM2-3418','EM2-3417','EM2-3416','EM2-3415','EM2-3414','EM2-3413','EM2-3412','EM2-3411','EM2-3410','EM2-3409','EM2-3408','EM2-3407','EM2-3406','EM2-3405','EM2-3404',' EM2-3625',' EM2-3576',' EM2-3458',' EM2-3419'
        ]
    }
   }).then((data) => {
     for(let dt of data){
       if(dt.Preset_Stages.length > 0 && dt.presetstages.length > 0 && dt.Preset_Stages[ dt.Preset_Stages.length -1 ].StageNames=="" ) {
        dt.presetstages[dt.presetstages.length-1] 
        dt.Preset_Stages[ dt.Preset_Stages.length -1 ].StageNames = 'Waiting Room Preflight';
        if(dt.presetstages[dt.presetstages.length-1].name != 'Waiting Room Preflight'){
          dt.presetstages.push(
            {
              "ID" : "523a1262-5bb9-45dc-ae85-f29882a0fde5",
              "name" : "Waiting Room Preflight",
              "position" : 8
            }
          );
        }
        console.log(dt);
        Mdb.bynder_jobs.updateOne({_id : dt._id.toString() },{
          $set:{
            presetstages: dt.presetstages,
            Preset_Stages : dt.Preset_Stages
          }
        }).then((dd)=> {
          console.log("data update successfully: ", dd);
        }).catch((Err) => {
          console.log("ERROR in Data: ", Err);
        });
       }
     }
   }).catch((Err) => {
    console.log( "Error in ", Err);
   });
});

postRoutes.route('/searchdtinit').post(async (req, res)=> {  
  //,'Approved','Cancelled'
  let dataResult =[]
  let NoSql = { 'job_active_stage.status' :{ $nin :['Active','NeedsChanges'] }};
  Mdb.bynder_jobs.find(NoSql).then((data)=>{
    let resData = [];
    for( let objData of data){ 
      let objData = data[dtkey].toObject();
      if(!!data[dtkey].jobMetaproperties){
        let Meta= new Metadt(data[dtkey])
        Meta.iniMeta(WorkFlowJobsMetaData);
        Meta.initAssetMeta(GCurriculaWIP);
        Meta.PrintAssetMeta(GPrintReady)
        let Mdt= Meta.getMeta();
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
        if(data[dtkey].Preset_Stages.length > 0 ){
         let lastChangeCreated= data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].start_date;
         let lastChangeComplated=(!!data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished)?
          data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished: new Date();
          objData.lastage=dateDiffinDurationStage(lastChangeComplated, lastChangeCreated);
        }
        var dateCreatedJob =  data[dtkey].dateCreated ||Mdt.dateCreatedM ;
        if(data[dtkey].job_date_finished===null && data[dtkey].job_active_stage.status!="Approved"){
          data[dtkey].job_date_finished=new Date().toISOString();
        }else if(data[dtkey].job_date_finished===null){
          data[dtkey].job_date_finished=new Date().toISOString();
        }
        objData.cstage=""; objData.workflow=Meta.getWorkflow();
        objData.mathAuditRC = 0;
        if(objData.Preset_Stages.length > 0){
          // IT Should be another that we can not captuchred 
          objData.mathAuditRC= objData.Preset_Stages.filter( d => d.StageNames =='Math Audit Review' ).length;
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
        // Art Team Columns // 
         objData.receiveddate      =   Meta.getMathAuditStartDt(objData);
         objData.mpsDueDate        =   Meta.getMpsDueDate(objData);
         objData.artTeamStatus     =   Meta.getTeamStatus(objData);
         objData.artTeamPriority   =   Meta.getTeamPriority(objData);
         objData.exceptionCategory =   Meta.getExceptionCategory(objData);
         objData.exception         =   Meta.getExceptoin(objData);
         //------------------------//
         objData.currentRTeam =   Meta.getStageRTeam(objData.cstage);
         objData.totalage     =   dateDiffinDurationStage(data[dtkey].job_date_finished , dateCreatedJob );
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
         objData.revisionC    =   Mdt.revisionVal;
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
         objData.printAsset   =   Mdt.printAsset;
         objData.printReady   =   Mdt.printReady;
         objData.permissionType = Mdt.permissionType
      }
      //console.log("Object Final VAlues: ==>", objData);
      dataResult.push(objData);
    }
  });
});


postRoutes.route('/artlogautoset', checkToken.checkToken).post(function (req, res) {
  console.log("req parameters :" , req.body, new Date().toISOString());
  let q =  { 'job_active_stage.status':'Active' };
  if(!!req.body.status && req.body.status!= 'Active' ){
    q =  { 'job_active_stage.status':'Approved' };
  }
  Mdb.bynder_jobs.find(q ).sort({job_key:-1}).then((data)=>{
    console.log("data responded in DB TIMEs :", data.length, new Date().toISOString());
  let dataResult=[];
  let Meta= new Metadt()
      Meta.iniMeta(WorkFlowJobsMetaData);
      Meta.initAssetMeta(GCurriculaWIP);
      Meta.PrintAssetMeta(GPrintReady)
  for(let  dtkey in data){
    var objData = data[dtkey].toObject();
    if(!!data[dtkey].jobMetaproperties){
      Meta.getInitDataSet(data[dtkey]);
      let Mdt= Meta.getMeta();
      let metaObj=Object.entries(data[dtkey].jobMetaproperties);
      if(data[dtkey].Preset_Stages.length > 0 ){
       let lastChangeCreated= data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].start_date;
       let lastChangeComplated=(!!data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished)?
        data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished: new Date();
        objData.lastage=dateDiffinDurationStage(lastChangeComplated, lastChangeCreated);
      }
      var dateCreatedJob =  data[dtkey].dateCreated ||Mdt.dateCreatedM ;
      if(data[dtkey].job_date_finished===null && data[dtkey].job_active_stage.status!="Approved"){
        data[dtkey].job_date_finished=new Date().toISOString();
      }else if(data[dtkey].job_date_finished===null){
        data[dtkey].job_date_finished=new Date().toISOString();
      }
      objData.cstage=""; objData.workflow=Meta.getWorkflow();
      objData.mathAuditRC = 0;
      if(objData.Preset_Stages.length > 0){
        // IT Should be another that we can not captuchred 
        objData.mathAuditRC= objData.Preset_Stages.filter( d => d.StageNames =='Math Audit Review' ).length;
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
      objData.comment = (objData.flaged)? objData.flaggedComment +'|'+ objData.flaggedUser +'|'+ moment(objData.flaggedDate).format('MM-DD-YYYY') :'';
      objData.artTeamPriority   =   Meta.getTeamPriority(objData);
      objData.artTeamStatus     =   Meta.getTeamStatus(objData);
      objData.batchCDate        =  (objData.batchCDate!="" && typeof objData.batchCDate != "undefined")? moment(objData.batchCDate).format('DD/MM/YYYY'):'';
      objData.receiveddate      =  (objData.receiveddate!="" && typeof objData.receiveddate != "undefined")? moment(objData.receiveddate).format('DD/MM/YYYY'):'';
      objData.mpsDueDate        =  (objData.mpsDueDate!="" && typeof objData.mpsDueDate != "undefined")? moment(objData.mpsDueDate).format('DD/MM/YYYY'):'';
      
       // Art Team Columns // 
       /*objData.receiveddate      =   Meta.getMathAuditStartDt(objData);
       objData.mpsDueDate        =   Meta.getMpsDueDate(objData);
       objData.artTeamStatus     =   Meta.getTeamStatus(objData);
       objData.artTeamPriority   =   Meta.getTeamPriority(objData);
       objData.exceptionCategory =   Meta.getExceptionCategory(objData);
       objData.exceptoin         =   Meta.getExceptoin(objData);
       */
       //------------------------//
       objData.currentRTeam =   Meta.getStageRTeam(objData.cstage);
       objData.totalage     =   dateDiffinDurationStage(data[dtkey].job_date_finished , dateCreatedJob );
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
       objData.revisionC    =   Mdt.revisionVal;
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
       objData.printAsset   =   Mdt.printAsset;
       objData.printReady   =   Mdt.printReady;
       objData.permissionType = Mdt.permissionType
    //}
      //console.log("Object Final VAlues: ==>", objData);
      console.log("data testing :", objData);
      //dataResult.push(objData);
      Mdb.bynder_jobs.updateOne({
        _id: objData._id
      },{
        $set:{
          grade: objData.grade,
          gradeID: objData.gradeID,
          module: objData.module,
          moduleID: objData.moduleID,
          topic : objData.topic,
          facing : objData.facing,
          facingID : objData.facingID,
          series : objData.series,
          revision : objData.revisionC,
          revisionID: objData.revisionID,
          artcomplex : objData.artcomplex,
          artcomplexID : objData.artcomplexID,
          artassion : objData.artassion,
          artassionID : objData.artassionID,
          risk : objData.risk,
          riskID : objData.riskID,
          impact: objData.impact,
          impactId : objData.impactId,
          curriculum: objData.curriculum,
          creditLine : objData.creditLine,
          printAsset : objData.printAsset,
          printReady : objData.printReady,
          permissionType: objData.permissionType
        }
      }).then(dt=>{
        console.log("result updated at :", dt);
      }).catch(error => {
        console.log("Error found data at:", error);
      })
    }
  }
 
    
  }).catch((Err)=>console.log("Error in finder ERROR:", Err));
});
postRoutes.route('/artlogdataApprove', checkToken.checkToken).post(function (req, res) {
  console.log("req parameters :" , req.body, new Date().toISOString());
    let $and = [ ];
    if(!!req.body.grade && req.body.grade!=""){
      let g=req.body.grade.split(",");
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
      $and.push( { "batch" : req.body.topic } ); 
    }
    if(!!req.body.curricula && req.body.curricula!=""){
      $and.push( { "jobMetaproperties.0790cd4f2aed4ce0a315ff8034a43994" : req.body.curricula } ); 
    }
    if(!!req.body.added && req.body.added!= ""){
      if(req.body.added==1){
        $and.push({ "duplicate" : {$exists: false} });
      }else if(req.body.added==2){
        $and.push({ "duplicate" : true });
      }else if(req.body.added==3){
        $and.push({ "duplicate" : false });
      }else if(req.body.added==4){
        $and.push({ "flaged" : true });
      }else if(req.body.added==5){
        $and.push({ "killed" : true });
      }else if(req.body.added==6){
        $and.push({ "killed" : {$ne: true} });
      }else if(req.body.added==7){
        $and.push({ "job_active_stage.position" : 2 });
      }
    }
    if(!!req.body.workflow && req.body.workflow!=""){
      $and.push({'presetName':{ $regex:  new RegExp(".*"+req.body.workflow+".*") }} ) 
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
    let q={"job_active_stage.status": { $in: [ 'Active', 'NeedsChanges']} ,
    "campaignID":{"$in": ['4924dc05-03c5-4086-90ce-41d8bf501684',
     '9618db88-fc78-47a5-9916-e864e696ae11','5bf2ed40-6b98-45b2-b926-5eb4445ed38d','5aaa32f4-0a67-4daa-a404-3def00d73475','fd4c4b58-baee-41b4-adb4-24fcd3cf4ae6'] } };
      
    if(!!req.body.jobkey && req.body.jobkey!=""){
      q={"job_key": req.body.jobkey }
    }else if($and.length >0){
      $and.push( {"campaignID":{"$in": ['4924dc05-03c5-4086-90ce-41d8bf501684','9618db88-fc78-47a5-9916-e864e696ae11', '5bf2ed40-6b98-45b2-b926-5eb4445ed38d','5aaa32f4-0a67-4daa-a404-3def00d73475','fd4c4b58-baee-41b4-adb4-24fcd3cf4ae6'] } });
       q= { $and};
    }
    let fields={ batchCDate:1,receiveddate:1,mpsDueDate:1,artTeamStatus : 1, artTeamPriority : 1, exceptionCategory : 1, exception:1, presetstages:1,mathAuditor:1,flagedTeam:1,dateCreated:1, job_date_finished:1,pageNo:1,killed:1,flaged:1,batch:1,presetstages:1,isPaging:1, comment:1, mverification:1, duplicate:1, presetName:1, Preset_Stages:1, id:1, name:1, description:1, job_active_stage:1, jobMetaproperties:1, jobID:1, job_key:1, dateCreated:1, job_date_finished:1, thumb:1, generatedTags:1};
    console.log("Calling artlogdata Data " , JSON.stringify(q), JSON.stringify(fields));
    Mdb.bynder_jobs.find(q ).sort({job_key:-1}).limit(100).then((data)=>{
      console.log("data responded in DB TIMEs :", data.length, new Date().toISOString());
      res.send(data);
    }).catch(Error => {
      console.log("Error in Find Query", Error);
    })

})
postRoutes.route('/artlogdata', checkToken.checkToken).post(function (req, res) {
    console.log("req parameters :" , req.body, new Date().toISOString());
    let $and = [ ];
    if(!!req.body.grade && req.body.grade!=""){
      let g=req.body.grade.split(",");
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
      $and.push( { "batch" : req.body.topic } ); 
    }
    if(!!req.body.curricula && req.body.curricula!=""){
      $and.push( { "jobMetaproperties.0790cd4f2aed4ce0a315ff8034a43994" : req.body.curricula } ); 
    }
    if(!!req.body.added && req.body.added!= ""){
      if(req.body.added==1){
        $and.push({ "duplicate" : {$exists: false} });
      }else if(req.body.added==2){
        $and.push({ "duplicate" : true });
      }else if(req.body.added==3){
        $and.push({ "duplicate" : false });
      }else if(req.body.added==4){
        $and.push({ "flaged" : true });
      }else if(req.body.added==5){
        $and.push({ "killed" : true });
      }else if(req.body.added==6){
        $and.push({ "killed" : {$ne: true} });
      }else if(req.body.added==7){
        $and.push({ "job_active_stage.position" : 2 });
      }
    }
    if(!!req.body.workflow && req.body.workflow!=""){
      $and.push({'presetName':{ $regex:  new RegExp(".*"+req.body.workflow+".*") }} ) 
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
    let q={"job_active_stage.status": { $in: [ 'Active', 'NeedsChanges']} ,
    "campaignID":{"$in": ['4924dc05-03c5-4086-90ce-41d8bf501684',
     '9618db88-fc78-47a5-9916-e864e696ae11','5bf2ed40-6b98-45b2-b926-5eb4445ed38d','5aaa32f4-0a67-4daa-a404-3def00d73475','fd4c4b58-baee-41b4-adb4-24fcd3cf4ae6'] } };
      
    if(!!req.body.jobkey && req.body.jobkey!=""){
      q={"job_key": req.body.jobkey }
    }else if($and.length >0){
      // condition for ignore other Jobs  '4924dc05-03c5-4086-90ce-41d8bf501684',
     // '9618db88-fc78-47a5-9916-e864e696ae11',
      $and.push( {"campaignID":{"$in": ['4924dc05-03c5-4086-90ce-41d8bf501684','9618db88-fc78-47a5-9916-e864e696ae11', '5bf2ed40-6b98-45b2-b926-5eb4445ed38d','5aaa32f4-0a67-4daa-a404-3def00d73475','fd4c4b58-baee-41b4-adb4-24fcd3cf4ae6'] } });
       q= { $and};
    }
   // q={  job_key:"EM2-5207" };
    let fields={ batchCDate:1,receiveddate:1,mpsDueDate:1,artTeamStatus : 1, artTeamPriority : 1, exceptionCategory : 1, exception:1, presetstages:1,mathAuditor:1,flagedTeam:1,dateCreated:1, job_date_finished:1,pageNo:1,killed:1,flaged:1,batch:1,presetstages:1,isPaging:1, comment:1, mverification:1, duplicate:1, presetName:1, Preset_Stages:1, id:1, name:1, description:1, job_active_stage:1, jobMetaproperties:1, jobID:1, job_key:1, dateCreated:1, job_date_finished:1, thumb:1, generatedTags:1};
    console.log("Calling artlogdata Data " , JSON.stringify(q), JSON.stringify(fields));
    // testing in Live Build with Pradeep Sir 
    //.skip(  parseInt(req.body.fromPage)).limit( parseInt(req.body.toPage) ).
    //.skip(2000) export dt
    Mdb.bynder_jobs.find(q ).sort({job_key:-1}).limit(100).then((data)=>{
      console.log("data responded in DB TIMEs :", data.length, new Date().toISOString());
    let dataResult=[];
    let Meta= new Metadt()
        Meta.iniMeta(WorkFlowJobsMetaData);
        Meta.initAssetMeta(GCurriculaWIP);
        Meta.PrintAssetMeta(GPrintReady)
    for(let  dtkey in data){
      var objData = data[dtkey].toObject();
      if(!!data[dtkey].jobMetaproperties){
        Meta.getInitDataSet(data[dtkey]);
        let Mdt= Meta.getMeta();
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
        if(data[dtkey].Preset_Stages.length > 0 ){
         let lastChangeCreated= data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].start_date;
         let lastChangeComplated=(!!data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished)?
          data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished: new Date();
          objData.lastage=dateDiffinDurationStage(lastChangeComplated, lastChangeCreated);
        }
        var dateCreatedJob =  data[dtkey].dateCreated ||Mdt.dateCreatedM ;
        if(data[dtkey].job_date_finished===null && data[dtkey].job_active_stage.status!="Approved"){
          data[dtkey].job_date_finished=new Date().toISOString();
        }else if(data[dtkey].job_date_finished===null){
          data[dtkey].job_date_finished=new Date().toISOString();
        }
        objData.cstage=""; objData.workflow=Meta.getWorkflow();
        objData.mathAuditRC = 0;
        if(objData.Preset_Stages.length > 0){
          // IT Should be another that we can not captuchred 
          objData.mathAuditRC= objData.Preset_Stages.filter( d => d.StageNames =='Math Audit Review' ).length;
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
        objData.comment = (objData.flaged)? objData.flaggedComment +'|'+ objData.flaggedUser +'|'+ moment(objData.flaggedDate).format('MM-DD-YYYY') :'';
        //demo
        objData.artTeamPriority   =   Meta.getTeamPriority(objData);
        objData.artTeamStatus     =   Meta.getTeamStatus(objData);
        objData.batchCDate        =  (objData.batchCDate!="" && typeof objData.batchCDate != "undefined")? moment(objData.batchCDate).format('DD/MM/YYYY'):'';
        objData.receiveddate      =  (objData.receiveddate!="" && typeof objData.receiveddate != "undefined")? moment(objData.receiveddate).format('DD/MM/YYYY'):'';
        objData.mpsDueDate        =  (objData.mpsDueDate!="" && typeof objData.mpsDueDate != "undefined")? moment(objData.mpsDueDate).format('DD/MM/YYYY'):'';
        
         // Art Team Columns // 
         /*objData.receiveddate      =   Meta.getMathAuditStartDt(objData);
         objData.mpsDueDate        =   Meta.getMpsDueDate(objData);
         objData.artTeamStatus     =   Meta.getTeamStatus(objData);
         objData.artTeamPriority   =   Meta.getTeamPriority(objData);
         objData.exceptionCategory =   Meta.getExceptionCategory(objData);
         objData.exceptoin         =   Meta.getExceptoin(objData);
         */
         //------------------------//
         objData.currentRTeam =   Meta.getStageRTeam(objData.cstage);
         objData.totalage     =   dateDiffinDurationStage(data[dtkey].job_date_finished , dateCreatedJob );
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
         objData.revisionC    =   Mdt.revisionVal;
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
         objData.printAsset   =   Mdt.printAsset;
         objData.printReady   =   Mdt.printReady;
         objData.permissionType = Mdt.permissionType
      }
      //console.log("Object Final VAlues: ==>", objData);
      dataResult.push(objData);
    }
    console.log("objData data responded in DB TIME:",  new Date().toISOString());
     job_keys=dataResult.filter( (d)=> d.job_key!="" ).map(d=>d.job_key);
     GridFilters={
      
      mathAuditors     :   [...new Set(dataResult.filter( (v, i)=> !!v.mathAuditor ).map(d=>d.mathAuditor))].sort(),
      pageNos          :   [...new Set(dataResult.filter( (v, i)=> !!v.pageNo ).map(d=>d.pageNo))].sort(),
      flagedTeams      :   [...new Set(dataResult.filter( (v, i)=> !!v.flagedTeam ).map(d=>d.flagedTeam))].sort(),
      printAssets      :   [...new Set(dataResult.filter( (v, i)=> !!v.printAsset ).map(d=>d.printAsset))].sort(),
      printReadys      :   [...new Set(dataResult.filter( (v, i)=> !!v.printReady ).map(d=>d.printReady))].sort(),
      permissionTypes  :   [...new Set(dataResult.filter( (v, i)=> !!v.permissionType ).map(d=>d.permissionType))].sort(),
      curriculum       :   [...new Set(dataResult.filter( (v, i)=> !!v.curriculum ).map(d=>d.curriculum))].sort(),
      workflow         :   [...new Set(dataResult.filter( (v, i)=> !!v.workflow ).map(d=>d.workflow))].sort(),
      currentRTeam     :   [...new Set(dataResult.filter( (v, i)=> !!v.currentRTeam ).map(d=>d.currentRTeam))].sort(),
      lesson           :   [...new Set(dataResult.filter( (v, i)=> !!v.lesson ).map(d=>d.lesson))].sort(), 
      lessonlet        :   [...new Set(dataResult.filter( (v, i)=> !!v.lessonlet ).map(d=> d.lessonlet))].sort(),
      component        :   [...new Set(dataResult.filter( (d)=> !!d.component ).map(d=>d.component))].sort(),
      grade            :   [...new Set(dataResult.filter( (d)=> !!d.grade ).map(d=>d.grade))].sort(),
      module           :   [...new Set(dataResult.filter( (d)=> !!d.module ).map(d=>d.module))].sort(),
      artcomplex       :   [...new Set(dataResult.filter( (d)=> !!d.artcomplex ).map(d=>d.artcomplex))].sort(),
      artassion        :   [...new Set( dataResult.filter( (d)=> !!d.artassion ).map(d=>d.artassion))].sort(),
      risk             :   [...new Set(dataResult.filter( (d)=> !!d.risk ).map(d=>d.risk))].sort(),
      impact           :   [...new Set(dataResult.filter( (d)=> !!d.impact ).map(d=>d.impact))].sort(),
      facing           :   [...new Set(dataResult.filter( (d)=> !!d.facing ).map(d=>d.facing))].sort(),
      series           :   [...new Set(dataResult.filter( (d)=> !!d.series ).map(d=>d.series))].sort(),
      topic            :   [...new Set(dataResult.filter( (d)=> !!d.topic ).map(d=>d.topic))].sort(),
      batch            :   [...new Set(dataResult.filter( (d)=> !!d.batch ).map(d=>d.batch))].sort(),
      revision         :   [...new Set(dataResult.filter( (d)=> !!d.revisionC ).map(d=>d.revisionC ))].sort(),
      cstages          :   [...new Set(dataResult.filter( (d)=> !!d.cstage ).map(d=>d.cstage))].sort(),
      cstatus          :   [...new Set(dataResult.filter( (d)=> !!d.job_active_stage.status ).map(d=>d.job_active_stage.status))].sort(),
    
    };
      console.log("result length:", dataResult.length , new Date().toISOString());
      
      console.log("objData data MAPED responded in DB TIME:", dataResult.length , new Date().toISOString());
      //Mdb.bynder_jobs.find(q, fields ).count().then(dt=>{
        let result={ artLogData : dataResult, GridFilters : GridFilters, totalCount: dataResult.length};
        console.log("result responce:", new Date().toISOString());
        res.send( result );
        console.log("============>result length:", dataResult.length , new Date().toISOString());
      //})
      
    }).catch((Err)=>console.log("Error in finder ERROR:", Err));
});

postRoutes.route('/artlogteamdata', checkToken.checkToken).post(function (req, res) {
  console.log("artlogteamdata req parameters :" , req.body);
  let sData =JSON.parse(req.body.filters);
  let q ={};
  //if(sData.rTypeData =="1"){
    let dateReq = moment().format('YYYY-MM-DD');
    if(!!sData.year && !!sData.month && !!sData.day) {
      dateReq = new Date(sData.year+'-'+sData.month+'-'+sData.day);
    }
    
    let start = moment(dateReq).format('YYYY-MM-DD') +'T00:00:00';
    //let end = moment(sData.rDate).add(1, 'days').format('YYYY-MM-DD') +'T00:00:00.000Z';
    let end = moment(dateReq).format('YYYY-MM-DD') +'T23:59:59';
    q={
      receiveddate: {
        $gte: new Date(start),
        $lt: new Date(end)
      },
      //artTeamStatus: 'WIP'
    }
 
  const myProm1 = new Promise(function(resolve, reject) {
    Mdb.bynder_jobs.find(q).then(data=>{
      resolve(data);
    });
  });
  myProm1.then(data=>{
    const myProm2 = new Promise(function(resolve, reject) {
      let q2={
        artComplateDate: {
          $gte: new Date(start),
          $lt: new Date(end)
        },
        artTeamStatus: 'Delivered'
      }
      Mdb.bynder_jobs.find(q2).then(data2=>{
        resolve(data2);
      });
    });
    myProm2.then(data2=>{
      for(d of data2){
        d.artRorC="Outflow";
      }
      for(d of data){
        d.artRorC="Inflow";
      }
      data = data.concat(data2);
      let dataResult=[];
      let Meta= new Metadt()
      Meta.iniMeta(WorkFlowJobsMetaData);
      Meta.initAssetMeta(GCurriculaWIP);
      Meta.PrintAssetMeta(GPrintReady);
      for(let  dtkey in data){  
      var objData = data[dtkey].toObject();
      if(!!data[dtkey].jobMetaproperties){
        Meta.getInitDataSet(data[dtkey]);
        let Mdt= Meta.getMeta();
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);

        if(data[dtkey].Preset_Stages.length > 0 ){
         let lastChangeCreated= data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].start_date;
         let lastChangeComplated=(!!data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished)?
          data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished: new Date();
          objData.lastage=dateDiffinDurationStage(lastChangeComplated, lastChangeCreated);
        }
        var dateCreatedJob =  data[dtkey].dateCreated ||Mdt.dateCreatedM ;
        if(data[dtkey].job_date_finished===null && data[dtkey].job_active_stage.status!="Approved"){
          data[dtkey].job_date_finished=new Date().toISOString();
        }else if(data[dtkey].job_date_finished===null){
          data[dtkey].job_date_finished=new Date().toISOString();
        }
        objData.cstage=""; objData.workflow=Meta.getWorkflow();
        objData.job_active_stageStatus= objData.job_active_stage.status;
        objData.mathAuditRC = 0;
        if(objData.Preset_Stages.length > 0){
          // IT Should be another that we can not captuchred 
          objData.mathAuditRC= objData.Preset_Stages.filter( d => d.StageNames =='Math Audit Review' ).length;
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
        objData.artRorC= data[dtkey].artRorC
        objData.batchCDate        =  (objData.batchCDate!="" && typeof objData.batchCDate != "undefined")? moment(objData.batchCDate).format('YYYY-MM-DD HH:MM a'):'';
        objData.receiveddate      =  (objData.receiveddate!="" && typeof objData.receiveddate != "undefined")? moment(objData.receiveddate).format('YYYY-MM-DD HH:MM a'):'';
        objData.mpsDueDate        =  (objData.mpsDueDate!="" && typeof objData.mpsDueDate != "undefined")? moment(objData.mpsDueDate).format('YYYY-MM-DD HH:MM a'):'';
        objData.artComplateDate   =  (objData.artComplateDate!="" && typeof objData.artComplateDate != "undefined")? moment(objData.artComplateDate).format('YYYY-MM-DD HH:MM a'):'';
        
        objData.artTeamPriority   =   Meta.getTeamPriority(objData);
        objData.artTeamStatus     =   Meta.getTeamStatus(objData);
        objData.currentRTeam =   Meta.getStageRTeam(objData.cstage);
        objData.totalage     =   dateDiffinDurationStage(data[dtkey].job_date_finished , dateCreatedJob );
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
         objData.revisionC    =   Mdt.revisionVal;
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
         objData.printAsset   =   Mdt.printAsset;
         objData.printReady   =   Mdt.printReady;
         objData.permissionType = Mdt.permissionType
      }
      //console.log("Object Final VAlues: ==>", objData);
      dataResult.push(objData);
    }
    res.send(dataResult);
    })
  })
});
postRoutes.route('/deletejobsreferesh', checkToken.checkToken).post(function (req, res) {
  console.log("Action:deletejobsreferesh", req.body.filters);
  let jobsKeys= req.body.filters.split(',');
  //Spaces seprator handling;
  //if(typeof a != "object" && jobsKeys.trim()!=''){ jobsKeys.split(' '); }
  let jobsKeysId = [];
  for(let k in jobsKeys){
    //if(jobsKeys[k].trim()!=""){
      jobsKeysId.push(jobsKeys[k]);
    //}
  }
  Mdb.bynder_jobs.find({job_key: {$in : jobsKeysId}}).then(data=>{
    for(let dt of data){

      let refreshData = {
        id        : dt.id,
        assetID   : dt.assetID,
        jobID     : dt.jobID,
        job_key   : dt.job_key,
        jobMetaproperties : dt.jobMetaproperties,
        isDeleted: false,
        addedDate : new Date()
      }
      console.log("refreshData:", refreshData);
      var bynder_jobs_deletelist =  Mdb.bynder_jobs_deletelist(refreshData);
      bynder_jobs_deletelist.save().then((rs) => {
        console.log('data has been saved: result', rs);
        //resolve(JobsResult);
      });
      console.log("data:",dt);
    }
    res.send({ msg: data.length +' jobs has been added for Delete List.', keys: jobsKeysId});
  });
});
postRoutes.route('/deletelistjobs', checkToken.checkToken).post(function (req, res) {
  console.log("Action data deletelistjobs");
  var start = new Date();
  start.setHours(0,0,0,0);
  var end = new Date();
  end.setHours(23,59,59,999);
  let Meta= new Metadt()
  Meta.iniMeta(WorkFlowJobsMetaData);
  Meta.initAssetMeta(GCurriculaWIP);
  Meta.PrintAssetMeta(GPrintReady);
  Mdb.bynder_jobs_deletelist.find({addedDate :  {$gte: start, $lt: end}}).then((data) => {
    let resData = [];
    for(let dtkey in data ){
      var objData = data[dtkey].toObject();
      if( !!data[dtkey].jobMetaproperties ||!!data[dtkey].jobMetaproperties) {
        Meta.getInitDataSet(data[dtkey]);
        let Mdt= Meta.getMeta();
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
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
         objData.job_key      =   Meta.getOldJobkey();
         objData.revisionID   =   Mdt.revision;
         objData.revisionC    =   Mdt.revisionVal;
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
         objData.printAsset   =   Mdt.printAsset;
         objData.printReady   =   Mdt.printReady;
         objData.permissionType = Mdt.permissionType

        resData.push(objData);
      }
    }
    res.send(resData);
  }).catch(Err=>{
    console.log(Err);
  })
});
postRoutes.route('/showrefreshjobs', checkToken.checkToken).post(function (req, res) {
  var start = new Date();
  start.setHours(0,0,0,0);
  var end = new Date();
  end.setHours(23,59,59,999);
  let Meta= new Metadt()
  Meta.iniMeta(WorkFlowJobsMetaData);
  Meta.initAssetMeta(GCurriculaWIP);
  Meta.PrintAssetMeta(GPrintReady);
  //
  Mdb.bynder_jobs_refresh.find({addedDate :  {$gte: start, $lt: end}}).then((data) => {
    let resData = [];
    for(let dtkey in data ){
      var objData = data[dtkey].toObject();
      if( !!data[dtkey].OldjobMetaproperties ||!!data[dtkey].jobMetaproperties) {
        data[dtkey].jobMetaproperties = data[dtkey].OldjobMetaproperties;
        if (!!data[dtkey].NewjobMetaproperties && !!data[dtkey].NewjobMetaproperties ) {
          data[dtkey].jobMetaproperties = data[dtkey].NewjobMetaproperties;
        } 
        Meta.getInitDataSet(data[dtkey]);
        let Mdt= Meta.getMeta();
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
         objData.Newjobkey    =   (!!objData.NewjobMetaproperties && objData.NewjobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f']) ? objData.NewjobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'] :'';
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
         objData.job_key      =   Meta.getOldJobkey();
         objData.revisionID   =   Mdt.revision;
         objData.revisionC    =   Mdt.revisionVal;
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
         objData.printAsset   =   Mdt.printAsset;
         objData.printReady   =   Mdt.printReady;
         objData.permissionType = Mdt.permissionType

        resData.push(objData);
      }
    }
    //////////
    res.send(resData);
  }).catch((Err)=>{
    console.log(Err);
  })
});
postRoutes.route('/refreshjobs', checkToken.checkToken).post(function (req, res) {
  console.log("Action:refreshjobs", req.body.filters);
  let jobsKeys= req.body.filters.split(',');
  //Spaces seprator handling;
  //if(typeof a != "object" && jobsKeys.trim()!=''){ jobsKeys.split(' '); }
  let jobsKeysId = [];
  for(let k in jobsKeys){
    //if(jobsKeys[k].trim()!=""){
      jobsKeysId.push(jobsKeys[k]);
    //}
  }
  Mdb.bynder_jobs.find({job_key: {$in : jobsKeysId}}).then(data=>{
    for(let dt of data){

      let refreshData = {
        id        : dt.id,
        assetID   : dt.assetID,
        jobID     : dt.jobID,
        job_key   : dt.job_key,
        OldjobMetaproperties : dt.jobMetaproperties,
        isRefresh: false,
        addedDate : new Date()
      }
      console.log("refreshData:", refreshData);
      var bynder_jobs_refresh =  Mdb.bynder_jobs_refresh(refreshData);
      bynder_jobs_refresh.save().then((rs) => {
        console.log('data has been saved: result', rs);
        //resolve(JobsResult);
      });
      console.log("data:",dt);
    }
    res.send({ msg: data.length +' jobs has been added for metadata refresh.', keys: jobsKeysId, data: data.length});
  });
});
//artgraph scorecardinit
let scoreCardGbdt ={ campaigns:[], grades:[],modules:[] };
postRoutes.route('/scorecardinit', checkToken.checkToken).post(function (req, res) {
  console.log("Action artgraph");
 const myProm1 = new Promise(function(resolve, reject) {
  let query={ ID : '262f92ed-59b1-4c3a-a74d-6877d7f8ba4c'};
    Mdb.campaign.find({ ID: {
      ////'3b6d57c7-55c1-489b-aeff-b81b7aaff1ef', '0ad18ec8-8648-4d15-8681-2c3f4e0ee914',
      $nin: ['f2e038c4-9191-4480-a55e-2dc92d3f52e7','3b6d57c7-55c1-489b-aeff-b81b7aaff1ef', '0ad18ec8-8648-4d15-8681-2c3f4e0ee914','bb6f3943-5a47-49f0-ab82-c6278d1dad29']
    }}).then(data=>{
       resolve(data); 
    }).catch((e) => {
      reject( new Error('REJECTError:', Err));
   });
  });
  myProm1.then((data)=>{
    Mdb.metaproperties.find({ ID : '262f92ed-59b1-4c3a-a74d-6877d7f8ba4c' }).then(dt =>{
      scoreCardGbdt.grades = GGrades;
      scoreCardGbdt.modules = GModules;
      scoreCardGbdt.campaigns = data;
      res.send({  grade: GGrades, module: GModules, campaigns:data , jobType: dt, msg:'text'});
    });
  });
});

//medianoverdueperteam
postRoutes.route('/medianoverdueperteam', checkToken.checkToken).post( async function (req, res) { 
  console.log("\x1b[34m \n ACTION medianoverdueperteam =>", JSON.stringify(req.body), "\n");
 
  var workflowPreset="", compaignId ="",jobType="",
  grade="", modules="", startDate="", endDate="",startDateRange="", endDateRange="", currentStatus="", jobTypeTemp="", isOverdue=false;
    if(req.body.workflowPreset){ workflowPreset=req.body.workflowPreset; }
    if(req.body.compaignId){ compaignId=req.body.compaignId; }
    if(req.body.jobType){ jobType=req.body.jobType.split("-").join(""); jobTypeTemp=req.body.jobType;}
    if(req.body.grade){ grade=req.body.grade.split("-").join(""); }
    if(req.body.modules){ modules=req.body.modules.split("-").join(""); }
    if(req.body.startDateRange){ startDateRange=req.body.startDateRange; }
    if(req.body.endDateRange){ endDateRange=req.body.endDateRange; }
    if(!!req.body.currentStatus ){
      currentStatus=req.body.currentStatus.split(',');
      var neWcurrentStatus=[]; 
      if(currentStatus.length > 0 ){
        for(let temp =0; temp< currentStatus.length; temp++){
          if( currentStatus[temp] != 'Overdue'){
            neWcurrentStatus.push( currentStatus[temp] );
          }
          if( currentStatus[temp] == 'Overdue'){
            isOverdue=true; 
          }
          if( currentStatus.indexOf('Overdue')>-1 &&   currentStatus.indexOf('Approved') == -1 ){
            neWcurrentStatus.push("Active");
            neWcurrentStatus.push("NeedsChanges");
          }
        }
      }
      currentStatus=neWcurrentStatus;
    }
    var frmDate, toDate, dt , GTat=0;
    var TatQuery=""; var OverDueData=[];
      var GMatchFilter=[];
      if(compaignId){ GMatchFilter.push({ "campaignID": compaignId });  }
      if(grade){ GMatchFilter.push({ "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef": grade }); }
      if(modules){ GMatchFilter.push({ "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579": modules });}
    //change Date range related filters
      if(startDateRange && startDateRange.indexOf(" - ") != -1){
        dt= startDateRange.split(" - ");
        frmDate=dt[0], toDate=dt[1];
        GMatchFilter.push( {"dateCreated":{"$gte" : new Date(frmDate) }}, { "dateCreated":{"$lte" : new Date(toDate) }} );
      }else if(endDateRange!="" && endDateRange.indexOf(" - ") != -1){
        dt= endDateRange.split(" - ");
        frmDate=dt[0], toDate=dt[1];
        GMatchFilter.push( {"job_date_finished":{"$gte" : new Date(frmDate) }}, { "job_date_finished":{"$lte" : new Date(toDate) }} );
      }
      if(currentStatus && currentStatus.length >0 ){ GMatchFilter.push({ "job_active_stage.status":{'$in': currentStatus }});}
      
      if(workflowPreset!=""){
        var QueryTat;
        var OverDueData=[];
        if(workflowPreset!="Permission"){
          QueryTat={"asset_typeId" : workflowPreset};
        }else{
          if(jobTypeTemp){
            QueryTat={"asset_typeId":jobTypeTemp};
          }else{
            QueryTat={"asset_typeId":'05dedb54-4418-4ea7-89c6-18ef1d188bd5'};
          }
        }
          var tat=0; 
          console.log("\x1b[34m Query for Overdue data kkk:",JSON.stringify(QueryTat) );
          await Mdb.overdue_jobs.find(QueryTat).then((tatData)=>{
            tat= tatData[0].tat
          }).catch((Err)=>{
            console.log("ERror", QueryTat);
          });
          GTat=tat;
          GMatchFilter.push({"CalDuration":{"$gte":tat}});
          GMatchFilter.push({"job_active_stage.status":{"$ne":"Cancelled"}});
          GMatchFilter.push({"job_active_stage.status":{"$in":["Active","NeedsChanges"]}});
          GMatchFilter.push({"presetName":{$regex : new RegExp(".*"+workflowPreset+".*") }});
          if(jobType && jobType=="Unallocated"){ GMatchFilter.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": {"$exists":false} }); }
          else if(jobType){ GMatchFilter.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": jobType }); }
          var overDueQuery=[ //{"$lookup":{"localField":"presetID","from":"job_presets","foreignField":"ID","as":"joincollection1"}},
            {$project: {"campaignID":1,"jobMetaproperties":1,"presetName":1, "job_active_stage":1, "id":1, "job_duration":1, "dateCreated":1, "job_date_finished":1,
                             "CalDuration":{"$cond":{"if":{"$eq":["$job_date_finished",""]},
        "then":{"$divide":[{"$subtract":[ new Date(),"$dateCreated"]},86400000]},
        "else":{"$cond":{"if":{"$eq":["$job_date_finished",null]},
           "then":{"$divide":[{"$subtract":[ new Date(),"$dateCreated"]},86400000]},
        "else":{"$divide":[{"$subtract":["$job_date_finished","$dateCreated"]},86400000]}}}}}}}        
        ];
          if(GMatchFilter.length > 0){
            GMatchFilter = GMatchFilter.length > 0 ? { $and: GMatchFilter } : {};
            overDueQuery.push(  { $match: GMatchFilter });

          }
          var group={ $group: { _id: "", overDueCount: { $sum: 1 }, overDueIds: {$push: "$_id"} , "jobDuration":{"$push": "$CalDuration" }}};
          overDueQuery.push(group);
          console.log("\x1b[34m Query for Overdue data Loading",JSON.stringify(overDueQuery) );
          await Mdb.bynder_jobs.aggregate(overDueQuery).then((overDueRes)=>{
           // console.log("overDueRes", workflowPreset ,"===>", overDueRes);
            var overDueCount=0, overDueIds=[], jobDuration=[];
            if(overDueRes.length > 0 && overDueRes[0].hasOwnProperty('overDueCount')){
               overDueCount=overDueRes[0].overDueCount;
               overDueIds=overDueRes[0].overDueIds;
               jobDuration=overDueRes[0].jobDuration;
            }
            
            OverDueData.push({teams: workflowPreset, overDueCount:overDueCount, overDueIds:overDueIds, jobDuration:jobDuration });
           // console.log(overDueRes.length,JSON.stringify(overDueRes));
          }).catch((Err)=>{
            console.log("Err in OverDue data", PermissionsData[k]);
          });
      }else{
        let PermissionsData=['Created Image','Shutterstock','Clip Art'];
        for(let k=0; k< PermissionsData.length; k++){
          var GlobalFiltes=[];
          var overdueQ=[],QueryTat; var tat=0;
          if(PermissionsData[k]=="Permission"){
           // QueryTat={"asset_typeId":'05dedb54-4418-4ea7-89c6-18ef1d188bd5'};
          }else{
            QueryTat={"asset_typeId": PermissionsData[k]};
            await Mdb.overdue_jobs.find(QueryTat).then((tatData)=>{
              tat= tatData[0].tat
            }).catch((Err)=>{
              console.log("ERror=>", JSON.stringify(QueryTat));
            });
          }
          var overDueQuery=[/*{"$lookup":{"localField":"presetID","from":"job_presets","foreignField":"ID","as":"joincollection1"}  },*/
          {$project: {"presetName":1,"jobMetaproperties":1,"presetName":1, "job_active_stage":1, "id":1, "job_duration":1, "dateCreated":1, "job_date_finished":1,
          "CalDuration":{"$cond":{"if": {"$eq":["$job_date_finished",""]} ,"then":{"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
            "else":{
              "$cond":{ "if": {"$eq":["$job_date_finished",null]}, "then":  {"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
                "else": {"$divide":[{"$subtract":["$job_date_finished","$dateCreated"]},86400000]}
              }
            }}}
          }}
          ];
          var matchFilter=[];
          for(let tt=0; tt< GlobalFiltes.length; tt++){
            matchFilter.push(GlobalFiltes[tt]);
          }
          //matchFilter=GlobalFiltes;
          matchFilter.push({ "job_active_stage.status":{'$in': ['Active'] }});
          matchFilter.push({"CalDuration":{"$gte": tat }});
          matchFilter.push({"presetName":{$regex : new RegExp(".*"+PermissionsData[k]+".*") }});
          if(matchFilter.length > 0){
            matchFilter = matchFilter.length > 0 ? { $and: matchFilter } : {};
            overDueQuery.push(  { $match: matchFilter });
          }
          var group={ $group: { _id: "", overDueCount: { $sum: 1 }, overDueIds: {$push: "$_id"} , "jobDuration":{"$push": "$CalDuration" } }};
          overDueQuery.push(group);
          console.log("\x1b[34m \n Query for Overdue data llll:", JSON.stringify(overDueQuery),"\n\n" );
          
          await Mdb.bynder_jobs.aggregate(overDueQuery).then((overDueRes)=>{
           // console.log("overDueRes", PermissionsData[k] ,"===>", overDueRes);
            var overDueCount=0, overDueIds=[], jobDuration=[];
            if(overDueRes.length > 0 && overDueRes[0].hasOwnProperty('overDueCount')){
               overDueCount=overDueRes[0].overDueCount;
               overDueIds=overDueRes[0].overDueIds;
               jobDuration=overDueRes[0].jobDuration;
            }
            
            OverDueData.push({teams: PermissionsData[k], overDueCount:overDueCount, overDueIds:overDueIds, jobDuration:jobDuration});
            console.log( "Over due data length ", overDueRes.length ,"\n");
          }).catch((Err)=>{console.log("Err in OverDue data", PermissionsData[k]);});
        }
        // for permission overdue data
        var IDS=[], QuerysPermission=[];
        await Mdb.metaproperties.find({ID:'262f92ed-59b1-4c3a-a74d-6877d7f8ba4c'},{"options.ID":1}).then((Data)=>{
         // console.log("All Tat Catatory data=",Data[0].options);
          for(let k=0; k < Data[0].options.length; k++){
              if(Data[0].options[k].ID && Data[0].options[k].ID!="")
              IDS.push(Data[0].options[k].ID);
          }
        }).catch((Err)=>{
          console.log("Err in get permission voderdue TAT");
        });
        await Mdb.overdue_jobs.find({ asset_typeId: {  $in: IDS } },{asset_typeId:1, asset_type:1, tat:1}).then((docs)=>{
            console.log("\n Overdue data TAT is", JSON.stringify(docs), "\n\n");
            for(let dt=1; dt< docs.length; dt++){
                var overDueQuery=[ //{"$lookup":{"localField":"presetID","from":"job_presets","foreignField":"ID","as":"joincollection1"}},
                {$project: {"jobMetaproperties":1,"presetName":1, "job_active_stage":1, "id":1, "job_duration":1, "dateCreated":1, "job_date_finished":1,
                "CalDuration":{"$cond":{"if": {"$eq":["$job_date_finished",""]} ,"then":{"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
                "else":{
                  "$cond":{"if": {"$eq":["$job_date_finished",null]}, "then":  {"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
                    "else": {"$divide":[{"$subtract":["$job_date_finished","$dateCreated"]},86400000]}
                  }
                }}}
              }}
              ];
                var matchFilter=[];
                for(let tt=0; tt < GlobalFiltes.length; tt++){
                  matchFilter.push(GlobalFiltes[tt]);
                }
                matchFilter.push({ "job_active_stage.status":{'$in': ['Active'] }});
                matchFilter.push({"CalDuration":{"$gte": docs[dt].tat }});
                matchFilter.push({"presetName":{$regex : new RegExp(".*Permission.*") }});
                matchFilter.push({"jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": docs[dt].asset_typeId.split("-").join("") });
                if(matchFilter.length > 0){
                  matchFilter = matchFilter.length > 0 ? { $and: matchFilter } : {};
                  overDueQuery.push(  { $match: matchFilter });
                }
                var group={ $group: { _id: "", overDueCount: { $sum: 1 }, overDueIds: {$push: "$_id"} , "jobDuration":{"$push": "$CalDuration" } }};
                overDueQuery.push(group);
                QuerysPermission.push(overDueQuery);

            }
          }).catch((Err)=>{ console.log("Err in permission var tat", Err); });

       for (let kk =0; kk< QuerysPermission.length; kk++){
        console.log("\x1b[34m \n Query for Overdue data for PermissionsData : LLL", JSON.stringify(QuerysPermission[kk]) ,"\n\n" );
               
        await Mdb.bynder_jobs.aggregate(QuerysPermission[kk]).then((overDueRes)=>{
          //console.log("overDueRes Permissions","===>", overDueRes);
          var overDueCount=0, overDueIds=[], jobDuration=[];
          if(overDueRes.length > 0 && overDueRes[0].hasOwnProperty('overDueCount')){
             overDueCount=overDueRes[0].overDueCount;
             overDueIds=overDueRes[0].overDueIds;
             jobDuration=overDueRes[0].jobDuration;
          }
          OverDueData.push({teams: "Permission", overDueCount:overDueCount, overDueIds:overDueIds, jobDuration:jobDuration});
        //  console.log(overDueRes.length,JSON.stringify(overDueRes));
        }).catch((Err)=>{ console.log("Err in OverDue data Permissions", Err);});
       }
      }
      var rsdata={ GTat:GTat, OverDueData:OverDueData};
      res.send(rsdata);
});
//createdcompletedjobs
postRoutes.route('/createdcompletedjobs', checkToken.checkToken).post( async function (req, res) { 
  console.log('Data testing createdcompletedjobs');
  var workflowPreset="", compaignId ="",jobType="",
  grade="", modules="", startDate="", endDate="",startDateRange="", endDateRange="", currentStatus=[], jobTypeTemp="", isOverdue=false;
    if(req.body.workflowPreset){ workflowPreset=req.body.workflowPreset; }
    if(req.body.compaignId){ compaignId=req.body.compaignId; }
    if(req.body.jobType){ jobType=req.body.jobType.split("-").join(""); jobTypeTemp=req.body.jobType; }
    if(req.body.grade){ grade=req.body.grade.split("-").join(""); }
    if(req.body.modules){ modules=req.body.modules.split("-").join(""); }
    if(req.body.startDateRange){ startDateRange=req.body.startDateRange; }
    if(req.body.endDateRange){ endDateRange=req.body.endDateRange; }

    if(req.body.currentStatus ){
      currentStatus= JSON.parse(req.body.currentStatus);
      var neWcurrentStatus=[]; 
      if(currentStatus.length > 0 ){
        for(let temp=0; temp< currentStatus.length; temp++){
          if( currentStatus[temp] != 'Overdue'){
            neWcurrentStatus.push( currentStatus[temp] );
          }
          if( currentStatus[temp] == 'Overdue'){
            isOverdue=true; 
          }
          if( currentStatus.indexOf('Overdue')>-1 &&   currentStatus.indexOf('Approved') == -1 ){
            neWcurrentStatus.push("Active");
            neWcurrentStatus.push("NeedsChanges");
          }
        }
      }
      currentStatus=neWcurrentStatus;
    }
    if(workflowPreset=="" && compaignId=="" && jobType=="" && grade==""&&modules==""&& currentStatus.length==0 &&startDateRange=="" && endDateRange==""){
      currentStatus.push("Active");
      console.log("Without-filter");
    }
    let dt, frmDate, toDate;
    var resultData=[];
    var count=0;
    let PermissionsData=['Permission','Created Image','Shutterstock','Clip Art'];
    var Searchcriteria=[];
    var Searchcriteria2=[];
    //change Date range related filters
    if(startDateRange && startDateRange.indexOf(" - ") != -1){
      console.log("startDateRange:==>>", startDateRange);
      dt= startDateRange.split(" - ");
      frmDate=dt[0], toDate=dt[1];
      Searchcriteria.push( {"dateCreated":{"$gte" : new Date(frmDate) }}, { "dateCreated":{"$lte" : new Date(toDate) }} );
      Searchcriteria2.push({"dateCreated":{"$gte" : new Date(frmDate ) }}, { "job_date_finished":{"$lte" : new Date(toDate)}});
    }else if(endDateRange!="" && endDateRange.indexOf(" - ") != -1){
      console.log("endDateRange:==>>", endDateRange);
      dt= endDateRange.split(" - ");
      frmDate=dt[0], toDate=dt[1];
      Searchcriteria.push( {"dateCreated":{"$gte" : new Date(frmDate) }}, { "job_date_finished":{"$lte" : new Date(toDate) }} );
      Searchcriteria2.push({"job_date_finished":{"$gte" : new Date(frmDate ) }}, { "job_date_finished":{"$lte" : new Date(toDate)}});
    }else{
      console.log("startDateRange:==>>", startDateRange);
      frmDate=new Date(); 
      frmDate.setDate(frmDate.getDate()-98);
      toDate=new Date();
      console.log("ELSE :==>>", frmDate, toDate);
      Searchcriteria.push( {"dateCreated":{"$gte" : frmDate }}, { "dateCreated":{"$lte" : new Date() }} );
      Searchcriteria2.push({"dateCreated":{"$gte" : frmDate }}, { "job_date_finished":{"$lte" : new Date()}});
    }
    var Project1= {$project:{  dateC: { $dateToString: { format: "%Y-%m-%d", date: "$dateCreated" } }}};
    var Project2={$project:{  dateC: { $dateToString: { format: "%Y-%m-%d", date: "$job_date_finished" } }}};
    var Group={"$group" : {_id:"$dateCreated", count:{$sum:1}}};
    var CreatedQuery=[];
    var FinishedQuery=[];
    var topProjection={"$project":{"presetName":1, "id":1,"jobMetaproperties":1,"name":1, "job_duration":1,"job_date_finished":1,"dateCreated":1, "job_active_stage":1,"presetID":1,"createdByID":1,"campaignID":1,"jobID":1,
    "jobMetaproperties":1, "Preset_Stages":1,
    "CalDuration":{"$cond":{"if": {"$eq":["$job_date_finished",""]} ,"then":{"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
          "else":{
            "$cond":{"if": {"$eq":["$job_date_finished",null]}, "then":  {"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
              "else": {"$divide":[{"$subtract":["$job_date_finished","$dateCreated"]}, 86400000]}
            }
          }}}
    }};
    if(workflowPreset){ 
      CreatedQuery.push(topProjection);
      FinishedQuery.push(topProjection);
      console.log("workflowPreset data is :", workflowPreset);
      Searchcriteria.push({ "presetName":{"$regex":new RegExp(".*"+workflowPreset+".*") } }); 
      Searchcriteria2.push({ "presetName":{"$regex":new RegExp(".*"+workflowPreset+".*") } }); 
    }
    if(compaignId){ 
      Searchcriteria.push({ "campaignID": compaignId }); 
      Searchcriteria2.push({ "campaignID": compaignId }); 
    }
    if(jobType && jobType == "Unallocated"){ 
      Searchcriteria.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": {"$exists":false} }); 
      Searchcriteria2.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": {"$exists":false} }); 
    } else if(jobType){ 
      Searchcriteria.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": jobType }); 
      Searchcriteria2.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": jobType }); 
    }
    if(grade){ 
      Searchcriteria.push({ "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef": grade }); 
      Searchcriteria2.push({ "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef": grade });
    }
    if(modules){ 
      Searchcriteria.push({ "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579": modules }); 
      Searchcriteria2.push({ "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579": modules }); 
    }
    if(currentStatus && currentStatus.length >0 ){ 
      Searchcriteria.push({ "job_active_stage.status":{'$in': currentStatus }}); 
      //Searchcriteria2.push({ "job_active_stage.status":{'$in': currentStatus }});
    }else{
      Searchcriteria.push({"job_active_stage.status":{"$ne":"Cancelled"}});
      Searchcriteria2.push({"job_active_stage.status":{"$ne":"Cancelled"}});
    }
    var TatQuery={};
    if(isOverdue){
      if(workflowPreset=="Permission"){
        TatQuery={ asset_type: jobTypeTemp};
      }else{
        TatQuery={ asset_type: workflowPreset };
      }
    }
    console.log("TatQuery::====>", TatQuery);
    Mdb.overdue_jobs.find(TatQuery).then((resTat)=>{
    var TatDays=0;
    if(resTat.length ==1 && isOverdue){
        TatDays=resTat[0].tat;
        Searchcriteria.push({ CalDuration: { $gte: TatDays } });
        Searchcriteria2.push({ CalDuration: { $gte: TatDays } });
    }
    if(Searchcriteria.length > 0){
      Searchcriteria = Searchcriteria.length > 0 ? { $and: Searchcriteria } : {};
      CreatedQuery.push(  { $match: Searchcriteria });
    }
    if(Searchcriteria2.length > 0){
      Searchcriteria2 = Searchcriteria2.length > 0 ? { $and: Searchcriteria2 } : {};
      FinishedQuery.push(  { $match: Searchcriteria2 });
    }
    CreatedQuery.push(Group);
    FinishedQuery.push( Group );
    console.log("\nCreated:", JSON.stringify(CreatedQuery), "\nFinishedQuery:", JSON.stringify(FinishedQuery));
    Mdb.bynder_jobs.aggregate(CreatedQuery).then((result1)=>{
        Mdb.bynder_jobs.aggregate(FinishedQuery).then((result2)=>{
          resultData={CreatedData:result1, FinishedData:  result2, StartTime: frmDate, EndTime: toDate };
          //console.log("\n\nWeekly graph data length is:", resultData.length );
          res.send(resultData);
        }).catch((Err)=>{
          console.log("Errordata in createdDAte",Err);
        });
    }).catch((Err)=>{
      console.log("Errordata in createdDAte",Err);
    });
  }).catch((Err)=>{
    console.log("Err in Tat==>", Err);
  });
});
postRoutes.route('/scorecardload', checkToken.checkToken).post( async function (req, res) {
	console.log("\n\n ACTION scorecardload data comming =>", JSON.stringify(req.body),"\n");
	var workflowPreset="", compaignId ="",jobType="", grade="", modules="", currentStatus=[], jobTypeTemp="", isOverdue=false;
	if(req.body.workflowPreset){ workflowPreset=req.body.workflowPreset; }
	if(req.body.compaignId){ compaignId=req.body.compaignId; }
	if(req.body.jobType){ jobType=req.body.jobType.split("-").join(""); }
	if(req.body.grade){ grade=req.body.grade.split("-").join(""); }
	if(req.body.modules){ modules=req.body.modules.split("-").join(""); }
	if(!!req.body.currentStatus && req.body.currentStatus!='' ){
		currentStatus= JSON.parse(req.body.currentStatus);
		var neWcurrentStatus=[]; 
		if(currentStatus.length > 0 ){
		  for(let temp=0; temp < currentStatus.length; temp++){
			if( currentStatus[temp] != 'Overdue'){
			  neWcurrentStatus.push( currentStatus[temp] );
			}
			if( currentStatus[temp] == 'Overdue'){
			  isOverdue=true; 
			}
			if( currentStatus.indexOf('Overdue')>-1 &&   currentStatus.indexOf('Approved') == -1 ){
			  neWcurrentStatus.push("Active");
			  neWcurrentStatus.push("NeedsChanges");
			}
		  }
		}
		currentStatus=neWcurrentStatus;
	}
	if(workflowPreset==""&& compaignId=="" &&jobType=="" &&grade==""&&modules==""&& currentStatus.length==0 ){
		currentStatus.push("Active");
	}
	var TatDays=0, TatRes = [];
	await Mdb.overdue_jobs.find({}).then((resTat)=>{
		TatRes = resTat;
	}).catch((Err)=>{
	  console.log("Error in tat Query==>", Err);
	});
  var resultData=[];
  var count=0;
  
  var permissionResponce=[];
  var serchFilter=[];
  var Query=[];
  if(compaignId){ serchFilter.push({ "campaignID": compaignId });  }
  if(jobType && jobType =="Unallocated"){ serchFilter.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": {"$exists":false} }); }
  else if(jobType){ serchFilter.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": jobType }); }
  if(grade){ serchFilter.push({ "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef": grade }); }
  if(modules){ 
    serchFilter.push({ "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579": modules }); 
  }
  if(currentStatus && currentStatus.length >0 ){ 
    serchFilter.push({ "job_active_stage.status":{'$in': currentStatus }}); 
  }
  var allJobsMatch=serchFilter;
  var project={ 
    $project:  { 'id':1, 
      'dateCreated':1,  
      "dateCompleted": "$job_date_finished",
      'CalDuration':1
    }
  };
  //var lookup1=  {"$lookup":{"localField":"presetID","from":"job_presets","foreignField":"ID","as":"joincollection"}};
  var project1={"$project":{"presetName":1, "jobMetaproperties":1,"name":1,"job_duration":1,"job_date_finished":1,"dateCreated":1,"job_active_stage":1,"presetID":1,"createdByID":1,"campaignID":1,"jobID":1,"jobMetaproperties":1,
  "job_key":1, "batch":1, "topic":1,
  "CalDuration":{"$cond":{"if": {"$eq":["$job_date_finished",""]} ,"then":{"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
      "else":{
          "$cond":{"if": {"$eq":["$job_date_finished",null]}, "then":  {"$divide":[{"$subtract":[new Date(),"$dateCreated"]},86400000]},
          "else": {"$divide":[{"$subtract":["$job_date_finished","$dateCreated"]},86400000]}}
      }}}    
  }};
  Query.push( project1);
  if(workflowPreset){ 
    serchFilter.push({ "presetName" : {"$regex":new RegExp(".*"+workflowPreset+".*") } }); 
  }
  let serchFilterUnder=[];
      for(let tt=0; tt < serchFilter.length; tt++){
        serchFilterUnder.push(serchFilter[tt] ) ;
      }
      let Query2=[ project1];
      Query2.push(  { $match: { $and: serchFilterUnder } });
      console.log("without Preset data==>", JSON.stringify(Query2) ,"\n\n");
      let Mdt =new Metadt();
      Mdt.iniMeta(WorkFlowJobsMetaData);
      let Meta= new Metadt()
      Mdt.initAssetMeta(GCurriculaWIP);
      Mdt.PrintAssetMeta(GPrintReady);
        await  Mdb.bynder_jobs.aggregate(Query2).then((res)=>{
          for(let key=0; key< res.length; key++){  
            res[key].duration= parseInt(res[key].CalDuration);
            res[key].CalDuration= parseFloat(res[key].CalDuration).toFixed(2);
             //console.log(res[key].presetName)
             let tat =0;
             if(!!res[key].presetName && res[key].presetName.indexOf('Permission') > -1){
              res[key].workflow = 'Permission';
              // here we have need to refract each Permission Type
              if(!!res[key].jobMetaproperties && !!res[key].jobMetaproperties['262f92ed59b14c3aa74d6877d7f8ba4c']) {
                let  dt = TatRes.filter(d=> d.asset_typeId.split('-').join('') === res[key].jobMetaproperties['262f92ed59b14c3aa74d6877d7f8ba4c'])
                tat = (dt.length > 0 ) ? dt[0].tat : 0;
                res[key].overDueStatus = (res[key].duration > tat) ? true : false;
              } else {
                let  dt = TatRes.filter(d=> d.asset_typeId ==='Unallocated');
                tat = (dt.length > 0 ) ? dt[0].tat : 0;
                res[key].overDueStatus = (res[key].duration > tat) ? true : false;
              }
             } else if(!!res[key].presetName && res[key].presetName.indexOf('Created Image') > -1){
              res[key].workflow = 'Created Image';
              let  dt = TatRes.filter(d=> d.asset_typeId ===res[key].workflow)
              tat = (dt.length > 0 ) ? dt[0].tat : 0;
              res[key].overDueStatus = (res[key].duration > tat) ? true : false;
             } else if(!!res[key].presetName && res[key].presetName.indexOf('Shutterstock Shutterstock') > -1){
              res[key].workflow = 'Shutterstock';
              let  dt = TatRes.filter(d=> d.asset_typeId ===res[key].workflow)
              tat = (dt.length > 0 ) ? dt[0].tat : 0;
              res[key].overDueStatus = (res[key].duration > tat) ? true : false;
              res[key].overDueTat = tat;
             } else if(!!res[key].presetName && res[key].presetName.indexOf('Clip Art') > -1){
              res[key].workflow = 'Clip Art';
              let  dt = TatRes.filter(d=> d.asset_typeId ===res[key].workflow)
              tat = (dt.length > 0 ) ? dt[0].tat : 0;
              res[key].overDueStatus = (res[key].duration > tat) ? true : false;
             } else if(!!res[key].presetName && res[key].presetName.indexOf('Photograph') > -1){
              res[key].workflow = 'Photograph';
              let  dt = TatRes.filter(d=> d.asset_typeId === 'Unallocated')
              tat = (dt.length > 0 ) ? dt[0].tat : 0;
              res[key].overDueStatus = (res[key].duration > tat) ? true : false;
             }  else {
              res[key].workflow = 'Other';
              let  dt = TatRes.filter(d=> d.asset_typeId === 'Unallocated')
              tat = (dt.length > 0 ) ? dt[0].tat : 0;
              res[key].overDueStatus = (res[key].duration > tat) ? true : false;
             }
             res[key].overDueTat = tat;
             res[key].campaignName = getCampaignName(res[key].campaignID);
             res[key].grade = getGradeName(res[key])
             res[key].module = getModuleName(res[key]);
          }
          permissionResponce = res;
        }).catch((Err)=>{
          console.log("Error in permission data", Err);
        }); 
      
  let campaignIDDt = [];
  
  await Mdb.bynder_jobs.aggregate(
    [
      { $match: { $and: serchFilterUnder } },
      {"$group" : {_id: { "campaignID":"$campaignID", "status":"$job_active_stage.status"},  count:{$sum:1} } }]
    ).then((docs)=>{
    campaignIDDt = docs;
    var data={ GraphCreatedJobs: resultData, jobsStatus: [], campaignIDDt: campaignIDDt, permissionResponce:permissionResponce , TatRes: TatRes};
    res.send(data);
  }).catch((Err)=>{
    console.log("Error in groops");
  });
});
function getCampaignName(campaignID){
  let d = scoreCardGbdt.campaigns.filter(d=> d.ID== campaignID);
  return (d.length > 0)? d[0].name : '';
}
function getGradeName(dt) {
  let res = '';
  if(!!dt.jobMetaproperties && !!dt.jobMetaproperties['c0ac0a86e65f4f7ebd88dbd7e77965ef'] && dt.jobMetaproperties['c0ac0a86e65f4f7ebd88dbd7e77965ef']!=''){
    let d = scoreCardGbdt.grades.filter(d=> d.id == dt.jobMetaproperties['c0ac0a86e65f4f7ebd88dbd7e77965ef']);
    res = (d.length > 0) ? d[0].value: '';
  }
  return res;
}
function getModuleName(dt) {
  let res = '';
  if(!!dt.jobMetaproperties && !!dt.jobMetaproperties['7388493928bc4a9aa57ca65306ed1579'] && dt.jobMetaproperties['7388493928bc4a9aa57ca65306ed1579']!=''){
    let d = scoreCardGbdt.modules.filter(d=> d.id == dt.jobMetaproperties['7388493928bc4a9aa57ca65306ed1579']);
    res = (d.length > 0) ? d[0].value: '';
  }
  return res;
}
//scorecarddata
postRoutes.route('/scorecarddata', checkToken.checkToken).post(function (req, res) {
  console.log("Action scorecarddata");
  let workflowPreset="", compaignId ="",jobType="",
   grade="", modules="", startDateRange="", endDateRange="", currentStatus=[], jobTypeTemp="";
     if(req.body.workflowPreset){ workflowPreset=req.body.workflowPreset; }
     if(req.body.compaignId){ compaignId=req.body.compaignId; }
     if(req.body.jobType){ jobType=req.body.jobType.split("-").join(""); jobTypeTemp=req.body.jobType; }
     if(req.body.grade){ grade=req.body.grade.split("-").join(""); }
     if(req.body.modules){ modules=req.body.modules.split("-").join(""); }
     if(req.body.startDateRange){ startDateRange=req.body.startDateRange; }
     if(req.body.endDateRange){ endDateRange=req.body.endDateRange; }
     if(req.body.currentStatus){ currentStatus=req.body.currentStatus; }
     var frmDate, toDate, dt, isOverdue;
     if(!!req.body.currentStatus ){
      currentStatus=req.body.currentStatus.split(',');
      var neWcurrentStatus=[]; 
      if(currentStatus.length > 0 ){
        for(let temp=0; temp < currentStatus.length; temp++){
          if( currentStatus[temp] != 'Overdue'){
            neWcurrentStatus.push( currentStatus[temp] );
          }
          if( currentStatus[temp] == 'Overdue'){
            isOverdue=true; 
          }
          if( currentStatus.indexOf('Overdue')>-1 &&   currentStatus.indexOf('Approved') == -1 ){
            neWcurrentStatus.push("Active");
            neWcurrentStatus.push("NeedsChanges");
          }
        }
      }
      currentStatus=neWcurrentStatus;
    }
    console.log("mmmmm=======>",workflowPreset=="" ,compaignId=="", jobType=="" ,grade=="",modules=="", currentStatus.length==0 ,startDateRange=="" , endDateRange=="" );
    if(workflowPreset=="" && compaignId=="" && jobType=="" && grade==""&&modules==""&& currentStatus.length==0 &&startDateRange=="" && endDateRange==""){
        currentStatus.push("Active");
        console.log("Without-filter");
    }
    let Searchcriteria=[];
      if(workflowPreset){ Searchcriteria.push( {"presetName": {"$regex":new RegExp(".*"+workflowPreset+".*") }  } ); }
      if(jobType && jobType=="Unallocated"){  Searchcriteria.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": {"$exists":false} });  }
      else if(jobType){  Searchcriteria.push({ "jobMetaproperties.262f92ed59b14c3aa74d6877d7f8ba4c": jobType });  }
      if(grade){ Searchcriteria.push({ "jobMetaproperties.c0ac0a86e65f4f7ebd88dbd7e77965ef": grade }); }
      if(modules){ Searchcriteria.push({ "jobMetaproperties.7388493928bc4a9aa57ca65306ed1579": modules });}
      if(currentStatus && currentStatus.length >0 ){ 
        Searchcriteria.push({ "job_active_stage.status":{'$in': currentStatus }}); 
      }
      //change Date range related filters
      if(startDateRange && startDateRange.indexOf(" - ") != -1){
        dt= startDateRange.split(" - ");
        frmDate=dt[0], toDate=dt[1];
        Searchcriteria.push( {"dateCreated":{"$gte" : new Date(frmDate) }}, { "dateCreated":{"$lte" : new Date(toDate) }} );
      }else if(endDateRange!="" && endDateRange.indexOf(" - ") != -1){
        dt= endDateRange.split(" - ");
        frmDate=dt[0], toDate=dt[1];
        Searchcriteria.push( {"job_date_finished":{"$gte" : new Date(frmDate) }}, { "job_date_finished":{"$lte" : new Date(toDate) }} );
      }
      // if(startDate){
      //   Searchcriteria.push({ "dateCreated": {$gte: new Date(startDate)} });
      // }
      // if(endDate){
      //   Searchcriteria.push({ "job_date_finished": {$lte: new Date(endDate) } });
      // }
      let pipeline=[];
      if(compaignId){  pipeline.push( {"$match":{"campaignID":{"$eq": compaignId }}} );  }
      pipeline.push({"$project":{
         "presetName":1,"campaignID":1,"id":1,"jobMetaproperties":1,"name":1,
         "job_duration":1,"job_date_finished":1, "job_key":1, "batch":1, "topic":1,
         "dateCreated":1,"job_active_stage":1,"presetID":1,"createdByID":1,"campaignID":1,"jobID":1,"Preset_Stages":1,
        "CalDuration":{"$cond":{"if":{"$eq":["$job_date_finished",""]},
        "then":{"$divide":[{"$subtract":[ new Date(),"$dateCreated"]},86400000]},
        "else":{"$cond":{"if":{"$eq":["$job_date_finished",null]},
        "then":{"$divide":[{"$subtract":[ new Date(),"$dateCreated"]},86400000]},
        "else":{"$divide":[{"$subtract":["$job_date_finished","$dateCreated"]},86400000]}}}}}}});
      pipeline.push({"$lookup":{"localField":"campaignID","from":"campaign","foreignField":"ID","as":"joincollection"}});
      // if(workflowPreset){
      //   pipeline.push({"$lookup":{"localField":"presetID","from":"job_presets","foreignField":"ID","as":"joincollection1"}});
      // }
      let forOverDueQuery=Searchcriteria;
        var TatQuery={};
         if(isOverdue){
           if(workflowPreset=="Permission"){
             TatQuery={ asset_type: jobTypeTemp };
           }else{
             TatQuery={ asset_type: workflowPreset };
           }
         }
       console.log("TatQuery::====>", TatQuery);
       Mdb.overdue_jobs.find(TatQuery).then((resTat)=>{
         var TatDays=0;
         if(resTat.length ==1 && isOverdue){
          TatDays=resTat[0].tat;
          Searchcriteria.push({ CalDuration: { $gte: TatDays } });
         }
      if(Searchcriteria.length > 0){
        Searchcriteria =  {$and: Searchcriteria };
        pipeline.push(  { $match: Searchcriteria });
        //pipeline.push(Searchcriteria );
      }
      
      pipeline.push( {"$group" : {_id: {
         "campaignID":"$campaignID" , "compName":"$joincollection.name", 
          "status":"$job_active_stage.status"   },  count:{$sum:1} } } );
         console.log('\x1b[31m',"All count of Query ===>:", JSON.stringify(pipeline));
         
         Mdb.bynder_jobs.aggregate( pipeline, function (err, result) {
          if (err) { console.log(err); next(err);} else {
            console.log("\n\n All count of Query data length :", result.length);
            let dumpCampIds=[];
            for (var keys; keys< result.length; keys++) {
              if(dumpCampIds.indexOf(result[keys]._id.campaignID) != -1){
                dumpCampIds.push(result[keys]._id.campaignID);
              }
            }
           var dataResult={
             chartData1and2: result
           };
           res.send(dataResult);
          }
        });
 
       }).catch((Err)=>{
         console.log("Tat Query Error :==>", Err);
        });
});
//jobsbyids

postRoutes.route('/jobsbyids', checkToken.checkToken).post(function (req, res) {
  console.log("Action jobsbyids");
  
  if( !!req.body.ids && req.body.ids.split(",").length > 1 ) {
    console.log(req.body.ids.split(",").length);
    Mdb.bynder_jobs.find({ id: { $in: req.body.ids.split(",") }}).then(data=>{
      res.send(data)
    });
  } else {
    let data = [];
    res.send(data);
  }
  
});
postRoutes.route('/dsmsummary', checkToken.checkToken).post(function (req, res) {
  console.log("Action dsmsummary");
  Mdb.bynder_jobs.find({artTeamStatus: 'WIP'}).then(data=>{
    let Meta= new Metadt()
    Meta.iniMeta(WorkFlowJobsMetaData);
    Meta.initAssetMeta(GCurriculaWIP);
    Meta.PrintAssetMeta(GPrintReady);
    console.log(data.length);
    let dataResult = [];
    for(dtkey in data){
      var objData = data[dtkey].toObject();
      if(!!data[dtkey].jobMetaproperties){
        Meta.getInitDataSet(data[dtkey]);
        let Mdt= Meta.getSMeat();
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
        objData.batch        = objData.batch | '';
        objData.gradeID      =   Mdt.grade;
        objData.grade        =   Mdt.gradeVal;
        objData.moduleID     =   Mdt.module;
        objData.module       =   Mdt.moduleVal;
        objData.batchCDate        =  (objData.batchCDate!="" && typeof objData.batchCDate != "undefined")? moment(objData.batchCDate).format('YYYY-MM-DD'):'';
        objData.receiveddate      =  (objData.receiveddate!="" && typeof objData.receiveddate != "undefined")? moment(objData.receiveddate).format('YYYY-MM-DD'):'';
        objData.mpsDueDate        =  (objData.mpsDueDate!="" && typeof objData.mpsDueDate != "undefined")? moment(objData.mpsDueDate).format('YYYY-MM-DD'):'';
        objData.artTeamPriority   =   Meta.getTeamPriority(objData);
        objData.artTeamStatus     =   Meta.getTeamStatus(objData);
      }
      dataResult.push(objData);
    }
    res.send(dataResult);
  })
});
//apiperformance
postRoutes.route('/apiperformance', checkToken.checkToken).post(function (req, res) {
  console.log("Action apiperformance");
  const myProm1 = new Promise(function(resolve, reject) {
    let q = { 
      $group: {
        _id : '$apiTaskName',
        id: { $last: '$_id' },
        apiTaskName : { $last: '$apiTaskName' },
        process : { $last: '$process' },
        dataProcessed : { $last: '$dataProcessed' },
        APISendInfo : { $last: '$APISendInfo' },
        responce : { $last: '$responce' },
        inserdedTime : { $last: '$inserdedTime' },
        isError : { $last: '$isError' },
        count : { $sum: 1 }
       }
    };
    Mdb.ApiPerformance.aggregate(q).then((data)=>{
      resolve(data);
    }).catch(Error=>{
      console.log("Error:",Error);
      reject( new Error('REJECTError:', Error));
    })
  });
  myProm1.then(data => {
    Mdb.ApiPerformance.find({}).sort({"_id":-1}).limit(1000).then((result)=>{
      res.send({ data: data, result: result});
    });
  })
  /*
  Mdb.ApiPerformance.find({}).sort({"_id":1}).limit(100).then((data)=>{
    res.send(data);
  }).catch(Error=>{
    console.log("Error:",Error);
    
  })
  */

});
//var csv      = require('csv-express');

postRoutes.route('/exporttocsv', checkToken.checkToken).post( (req, res) => {
  console.log("Action : exporttocsv");
  //res.send("data testing");
  Mdb.bynder_jobs.find({},{ID:1,job_key:1}).sort({_id:-1}).then((jobsData) => {
    res.send(jobsData);
    /*
    let filename='Bynder_jobs.csv';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader("Content-Disposition", 'attachment; filename='+filename);
      res.csv(jobsData.map(d => d._doc), true);
      */
  }).catch(Error =>{
    console.log("Error in Data:", Error);
  });
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
function dateDiffinDurationStage(d2, d1){
  try{
  if(typeof d1 == "string"){ d1= new Date(d1);}
  if(typeof d2 == "string"){ d2= new Date(d2);}
  var timeDiff = Math.abs(d2.getTime() - d1.getTime());
  return parseFloat(timeDiff/86400000).toFixed(1);
  }catch(e){
    console.log("time Errpr:", e)
  }
}

module.exports = postRoutes;