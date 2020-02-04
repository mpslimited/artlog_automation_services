const express = require('express');
const async = require('async');
const await = require('await');
const poRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const fetch = require('node-fetch');
let mysql  = require('mysql');
var slashes = require('slashes');
let config = require('./../config/Mysqlconfig');
let Mdb = require('../models/post.model');
let AssetTags = require("../models/AssetTags");
let Metadt = require("../models/Metadt");
let appConfig = require('../models/config');
let JobProcess = require('../models/JobProcess');

var token=appConfig.getToken();

const oauth = OAuth({
  consumer: { key: '71BEFFCC-2CC9-476D-93A8A79BB92BD87B', secret: 'a8de7d89165b8234405b35c83553a318' },
  signature_method: 'HMAC-SHA1', hash_function (base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});
let UpdatingRequest= new Array(
 // { ID: 'ee19e14d-bdb9-407b-ab56-17292d585787' , ExeOrder: false, name:"Marketing"}, 
  { ID: '12087c22-260a-4fb8-834e-d231c4c277a3' , ExeOrder: true , name: 'Geodes Readable Library'}, 
  { ID: '3d39f53b-3123-4eb1-a3f1-274cd4160efe' , ExeOrder: true, name :"Wit & Wisdom"}, 
  { ID: '9618db88-fc78-47a5-9916-e864e696ae11' , ExeOrder: true, name: 'Eureka Math 2'}, 
  { ID: '4924dc05-03c5-4086-90ce-41d8bf501684' , ExeOrder: true, name: "PhD Science"}, 
);

poRoutes.route('/synccampaignId').post(function (req, res) {
  var hostname="http://localhost:3000";
  for( let i=0; i<  UpdatingRequest.length ; i++){
    if(UpdatingRequest[i].ExeOrder==true){
      var targetURL= hostname+"/dataApi/jobsbycampaignid/"+ UpdatingRequest[i].ID;
          excuteURL( targetURL );
          res.send(UpdatingRequest[i]);
          UpdatingRequest[i].ExeOrder=false;
          break;
    }
  }
  if(UpdatingRequest.filter(d=> d.ExeOrder === false).length ==0){
    UpdatingRequest = UpdatingRequest.map(d=> ({ ID : d.ID, ExeOrder : true, name : d.name }));
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

poRoutes.route('/jobsbycampaignid/:campaignId').post( function (req, res) {
  let campaignId = req.params.campaignId;
  console.log("ACT: jobsbycampaignid and :", campaignId );
  
  Mdb.campaign.find( { 'ID': campaignId}).then(redt=>{
    if(redt.length > 0 ){
      let JProcess = new JobProcess(Mdb);
      let ActivePage = redt[0].activePage |0;
      let NeedChagnePage = redt[0].needchangePage |0;
      let tillPage = 0;
      if( ActivePage >= NeedChagnePage ){ tillPage = ActivePage } else { tillPage = NeedChagnePage; }
      if(tillPage ==0) { tillPage =12; }

      var token=appConfig.getToken(); 
      let i=1;

     let timOut = setInterval( () =>{
        var request_data=appConfig.getActionInfo("jobsbycampaignid", campaignId);
        request_data.data= { limit: '1000', page: i  };
        console.log("data", request_data.url,  request_data.data);
        JProcess.RequestProcessJobs(request_data, oauth, token);
        if(i == tillPage){ clearInterval(timOut); }
        i++;
      } , 3000*20 )

    }
  })
});




module.exports = poRoutes;