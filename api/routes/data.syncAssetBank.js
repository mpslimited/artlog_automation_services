const express = require('express');
const postRoutes = express.Router();
const request = require('request');
const OAuth = require('oauth-1.0a');
const crypto = require('crypto');
const await = require("await");
const async = require("async");
let Mdb = require('../models/post.model');
let AssetTags = require("../models/AssetTags");
let Metadt = require("../models/Metadt");
let appConfig = require('../models/config');

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
              MetaDatas[temp].tempId= MetaDatas[temp].ID.split('-').join('');
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
    { tagreaded: true }
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
  console.log("Action assetJobs for Tagreader ")
  Mdb.asset.find(
    //{ "tags":"SC_0402TE1_L10_L11"}
    //{'id':'4A86BF38-A7D7-4893-ABCC121FC58FC61D'}
    //{'id':'B1874BF8-165D-42F4-95881737D7487D9E'}
    //{'id':'90A1FE91-2C56-41EC-88EE1075D6EB7D49'}
    { tagreaded: false  }
  ).limit(200).then((data) => {
    console.log("reader working AT:", data.length, " Jobs");
    for (let i = 0; i < data.length; i++) {
      console.log("reading progress AT:", data[i].id);
      let asset = new AssetTags(data[i]);
      Mdb.asset.updateOne({ id: data[i].id }, {
        $set: { tagReader: asset.getJobs(), tagreaded: true }
      }).then(dt => {
        console.log("asset tagReader updated :", data[i].id);
      }).catch((Err) => {
        console.log("Error In Updating asset", data[i].id);
      });
    }
    res.send(data.length, " jobs updated");
  }).catch((Err) => {
    console.log("Getting Jobs have error:", Err);
  });
});
// 
postRoutes.route('/assetSynced/').get(function (req, res) {
  console.log("ACTION assetSynced ")
  var request_data = appConfig.getActionInfo("getAssets");
  var token = appConfig.getToken();
  request_data.data = {};
  request_data.url = request_data.url + "?limit=0&page=1&total=1";

  let response= request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  },function (error, response, body) {
    if(!error){
      try{
        var data = JSON.parse(response.body);
        Mdb.asset.find().count().then(totalDB=>{
          if(data.total.count != totalDB){
            let page, limit=500;
            let Totalpage=parseInt(data.total.count/limit);
            if(data.total.count%limit){
              Totalpage++;
            }
            page= parseInt(totalDB/limit || 1) ;
            if((page!=1) &&(totalDB%limit > 0 || page < Totalpage)  ){
              page++;
            }
            do{
              console.log("Init page:", page)
              excuteURL("http://localhost:3000/sync/getAssets/"+page)
              if(!( page <  Totalpage)){
                res.send({data:"jobs merged",d: new Date()});
              }
              page++;
            }
            while( page <  Totalpage)
            
          }else{
            res.send({data:"No more changes found ",d: new Date()});
          }
        }).catch(Err=>{
          console.log("Error in Data: ", Err);
        })
      }
      catch(e){
        console.log("Error generated in assetSynced");
      }
    }
  })
});

// getting assetbank data using Limit
postRoutes.route('/getAssets/:page').get(function (req, res) {
  console.log("Requesting ");
  let page = req.params.page;
  var request_data = appConfig.getActionInfo("getAssets");
  var token = appConfig.getToken();
  request_data.data = {}; //={ "limit": 5, page: 1 }
  request_data.url = request_data.url + "?limit=500&page=" + page; 
  request({
    url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
  }, function (error, response, body) {
    if (error) {
      console.log("GET Asset API Error");
    } else {
      console.log("Res getting");
      try {
        var data = JSON.parse(response.body);
        console.log("API responded :", data.length);
        let Update = 0, Saved = 0;
        for (let temp = 0; temp < data.length; temp++) {
          Mdb.asset.find({ id: data[temp].id }).then((dt) => {
            if (dt.length > 0) {
              console.log("Jobs Updation case")
            } else {
              data[temp].tagreaded=false;
              let asset = new Mdb.asset(data[temp]);
              asset.save().then((rs) => {
                console.log("saved id", rs.id);
              }).catch((Err) => console.log("Asset Save ERROR:", Err));
            }
            if (temp == dt.length - 1) {
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
// updating Missing Jobs MetaProperty 
postRoutes.route('/updatePresets').post(function (req, res) {
  Mdb.bynder_jobs.find({ presetName: { $exists: false } }).then(dt => {
    if (dt.length > 0) {
      let persetsIds = [...new Set(dt.map(d => d.presetID))];
      // console.log("Data ", persetsIds);
      for (let t = 0; t < persetsIds.length; t++) {
        if (!!persetsIds[t]) {
          console.log("finding preset id:", persetsIds[t]);
          var token = appConfig.getToken();
          var request_data = appConfig.getActionInfo("getPresetByJobs", persetsIds[t]);
          request({
            url: request_data.url, method: request_data.method, form: request_data.data, headers: oauth.toHeader(oauth.authorize(request_data, token))
          }, function (error, response, body) {
            if (response.statusCode == 200) {
              console.log(response.body);
              let persetDt = JSON.parse(response.body);
              let where = { presetID: persetDt.preset.ID, presetName: { $exists: false } };
              Mdb.bynder_jobs.updateMany(where, {
                $set: {
                  presetName: persetDt.preset.name,
                  presetstages: persetDt.preset.presetstages
                }
              }).then(rs => {
                console.log('data updated', rs)
              }).catch(ee => { console.log('Error in ', ee) });
            }
          });
        }
      }
    }
  }).catch(Err => console.log('Error in finding data', Err))
})
function  excuteURL(URLexc){
  console.log("\n\n excuteURL",URLexc );
  try{
    var options = { method: 'GET', url: URLexc, headers:{ 'Cache-Control': 'no-cache' }};
    request(options,  function (error, response, body) {
      if (error) //throw new Error(error);
      console.log(error);
    });
  }catch(Err){
    console.log("Error:", Err);
  }
}
module.exports = postRoutes;