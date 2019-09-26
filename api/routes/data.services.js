const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth   = require('oauth-1.0a');
const crypto  = require('crypto');
const await = require("await");
const async = require("async");
let Mdb = require('../models/post.model');
let appConfig=require('../models/config');

const oauth = OAuth({
  consumer: { key: '71BEFFCC-2CC9-476D-93A8A79BB92BD87B', secret: 'a8de7d89165b8234405b35c83553a318' },
  signature_method: 'HMAC-SHA1', hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});


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
  console.log("hitting getAssetsProp", id);

  var request_data=appConfig.getActionInfo("getAssetsProp");
  var token=appConfig.getToken();
  request_data.data={};
  console.log("request_data :1 ==>", request_data,"token=>",token);

  request({url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function(error, response, body) {
    console.log("RES getting")
    if(error){
      console.log("API ERROR:", error);
    }else{
      res.send(response.body);
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