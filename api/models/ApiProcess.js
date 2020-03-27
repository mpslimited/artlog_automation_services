const request = require('request');
let moment = require('moment');

class ApiProcess {
  constructor(db){
    this.Mdb = db;
    this.updatedPresetData = new Array();
    this.needUpdatePresetData = new Array();
    this.avoidJobsID=new Array("adf84a7b-64a3-4315-9713-fdb3f61f691f","156d2215-69bf-4800-aebd-91b80f342e57", "dcf9d435-5400-49e1-a204-4010f237a72c", "88de0eef-5a29-4c5b-adb1-1306f5bab783", "ce7c38df-51da-4045-92c8-1fc035fae8b8","08be44fa-5ca2-4def-b213-ff9f5ddf88fe","15379fb4-ded4-4a7b-8d5a-9eb1bc4b173b","2b293143-6b50-4075-aed9-2bc7c8144c9f","e7cc232e-6869-46fa-99bf-250c9334e019","89af2131-2527-4418-80c6-ad3cead118f9","74979e90-20af-40ef-b0d5-5cca1c936aad","b316c54a-8419-4df6-8de2-e0ffa4e6f120","91f3db11-1e0e-41ea-a974-c1d3bd562baa","42da2b82-9a1e-48b5-af73-5a16b035638e","ee305287-f0b1-48ff-ac14-7435dbf2cf4c", "a76e8939-becb-4e93-9724-47d8825d96bf","c7b51762-acf8-48ce-9e8f-9d09a2291f93","fe842b52-05cb-4201-bee4-3169fe02b7b4", "22d2e518-3597-4e07-94ed-18732c221690","2b8a742d-daca-4c4e-bb60-4c8f2620671f","55234d0a-c0aa-48e6-8374-b41429817138","5af4c49d-1ff0-46cc-904d-0f5f7600900e","97f1ebf4-d35f-46ab-a7c7-b719b39792b1","c284d58c-efea-4a1b-8d29-a674110681f5","e38c76bc-4f4a-421f-9c55-ece7092cf71d","20fb382d-961c-4765-9bfb-46b7d3a9c23e","30087be0-c060-45d7-9231-df75bb73b792","518feaf1-895c-4fcc-895e-d4fe22d3c9fb","37768508-e952-494e-ba15-dcb00b9f658f","5c33feb5-e4cf-4ba0-adb8-5771ab7156f1","498e05b0-6755-4d7d-b20e-0e8493090ad7","6ac76c04-41ff-4522-897f-f6bd379a35fa", "f5a1d57c-9c0a-4ab6-9b29-abd54acc9767","5237a18e-b994-4078-8da6-dbd04f45c053","6f075f28-b600-4246-8679-bc99f3b52d95","6ceee960-7cf5-4404-b03e-cda11e764313","87e7b625-aa80-45c4-bdb8-3d5ca89c632d","c85e4b0d-5855-4935-8710-f168dbfa6642", "c3825c47-fc8e-40f3-9921-d236bdfa9019","d0fb96c7-3081-4589-87a4-31a18b05a4dd","79d661a9-d32a-4885-a2e1-568fc435d890", "898c68ac-4d5d-47ee-abf5-fb0e65b0ad00", "e01974b9-5ef6-410c-9a5d-8727923dc773","d238a3a0-a46d-4955-9ca3-40dbe3a7d282","f6e3d02e-d8c6-4109-9089-599202688684", "0597919f-842d-4d50-b21c-0b7b8ffcc6ab","6ad45656-1ad0-4e6d-a8c3-617aff42cc9c","e356dcbb-1616-4943-955b-fc01fd836959","b4f59eb0-d916-4414-a707-fcc2382d2c12","96f3ca27-13fe-468b-b53b-cfb45a49dcae","b6f6e004-28dd-4967-b80e-5dcc879292be","4f38e28b-2ed8-4ca9-a71e-10544c42415d","4a33845f-78a8-44ab-9359-fea885cc5295", "8fcc8e3f-2f69-45d7-964d-06e2300b12cb","209b469e-5e87-4c02-8ee0-4f317fe20dac");
  }
  checkAvoideJobs( jobid ) {
    var cond = true;
    for(let ttemp=0; ttemp < this.avoidJobsID.length; ttemp++){ if(this.avoidJobsID[ttemp] == jobid ){ cond=false ; break; } }
    return cond;
  }
  updateHandler(docs, JobsResult ){
    //console.log("Datta is :", docs.length);
    let serDocs=docs[0];
    if(docs.length > 1){ 
      for( let anydt in docs){
        if(typeof anydt.duplicat != "undefined"){
          serDocs=docs[anydt];
        }
      }
    }
    if(!serDocs.job_date_finished){
      var PresetData=[];
      if(serDocs.hasOwnProperty("presetstages") ){
        PresetData=serDocs.presetstages;
      }else if(serDocs.joincollection.length >0){
        PresetData=serDocs.joincollection[0].presetstages;
      }
      var NewPreset_Stages=new Array();
        if(JobsResult.hasOwnProperty('job_active_stage') && serDocs.job_active_stage ){
          var currentStage=JobsResult.job_active_stage;
          var oldStage=serDocs.job_active_stage;
          //console.log( "Stage Positon moment :", currentStage.position != oldStage.position);
          if(currentStage.position != oldStage.position ){
            var OldPreset_Stages=serDocs.Preset_Stages;
              for(let num=0; num< OldPreset_Stages.length; num++){
                if(num==(OldPreset_Stages.length-1)){
                  //console.log("PresetData data value", PresetData);
                    var StageNames= PresetData.filter(data=>data.position==OldPreset_Stages[num].position);
                    OldPreset_Stages[num].StageNames=(StageNames.length >0)?StageNames[0].name:"";
                    OldPreset_Stages[num].job_date_finished=new Date();
                    OldPreset_Stages[num].accuracy=true;
                }
                NewPreset_Stages.push(OldPreset_Stages[num]);
            }
          }
          // current stage Name
          var StageNames= PresetData.filter(data=>data.position==JobsResult.job_active_stage.position);
          JobsResult.job_active_stage.StageNames=(StageNames.length >0)?StageNames[0].name:"";
          var Current_job_active_stage =JobsResult.job_active_stage ;
          Current_job_active_stage.start_date = new Date();
          NewPreset_Stages.push( Current_job_active_stage );
          if(NewPreset_Stages.length > serDocs.Preset_Stages.length){
            var $set={};
            if(NewPreset_Stages[0].hasOwnProperty("StageNames") && NewPreset_Stages[0].StageNames=="Complete Request Form"){
              $set.dateCreated=NewPreset_Stages[0].job_date_finished;
            }
            if(JobsResult.job_active_stage.hasOwnProperty('status') &&  JobsResult.job_active_stage.status=="Approved"){
              $set.job_date_finished=new Date();
            }
            if( typeof JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'] != "undefined"){
              $set.job_key=JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'];
            }
            
            // add Art Team Columns //
            if(serDocs.presetstages.length > 0) {
              let dtf= serDocs.presetstages.filter(d=> d.position == JobsResult.job_active_stage.position)
              let dtfPo = serDocs.presetstages.filter(d=> d.name == 'Designer Create Asset');
              let position=0;
              if(dtfPo.length > 0){
                position = dtfPo[0].position;
              }
              if(dtf.length > 0 ){
                let stageName = dtf[0].name || dtf[0].StageNames;
                if(stageName!="" && stageName.trim() == 'Designer Create Asset' ){
                  $set.receiveddate=new Date();
                  if(JobsResult.job_active_stage.status == 'Active' ) {
                    $set.mpsDueDate = moment().add(2, 'days').toISOString();
                  } else if(JobsResult.job_active_stage.status == 'NeedsChanges') {
                    $set.mpsDueDate = moment().add(1, 'days').toISOString();
                  }
                  $set.artTeamStatus ='WIP';
                  //$set.artTeamStatus ='Delivered';
                  //$set.artTeamStatus ='Overdue';
                }
                if(position >0 && position < dtf[0].position ){
                  $set.artTeamStatus ='Delivered';
                }
              }
            }
            /*
            receiveddate : '',
            mpsDueDate : '',
            artTeamStatus : '',
            artTeamPriority : '',
            //exceptionCategory : { type: String }, //User Input//
            //exceptoin :  { type: String }, //User Input//
              */
            $set.jobMetaproperties=JobsResult.jobMetaproperties;
            $set.job_previous_stage=JobsResult.job_previous_stage;
            $set.job_active_stage=JobsResult.job_active_stage;
            $set.job_next_stage=JobsResult.job_next_stage;
            $set.Preset_Stages=NewPreset_Stages;
            
            this.Mdb.bynder_jobs.updateOne({ id : JobsResult.id , duplicate: {$exists: false} }, { $set : $set })
              .then((res) => { 
                console.log( JobsResult.id,"==>", res); })
              .catch((Err) => { console.log("unable to updated bynder_jobs ID:", JobsResult.id, Err); });
            // for duplicate data Update skip some Meta data
            if(docs.length > 1){
              for(let ddtt in docs){
                if(  typeof docs[ddtt].duplicate != "undefined"){
                  updateDuplicateJobs(docs[ddtt], JobsResult, $set);
                }
              }
            }
          }else if(serDocs.job_active_stage.status!= JobsResult.job_active_stage.status){
          // console.log("status changed", serDocs.id);
            var job_date_finished="";
            if(( serDocs.job_date_finished=="" || serDocs.job_date_finished==null ) && JobsResult.job_active_stage.status=="Approved"){
                job_date_finished= new Date();
            }
            var NewPreset_Stages=serDocs.Preset_Stages;
            if(NewPreset_Stages.length-1 >-1){
                NewPreset_Stages[NewPreset_Stages.length-1].job_date_finished=new Date();
            }
            if(NewPreset_Stages.length >0){
                //update all Stage Name if any changes //
                for(let l=0; l< NewPreset_Stages.length; l++){
                    var StageNames= PresetData.filter(data=>data.position== NewPreset_Stages[l].position);
                    if(StageNames.length >0 ){
                      NewPreset_Stages[l].StageNames=StageNames[0].name;
                    }else{
                      console.log('stageName not found at ', JSON.stringify(serDocs))
                    }
                }
            }
            var set={};
            set.jobMetaproperties=JobsResult.jobMetaproperties;
            set.job_previous_stage=JobsResult.job_previous_stage;
            set.job_active_stage=JobsResult.job_active_stage;
            set.job_next_stage=JobsResult.job_next_stage;
            set.Preset_Stages=NewPreset_Stages;
            if( typeof JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'] != "undefined"){
              set.job_key=JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'];
            }
            let dupData={
              jobMetaproperties   : JobsResult.jobMetaproperties,
              job_previous_stage  : JobsResult.job_previous_stage,
              job_active_stage    : JobsResult.job_active_stage,
              job_next_stage      : JobsResult.job_next_stage,
              Preset_Stages       : NewPreset_Stages
            }
            if(typeof job_date_finished!= "string"){ set.job_date_finished=job_date_finished; }
            this.Mdb.bynder_jobs.updateOne({ id : JobsResult.id , duplicate: {$exists: false}}, { $set: set } ).then((dt) => {
                //console.log( "Updated ID",JobsResult[k].id,"==>", dt);
                // Mdb.bynder_jobs.updateMany({ id: JobsResult[k].id,  duplicate: {$exists: true}},{
                //   $set: dupData
                // }).then(d=>{
                //   console.log("duplicate data Updated");
                // });
            }).catch((Err) => {
                console.log("not updated bynder_jobs ID:", JobsResult.id, Err);
            });
            /*code for update duplicate jobs */
            if(docs.length > 1){
              for(let ddtt in docs){
                if(  typeof docs[ddtt].duplicate != "undefined"){
                  this.updateDuplicateJobs(docs[ddtt], JobsResult, set);
                }
              }
            }
            /* end update duplicate jobs */
          }
        }

    }
  }
  updateDuplicateJobs(docs, JobsResult, $set){

   console.log("duplicate lesson found", docs);
   let Skip={
     lessonkey   : 'b447dc7d70b0420a8ac9ec9aeff78296',
     lessonletkey: '7b30e1d296d343bdaaffcb6be164a713',
     componentkey: '87d538e6d3a442468b20426285aef253',
     gradekey    : 'c0ac0a86e65f4f7ebd88dbd7e77965ef',
     modulekey   : 'b447dc7d70b0420a8ac9ec9aeff78296',
     batchkey    : '662315fccf37435081da009bd3fbe49b'
   }
   if(typeof JobsResult.jobMetaproperties[Skip.lessonkey] != "undefined" && typeof docs.jobMetaproperties[Skip.lessonkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.lessonkey] = docs.jobMetaproperties[Skip.lessonkey];
   }else if(typeof docs.jobMetaproperties[Skip.lessonkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.lessonkey] = docs.jobMetaproperties[Skip.lessonkey];
   }
   if(typeof JobsResult.jobMetaproperties[Skip.lessonletkey] != "undefined" && typeof docs.jobMetaproperties[Skip.lessonletkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.lessonletkey] = docs.jobMetaproperties[Skip.lessonletkey];
   }else if(typeof docs.jobMetaproperties[Skip.lessonletkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.lessonletkey] = docs.jobMetaproperties[Skip.lessonletkey];
   }
   if(typeof JobsResult.jobMetaproperties[Skip.componentkey] != "undefined" && typeof docs.jobMetaproperties[Skip.componentkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.componentkey] = docs.jobMetaproperties[Skip.componentkey];
   }else if(typeof docs.jobMetaproperties[Skip.componentkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.componentkey] = docs.jobMetaproperties[Skip.componentkey];
   }
   if(typeof JobsResult.jobMetaproperties[Skip.gradekey] != "undefined" && typeof docs.jobMetaproperties[Skip.gradekey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.gradekey] = docs.jobMetaproperties[Skip.gradekey];
   }else if(typeof docs.jobMetaproperties[Skip.gradekey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.gradekey] = docs.jobMetaproperties[Skip.gradekey];
   }
   if(typeof JobsResult.jobMetaproperties[Skip.modulekey] != "undefined" && typeof docs.jobMetaproperties[Skip.modulekey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.modulekey] = docs.jobMetaproperties[Skip.modulekey];
   }else if(typeof docs.jobMetaproperties[Skip.modulekey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.modulekey] = docs.jobMetaproperties[Skip.modulekey];
   }
   if(typeof JobsResult.jobMetaproperties[Skip.batchkey] != "undefined" && typeof docs.jobMetaproperties[Skip.batchkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.batchkey] = docs.jobMetaproperties[Skip.batchkey];
   }else if(typeof docs.jobMetaproperties[Skip.batchkey] != "undefined"){
     JobsResult.jobMetaproperties[Skip.batchkey] = docs.jobMetaproperties[Skip.batchkey];
   }
   $set.jobMetaproperties=JobsResult.jobMetaproperties;
   this.Mdb.bynder_jobs.updateOne({ _id : docs._id }, { $set : $set }).then(dupsr=>{
     console.log("Duplicate data Updated")
   });
  }
  saveHandler(JobsResult) {
    //save code for bynder jobs
    var job_active_stage= JobsResult.job_active_stage;
    if(job_active_stage.position==1){
      job_active_stage.start_date=JobsResult.dateCreated;
      job_active_stage.accuracy=true;
    }else{
      job_active_stage.start_date=new Date();
      job_active_stage.accuracy=false;
    }
    var MPS_Preset_Stages=[job_active_stage];
    JobsResult.jobID=JobsResult.id.split("-").join("");
    if( typeof JobsResult.jobMetaproperties.e9074f5b472f41d4a92ac511e53da775 != "undefined" &&  JobsResult.jobMetaproperties.e9074f5b472f41d4a92ac511e53da775!=""){
        JobsResult.dateCreated=new Date( JobsResult.dateCreated );
    }else{
        JobsResult.dateCreated=new Date( JobsResult.dateCreated );
    }
    if( typeof JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'] != "undefined"){
      if(!!JobsResult.jobMetaproperties && !!JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f']){
        //job_key Ruls ignore space and convert to uppercase, EM- to EM2-
        let NewJobKey = JobsResult.jobMetaproperties['ccf531b93d1c46428aa5c52bc8cc639f'].trim();
        try{
          NewJobKey= NewJobKey.toUpperCase().replace('EM-','EM2-');
        }catch(e){

        }
        JobsResult.job_key = NewJobKey;
      }
    }
    //JobsResult[k].job_key=""; job_key should be update with meatupdate request
    JobsResult.job_date_finished ="";
    JobsResult.Preset_Stages=MPS_Preset_Stages;
    JobsResult.loadPreset=false;
    JobsResult.loadMeta=false;
    let self= this;
    //console.log("Data for saving :", JobsResult.id);
    this.saveProcess1 = new Promise(function(resolve, reject) {
      var bynder_jobs =  new self.Mdb.bynder_jobs(JobsResult);
      bynder_jobs.save().then((rs) => {
        resolve(JobsResult);
      });
    });
    this.saveProcess1.then((data)=> {
      console.log("Saved JobID ", JobsResult.id );
    });
  }
}
module.exports = ApiProcess;