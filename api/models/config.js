var appConfig = { 
   request_data :{
    url: `` ,
    method: 'GET',
    data: { status: 'Hello Ladies + Gentlemen, a signed OAuth request!'  }
  },consumer: {
    key: '71BEFFCC-2CC9-476D-93A8A79BB92BD87B',
    secret: 'a8de7d89165b8234405b35c83553a318'
  },token : {
    key: 'B2A7A47A-66B0-4880-A03FB70A25683DA1',
    secret: '563e1def9f296439af4906b0a60bd7b4'
  },
  apiAction:  [
      { action: 'jobsbyID', URL:`https://greatminds.getbynder.com/api/workflow/jobs/`, extraConfog: true, other:``},
      { action: 'jobsbycampaignid', URL:`https://greatminds.getbynder.com/api/workflow/campaigns/`, extraConfog: true, other:`/jobs`},
      { action: 'getPresetByJobs', URL:'https://greatminds.getbynder.com/api/workflow/presets/job/', extraConfog: true, other:''},
      { action: 'users', URL:'https://greatminds.getbynder.com/api/workflow/users/', extraConfog: false, other:''},
      { action: 'metapropertiesbyid', URL:'https://greatminds.getbynder.com/api/workflow/metaproperties/', extraConfog: true, other:''},
      { action: 'getjobsmeta', URL:'https://greatminds.getbynder.com/api/workflow/metaproperties/', extraConfog: false, other:''},
      { action: 'getAssets', URL:'https://greatminds.getbynder.com/api/v4/media/', extraConfog: false, other:''},
      { action: 'getAssetsProp', URL:'https://greatminds.getbynder.com/api/v4/metaproperties/', extraConfog: false, other:''},
      { action: 'updateAsset',URL:'https://greatminds.getbynder.com/api/v4/media/', extraConfog: true, other:''},
      { action: 'test4', URL:'', extraConfog: false, other:''}
],
APIconfig: [
    {ID:1, name:'Jobs sync', trigger: 'Same day in every 3 mins', addedm: 3},
    {ID:2, name:'Presets sync', trigger: 'Same day in every 30 mins', addedm: 30},
    {ID:1, trigger: 'Same day in every 30 mins', addedm: 30},
    {ID:1, trigger: 'Same day in every 3 mins', addedm: 3},
    {ID:1, trigger: 'Same day in every 3 mins', addedm: 3},
],
campaignsNANID: [ 'f2e038c4-9191-4480-a55e-2dc92d3f52e7', '3b6d57c7-55c1-489b-aeff-b81b7aaff1ef', '0ad18ec8-8648-4d15-8681-2c3f4e0ee914', 'bb6f3943-5a47-49f0-ab82-c6278d1dad29'],
getApiConfigByID( id ){
    return this.APIconfig.find(d => d.ID == id );
}
, getActionInfo (name, id) { // same as "sayHi: function()"
        var data=this.apiAction.filter(function(data) {
            return data.action == name;
        }); 
        //console.log("data return is",data, "extraConfig is", data[0].extraConfog, "id is ", id ); 
        if(data[0].extraConfog==true){
            this.request_data.url= data[0].URL + id + data[0].other;
         }else{
            this.request_data.url=data[0].URL;
         }
        // console.log(this.request_data);
        return this.request_data;
    },
    getConsumer(){
        return this.consumer;
    },
    getConsumer() {
        return this.consumer;
    },
    getToken(){
        return this.token;
    },
    getNotification(){
        // demo
        //return 'snehasis.parida@mps-in.com,ajeet.mishra@mpslimited.com';
        // Live 
        return 'abbi.hoerst@greatminds.org,Nathan.Hall@greatminds.org,ajeet.mishra@mpslimited.com';
    },
    getNotificationSub(){
        // demo
        //return 'Tag pushing activity status report @143 Demo';
        // Live 
        return 'Tag pushing activity status report Live';
    }
    
};
module.exports = appConfig;

//appConfig.sayHi(111);

/*, getRequestData : function(name, para){
    console.log(name, para);
        // this.request_data.url=this.getAction();
        // var marvelHeroes =  this.request_data.filter(function(data) {
        //     return data.action == name;
        // });
        // console.log(marvelHeroes);
        
    }
*/