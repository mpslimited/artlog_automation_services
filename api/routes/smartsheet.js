const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const await = require("await");
const async = require("async");
let Metadt =require("../models/Metadt");
let Mdb = require('../models/post.model');
//let appConfig=require('./config');
// Metadt= new Metadt('dddd');
// Metadt.print("hello this is metdt class");

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
postRoutes.route('/dataInit').post(function (req, res) {  
  res.send({ grade: GGrades, module: GModules, artcomplex: GArtComplex, artAssign: GArtAssign, risk: GRisk, impact: GImpact});
});
postRoutes.route('/getUserInfo').get(function (req, res) {  
      var options = { method: 'POST',
      url: 'https://greatmindsdemo.mpstechnologies.com/GreatMinds/admin/getLoggedInUserDeatils',
      headers: 
      { 'cache-control': 'no-cache',
        Connection: 'keep-alive',
        'Content-Length': '0',
        Cookie: 'JSESSIONID=D0225FD8EAFDE01880B0D9492D27E556',
        'Accept-Encoding': 'gzip, deflate',
        Host: 'greatmindsdemo.mpstechnologies.com',
        'Postman-Token': '253922e1-1531-47b2-b9d7-5ec943db1a91,24e7633e-1344-4d5d-a7d2-1a73fd497799',
        'Cache-Control': 'no-cache',
         Accept: '*/*',
        'User-Agent': 'PostmanRuntime/7.17.1' } };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      if(body=""){
        res.send(body)
      }else{
        res.send({'msg':'NOTFOUND'})
      }
      console.log(body);
    });

  //res.send({ grade: GGrades, module: GModules, artcomplex: GArtComplex, artAssign: GArtAssign, risk: GRisk, impact: GImpact});
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
postRoutes.route('/addnewjobs').post(function (req, res) {
    console.log("ACTION : addnewjobs REQ==>",req.body);
    //res.send(req.body);
    if(req.body.jobAdd){
      let rqdata = JSON.parse(req.body.jobAdd);
      if(rqdata.length > 0){
        // for( let d of rqdata){

        // }
        let allJobs=rqdata.map(d => d.jobkey);
        let QueryForC={job_key : {$in : allJobs },  duplicate : {$exists: false } };
        Mdb.bynder_jobs.find(QueryForC ).then((data)=>{
          if(data.length > 0){
           var InsData= data.map(d=> ({id:d.id, name: d.name, Preset_Stages : d.Preset_Stages, campaignID: d.campaignID, dateCreated:d.dateCreated, dateModified:d.dateModified, description:d.description, id: d.id, jobID: d.jobID, autoStage: d.autoStage,  jobMetaproperties: d.jobMetaproperties, job_active_stage:d.job_active_stage, job_date_finished: d.job_date_finished , job_key: d.job_key, presetName:d.presetName 
              , duplicate: true
            }));
            resultedDt=[];
            for(let i in  InsData ){
             let changes= rqdata.filter(d=> d.jobkey== InsData[i].job_key);
              // grade : "c0ac0a86e65f4f7ebd88dbd7e77965ef"  Module: 7388493928bc4a9aa57ca65306ed1579"
              for( let ch of changes){
                  if(ch.grade.value)
                  InsData[i].jobMetaproperties['c0ac0a86e65f4f7ebd88dbd7e77965ef']=ch.grade.value;
                  if(ch.grade.module)
                  InsData[i].jobMetaproperties['7388493928bc4a9aa57ca65306ed1579']=ch.module.value;
                  
                  let saveBynderJobs= new Mdb.bynder_jobs(InsData[i]);
                  let Meta= new Metadt(InsData[i]);
                  Meta.iniMeta(WorkFlowJobsMetaData);
                  let Mdt= Meta.getMeta();
                  InsData[i].lession=Mdt.lession;
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
                  saveBynderJobs.save().then((rs)=>{
                  console.log("value saved sucessfully ", rs); 
                  }).catch(Err=>{
                    console.log("ERROR in SAVED: ERR:", Err);
                  })
              }
              
            }
            res.send( resultedDt );
          }
        }).catch((Err)=>{
          console.log("Finding ERROR:", Err);
        })
      }
    }else{
      res.send("Not Saved Msg");
    }
});
postRoutes.route('/artlogdata').post(function (req, res) {
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
    if(!!req.body.workflow && req.body.workflow!=""){
      $and.push(
        {"presetName": /.*Created Image*./}
      ) 
    }
    if(req.body.status && req.body.status!=""){
      let st=req.body.status.split(",");
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
    if(!!req.body.resTeam && req.body.resTeam!=""){
      //Pending Now 
      // $and.push(
      //   {"job_active_stage.status":{"$in": req.body.status } }
      // ) 
    }
    
    let q={"job_active_stage.status": "Active"};
    if(!!req.body.jobkey && req.body.jobkey!=""){
      q={"job_key": req.body.jobkey }
    }else if($and.length >0){
       q= { $and};
    } 
    let fields={ presetName:1, Preset_Stages:1, id:1, name:1, description:1, job_active_stage:1, jobMetaproperties:1, jobID:1, job_key:1, dateCreated:1, job_date_finished:1};
    console.log("Calling artlogdata Data " , JSON.stringify(q));

    Mdb.bynder_jobs.find(q, fields ).limit(50).then((data)=>{
    let dataResult=[];

    for(let  dtkey in data){
      var objData = data[dtkey].toObject();
      //console.log("Object VAlue:", objData);
      
      if(!!data[dtkey].jobMetaproperties){
        let Meta= new Metadt(data[dtkey])
        Meta.iniMeta(WorkFlowJobsMetaData);
        let Mdt= Meta.getMeta();
        //console.log("Metadata", data[dtkey].jobMetaproperties);
        let metaObj=Object.entries(data[dtkey].jobMetaproperties);
        if(data[dtkey].Preset_Stages.length > 0 ){
         let lastChangeCreated= data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].start_date;
         let lastChangeComplated=(!!data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished)?
          data[dtkey].Preset_Stages[data[dtkey].Preset_Stages.length -1].job_date_finished: new Date();
          objData.lastage=dateDiff(lastChangeCreated, lastChangeComplated);
        }
        var dateCreatedJob = Mdt.dateCreatedM;
        if(data[dtkey].job_date_finished===null && data[dtkey].job_active_stage.status!="Approved"){
          data[dtkey].job_date_finished=new Date().toISOString();
        }
        objData.cstage=""; objData.workflow="";
        if(objData.presetName !=""){
          if(objData.presetName.indexOf('Clip Art')!= -1 ){
            objData.workflow="Clip Art";
          }else if(objData.presetName.indexOf('Created Image')!= -1 ){
            objData.workflow="Created Image";
          }else if(objData.presetName.indexOf('Permission')!= -1 ){
            objData.workflow="Permission";
          }else if(objData.presetName.indexOf('Shutterstock')!= -1 ){
            objData.workflow="Shutterstock";
          }
        }
        if(objData.Preset_Stages.length > 0){
          // IT Should be another that we can not captuchred 
          let ob=objData.Preset_Stages[ objData.Preset_Stages.length-1 ];
          if(ob.hasOwnProperty('name')){
            objData.cstage=ob.name;
          }else if(ob.hasOwnProperty('StageNames')){
            objData.cstage=ob.StageNames;
          }
        }
         objData.totalage=dateDiff(dateCreatedJob, data[dtkey].job_date_finished);
         objData.lession      =   Mdt.lession;
         objData.component    =   Mdt.component; 
         objData.tags         =   Mdt.tag; 
         objData.gradeID      =   Mdt.grade;
         objData.grade        =   Mdt.gradeVal;
         objData.moduleID     =   Mdt.module;
         objData.module       =   Mdt.moduleVal;
         objData.artcomplexID =   Mdb.artcomplex;
         objData.artcomplex   =   Mdb.artcomplexVal;
         objData.artassionID  =   Mdb.artassion;
         objData.artassion    =   Mdb.artassionVal;
         objData.riskID       =   Mdb.risk;
         objData.risk         =   Mdb.riskVal;
         objData.impactId     =   Mdb.impact;
         objData.impact       =   Mdb.impactVal;

        // objData.workflowMeta=WorkFlowJobsMetaData;

         
      }
      //console.log("Object Final VAlues: ==>", objData);
      dataResult.push(objData);
    }
     job_keys=dataResult.filter( (d)=> d.job_key!="" ).map(d=>d.job_key);
     GridFilters={ 
       lession: [...new Set(dataResult.filter( (v, i)=> !!v.lession ).map(d=>d.lession))],  //.filter((v,i) => grades.indexOf(v) === i),
       component: [...new Set(dataResult.filter( (d)=> !!d.component ).map(d=>d.component))],
       grade: [...new Set(dataResult.filter( (d)=> !!d.grade ).map(d=>d.grade))],
       module: [...new Set(dataResult.filter( (d)=> !!d.module ).map(d=>d.module))],
       artcomplex: [...new Set(dataResult.filter( (d)=> !!d.artcomplex ).map(d=>d.artcomplex))],
       artassion: [...new Set( dataResult.filter( (d)=> !!d.artassion ).map(d=>d.artassion))],
       risk: [...new Set(dataResult.filter( (d)=> !!d.risk ).map(d=>d.risk))],
       impact: [...new Set(dataResult.filter( (d)=> !!d.impact ).map(d=>d.impact))],
     };
     GridEditing={ 
      lession: [...new Set(dataResult.filter( (v, i)=> !!v.lession ).map(d=> d.lession))],  //.filter((v,i) => grades.indexOf(v) === i),
      component: [...new Set(dataResult.filter( (d)=> !!d.component ).map(d=>d.component))],
      grade: [...new Set(dataResult.filter( (d)=> !!d.grade ).map(d=>d.grade))],
      module: [...new Set(dataResult.filter( (d)=> !!d.module ).map(d=>d.module))],
      artcomplex: [...new Set(dataResult.filter( (d)=> !!d.artcomplex ).map(d=>d.artcomplex))],
      artassion: [...new Set( dataResult.filter( (d)=> !!d.artassion ).map(d=>d.artassion))],
      risk: [...new Set(dataResult.filter( (d)=> !!d.risk ).map(d=>d.risk))],
      impact: [...new Set(dataResult.filter( (d)=> !!d.impact ).map(d=>d.impact))],
    };
    GlobalDt={ grade: GGrades, module: GModules, artcomplex: GArtComplex, artAssign: GArtAssign, risk: GRisk, impact: GImpact}
     let assetQ={property_workflowjobkey: {
      $in:  job_keys 
      }};
     // console.log("Query of Assets: ", JSON.stringify(assetQ));
     //Mdb.asset.find({ assetQ }).then((data)=>{
      // console.log("total data is :", data.length);
      // console.log(data);
      // for(let atdt of dataResult){
      //   if(atdt.hasOwnProperty("job_key")){
      //     data.filter(df=> dt.)
      //   }
      // }
      let result={ artLogData : dataResult, GridFilters : GridFilters, GlobalDt: GlobalDt};
      res.send( result );
     //}).catch((Err)=> { console.log("Error in Finding asset:", Err)})
     
    }).catch((Err)=>console.log("Error in finder ERROR:", Err));
});


postRoutes.route('/checkLogin').get(function (req, res) {
  res.send("Testing checkLogin");
  // let noSql=[];
  // Mdb.bynder_jobs.find(noSql).limit(200).then((dt)=>{
  //   res.send(dt);
  // }).catch((Err)=>{
  //   console.log("art log select error:", Err);
  // });
});
// jobMetaproperties
function generateMetaColumans(data){

  return 
}
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