const express = require('express');
const rndRoute = express.Router();
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

rndRoute.route('/artlogdata', checkToken.checkToken).post(function (req, res) {
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
    console.log("Calling artlogdata Data rnd" , JSON.stringify(q), JSON.stringify(fields));
    // testing in Live Build with Pradeep Sir 
    //.skip(  parseInt(req.body.fromPage)).limit( parseInt(req.body.toPage) ).
    //.skip(2000) export dt
    let totalR = 0;
    Mdb.bynder_jobs.find(q).count().then(pages => {
        console.log( pages );
        totalR =pages;
    });
    Mdb.bynder_jobs.find( q ).sort({job_key:-1}).limit(100).then((data)=>{
        console.log("data" , data, totalR);
        let resData = {data: data, totalData: totalR } ;
        res.send(resData);
    }).catch((Err)=>
     console.log("Error in finder ERROR:", Err )
    );
});

module.exports = rndRoute;