let moment = require('moment');
//  class AssetTags{
//     constructor(dt){
//         this.data=dt;
//     }
//     getJobs(){
//         console.job("READ TAGS from :",this.data);
//     }
//  }
 class Metadt {
    constructor(dt){
        this.data = dt;
        if(dt.hasOwnProperty('jobMetaproperties')){
            this.metaObj=Object.entries(dt.jobMetaproperties);
        }
        
        this.lessonkey     =   "b447dc7d70b0420a8ac9ec9aeff78296";   //static
        this.lessonletkey  =   "7b30e1d296d343bdaaffcb6be164a713";   // static
        this.componentkey  =   "87d538e6d3a442468b20426285aef253";   // static
        this.gradekey      =   "c0ac0a86e65f4f7ebd88dbd7e77965ef";   // dynamic
        this.modulekey     =   "7388493928bc4a9aa57ca65306ed1579";   // static
        this.topickey      =    "662315fccf37435081da009bd3fbe49b";  // static

           
        this.creditlinekey =   "c0b45231a3f142ac8c9c13af8d0fe31f";   // static
        this.tagkey        =   "dde4714035904b0cb68888e0acf389b2";   // static
        this.artComplexkey =   "c7fbc907710045778ee29863e33d2bd2";   // dynamic
        this.artAssionkey  =   "cd8809565088496da4955eb3327fea04";   // dynamic
        this.dateCreatedMkey=  "e9074f5b472f41d4a92ac511e53da775";   // static
        this.riskkey       =   "309909b0de3f4eb9b5674efe59bee8b9";   // static
        this.impactkey     =   "f8bf767302224972a79fd80f7fb36d12";   // dynamic
        this.jobkeykey     =    "ccf531b93d1c46428aa5c52bc8cc639f";  // static
        this.wipkey        =    "0790cd4f2aed4ce0a315ff8034a43994";  // exception
        this.facingkey     =    "09efaa3bb76c42a88c9441a6af7c218c";  // dynamic
        this.serieskey     =    "c790de60f6d0405898eb4dd641a3d94b";  // static
        this.revisionkey   =   "fe4aa91f5b234d0cb53e481053a21565";   //Dynamic
        this.permissiontypeKey = '262f92ed59b14c3aa74d6877d7f8ba4c';  //Dynamic
        this.printAssetKey =    '47a0e9db948541b2820a32425bd6dd60';   //Dynamic
        this.printReadyKey =    '37a38eb9dcfd4bd19c976b3e38cc7821';   //Dynamic
     }
     
     getAMetaOptionsBykey(key){
      let retdt=[];
      let Gradopt=this.Meta.filter(d=>d.tempId==key); 
      if(Gradopt.length >0 && !!Gradopt[0].options && Gradopt[0].options.length >0 ){
        Gradopt=Gradopt[0].options;
        retdt=Gradopt.map(d=> ({id:d.ID.split("-").join(""), value: d.label, label: d.label }));
      }
      return retdt; 
     }
     iniMeta(meta){
        this.Meta=meta;
     }
     initAssetMeta(assetMeta){
        this.assetMeta=assetMeta; 
     }
     PrintAssetMeta(d){
        this.printAssetMeta=d;
     }
     reIniMeta( dt, meta){
        this.data = dt;
        this.meta=meta;
     }
     referValueByKey(refKey, refVal){
        console.log(refKey, refVal);
        let retVal = "";
        let opt=this.Meta.filter(d=>d.tempId==refKey);
        if(opt.length> 0 && !! opt[0].options){
            let lendt=opt[0].options.filter((d)=> d.label== refVal || d.label.split(" ").join("")== refVal);
            if(lendt.length> 0){
                retVal= lendt[0].ID.split("-").join("");
            }
        }
        return retVal;
     }
     getWorkflow(){
       let  ret='';
        if(!!this.data.presetName && this.data.presetName !==''){
            if(this.data.presetName.indexOf('Clip Art')!= -1 ){
                ret="Clip Art";
            }else if(this.data.presetName.indexOf('Created Image')!= -1 ){
                ret="Created Image";
            }else if(this.data.presetName.indexOf('Permission')!= -1 ){
                ret="Permission";
            }else if(this.data.presetName.indexOf('Shutterstock')!= -1 ){
                ret="Shutterstock";
            }
        }
        return ret;
     }
     getAssetPrintReady( val ){
       let ret ="";
       if( !!val && this.printAssetMeta.filter(d=> d.value== val).length > 0 ){
           let ele=this.printAssetMeta.filter(d=> d.value== val);
           if(ele.length > 0){
            ret= ele[0].label;
           }
       }
       return ret;
     }
     getWip(){
        if( this.data.jobMetaproperties.hasOwnProperty(this.wipkey)){
            return this.data.jobMetaproperties[this.wipkey];
        }else{
            return '';
        } 
     }
     setWip(){
        this.data.jobMetaproperties[this.wipkey]=value;
     }
     getPermissiontype(){
        if( this.data.jobMetaproperties.hasOwnProperty(this.permissiontypeKey)){
            return this.data.jobMetaproperties[this.permissiontypeKey];
        }else{
            return '';
        }
     }
     
     setPermissiontype(value){
        this.data.jobMetaproperties[this.permissiontypeKey]=value;
     }
     setJobkey(value){
        this.data.jobMetaproperties[this.jobkeykey]=value;
     }
     getJobkey(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.jobkeykey)){
            return this.data.jobMetaproperties[this.jobkeykey];
        }else{
            return '';
        }
     }
     getImpact(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.impactkey)){
            return this.data.jobMetaproperties[this.impactkey];
        }else{
            return '';
        } 
     }
     setImpact(value){
        this.data.jobMetaproperties[this.impactkey]=value;
     }
     getFacing(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.facingkey)){
            return this.data.jobMetaproperties[this.facingkey];
        }else{
            return '';
        } 
     }
     setFacing(value){
        this.data.jobMetaproperties[this.facingkey]=value;
     }
     getPrintReady(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.printReadyKey)){
            return this.data.jobMetaproperties[this.printReadyKey];
        }else{
            return '';
        } 
     }
     getPrintAsset(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.printAssetKey)){
            return this.data.jobMetaproperties[this.printAssetKey];
        }else{
            return '';
        } 
     }
     getSeries(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.serieskey)){
            return this.data.jobMetaproperties[this.serieskey];
        }else{
            return '';
        } 
     }
     setSeries(value){
        this.data.jobMetaproperties[this.serieskey]=value;
     }
     getTopic(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.topickey)){
            return this.data.jobMetaproperties[this.topickey];
        }else{
            return '';
        } 
     }
     setTopic(value){
        this.data.jobMetaproperties[this.topickey]=value;
     }
     getRisk(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.riskkey)){
            return this.data.jobMetaproperties[this.riskkey];
        }else{
            return '';
        } 
     }
     setRisk(value){
        this.data.jobMetaproperties[this.riskkey]=value;
     }
     getDateCreatedM(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.dateCreatedMkey)){
            return this.data.jobMetaproperties[this.dateCreatedMkey];
        }else{
            return '';
        } 
     }
     setDateCreatedM(value){
        this.data.jobMetaproperties[this.dateCreatedMkey]=value;
     }
     getArtAssion(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.artAssionkey)){
            return this.data.jobMetaproperties[this.artAssionkey];
        }else{
            return '';
        } 
     }
     setArtAssion(value){
        this.data.jobMetaproperties[this.artAssionkey]=value;
     }
     getArtComplex(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.artComplexkey)){
            return this.data.jobMetaproperties[this.artComplexkey];
        }else{
            return '';
        } 
     }
     setArtComplex(value){
        this.data.jobMetaproperties[this.artComplexkey]=value;
     }
     getModule(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.modulekey)){
            return this.data.jobMetaproperties[this.modulekey];
        }else{
            return '';
        } 
     }
     setModule(value){
        this.data.jobMetaproperties[this.modulekey]=value;
     }
     getCreditline(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.creditlinekey)){
            return this.data.jobMetaproperties[this.creditlinekey];
        }else{
            return '';
        } 
     }
     setCreditline(value){
        this.data.jobMetaproperties[this.creditlinekey]=value;
     }
     getTag(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.tagkey)){
            return this.data.jobMetaproperties[this.tagkey];
        }else{
            return '';
        } 
     }
     setTag(value){
        this.data.jobMetaproperties[this.tagkey]=value;
     }
     getComponent(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.componentkey)){
            return this.data.jobMetaproperties[this.componentkey];
        }else{
            return '';
        } 
     }
     setComponent(value){
        this.data.jobMetaproperties[this.componentkey]=value;
     }
     getLessonlet(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.lessonletkey)){
            return this.data.jobMetaproperties[this.lessonletkey];
        }else{
            return '';
        }
     }
     setLessonlet(value){
        this.data.jobMetaproperties[this.lessonletkey]=value;
     }
     getLesson(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.lessonkey)){
            return this.data.jobMetaproperties[this.lessonkey];
        }else{
            return '';
        }
     }
     setLesson(value){
        this.data.jobMetaproperties[this.lessonkey]=value;
     }
     getM(){
         return this.data.jobMetaproperties;
     }
     getRevision(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.revisionkey)){
            return this.data.jobMetaproperties[this.revisionkey];
        }else{
            return '';
        }
     }
     setRevision(value){
        this.data.jobMetaproperties[this.revisionkey]=value;
     }
     getGrade(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.gradekey)){
            return this.data.jobMetaproperties[this.gradekey];
        }else{
            return '';
        }
     }
     getAssetWipByID(key, tempWipID){
        let ret='';
        let filterd=this.assetMeta.filter(d=> d.value==tempWipID);
        if(filterd.length > 0){
            ret= filterd[0].label;
        }
        return ret;
     }
     getValByKeyID(key, tempID){
         let res="";
         let Mdt=this.Meta.filter(d=>d.tempId==key);
         if(Mdt.length > 0){
           let opt= Mdt[0].options.filter(d=>d.ID.split('-').join('')== tempID);
           if(opt.length >0 ) 
           res=opt[0].label;
         }
         return res;
     }
     getValByMuMKeyID(key, tempID){
        let res=new Array();
        if(tempID.indexOf(',') > -1){
            let mIDS=tempID.split(',');
            for(let tt=0; tt < mIDS.length; tt++){
                let Mdt=this.Meta.filter(d=>d.tempId== key);
                if(Mdt.length > 0){
                let opt= Mdt[0].options.filter( d=> d.ID.split('-').join('') ==  mIDS[tt]);
                if(opt.length >0 ) 
                res.push(opt[0].label);
                }
            }
        }else{
            let Mdt=this.Meta.filter(d=>d.tempId==key);
            if(Mdt.length > 0){
            let opt= Mdt[0].options.filter(d=>d.ID.split('-').join('')== tempID);
            if(opt.length >0 ) 
            res.push(opt[0].label);
            }
        }
        return res.join(',');
    }
     
     setGrade(value){
        this.data.jobMetaproperties[this.gradekey]=value;
     }
     getMeta(){
        let dt={ 
            getjobkey    :   this.getJobkey(),
            lesson       :   this.getLesson(),
            creditLine   :   this.getCreditline(),
            lessonlet    :   this.getLessonlet(),
            component    :   this.getComponent(),
            topic        :   this.getTopic(),
            facingVal    :   this.getValByMuMKeyID(this.facingkey, this.getFacing()),
            facing       :   this.getFacing(),
            series       :   this.getSeries(),
            dateCreatedM :   this.getDateCreatedM(),
            tag          :   this.getTag(),
            grade        :   this.getGrade(),
            gradeVal     :   this.getValByKeyID(this.gradekey, this.getGrade()),
            module       :   this.getModule(),
            moduleVal    :   this.getValByKeyID(this.modulekey, this.getModule()),
            impact       :   this.getImpact(),
            impactVal    :   this.getValByKeyID(this.impactkey, this.getImpact()),
            risk         :   this.getRisk(),
            riskVal      :   this.getValByKeyID(this.riskkey, this.getRisk()),
            revisionId   :   this.getRevision(),
            revisionVal  :   this.getValByKeyID(this.revisionkey, this.getRevision()),
            artComplex   :   this.getArtComplex(),
            artComplexVal:   this.getValByKeyID(this.artComplexkey, this.getArtComplex()),
            artAssion    :   this.getArtAssion()  ,
            artAssionVal :   this.getValByKeyID(this.artAssionkey, this.getArtAssion()),
            wipVal       :   this.getWip(),
            wip          :   this.getAssetWipByID(this.wipkey, this.getWip()),   
            workflow     :   this.getWorkflow(),

            printAsset   :   this.getValByKeyID(this.printAssetKey, this.getPrintAsset()),
            printReady   :   this.getAssetPrintReady(this.getPrintReady()),
            permissionType :  this.getValByKeyID(this.permissiontypeKey, this.getPermissiontype())

            
        };
        return dt;
    }
    getmetaVal(){
        let dt={ 
            getjobkey    : this.getJobkey(),
            gradeID      : this.getGrade(),
            gradeVal     : this.getGradeVal(),
            moduleID     : this.getModule(),
            moduleVal    :'',

            lession      : this.getLesson(),
            component    : this.getComponent(),
            batch        : "",
            dateCreatedM : this.getDateCreatedM(),
            tag          : this.getTag(),
            impactID     : this.getImpact(),
            impactVal    : '',
            ristID       : this.getRisk(),
            ristVal      : '',
            artComplexID : this.getArtComplex(),
            artComplexVal:'',
            artAssionID  : this.getArtAssion() ,
            artAssionVal :'' 
        };
        return dt;
    }
     print( dd){
        console.log('Name is :'+ this.name, '==>', dd);
     }
     getExceptoin(Obj){
        let rs='MPS Exception';
        return rs;
     }
     getExceptionCategory(Obj){
        let rs='MPS Exception Category';
        return rs;
     }
     getTeamPriority(Obj){
        let rs='Low';
        if( moment(Obj.batchCDate).diff( moment(Obj.receiveddate), 'day') > 7 ){
            rs='Low';
        } else if( (moment(Obj.batchCDate).diff( moment(Obj.receiveddate), 'day') <= 7) && (moment(Obj.batchCDate).diff( moment(Obj.receiveddate), 'day') > 1)  ){
            rs='Medium';
        } else  if ( moment(Obj.batchCDate).diff( moment(Obj.receiveddate), 'day') <= 1){
            rs='High';
        }
        if(!Obj.batchCDate || Obj.batchCDate=="" || !Obj.receiveddate ){
            rs=''; 
        }
        //Obj.batchCDate  Obj.receiveddate
        return rs;
     }
     getTeamStatus(Obj){
       if(moment(Obj.mpsDueDate).diff( moment(), 'day') >= 0){
        Obj.artTeamStatus = 'Overdue'; 
       }
       return Obj.artTeamStatus;
     }
     getMpsDueDate(Obj){
        let dueDate='';
        let recivedDt = this.getMathAuditStartDt(Obj);
        let position = this.getMathAuditPosition(Obj);
        if(recivedDt!=''){
            if ( Obj.job_active_stage.position == position && Obj.job_active_stage.status=='Active'){
             
                let dueDate = moment(recivedDt).add(2, 'days').toISOString(); 
            }if ( Obj.job_active_stage.position == position && Obj.job_active_stage.status=='NeedsChanges'){
               let dueDate = moment(recivedDt).add(1, 'days').toISOString();
            }
        }
        return dueDate;
     }
     getMathAuditPosition(Obj){
        let Position=0;
        let stObj =  Obj.presetstages.filter(d => d.name == 'Math Audit Review');
        if(stObj.length > 0){
            Position= stObj[0].position;
        }
        return Position;
     }
     getMathAuditStartDt(obj){
      let stObj =  obj.presetstages.filter(d => d.name == 'Math Audit Review');
      let retDt='';
      if(stObj.length > 0) {
        let NObj=obj.Preset_Stages.filter( d => d.position == stObj[0].position);
        if(NObj.length > 0){
            retDt= NObj[0].start_date;
        }
      }  
      return retDt;
     }
     getStageRTeam(name){
        //this.getWorkflow()
        var Teamname="";
        if( name!=null &&  name!=""){
          if(name.toLowerCase().indexOf("research asset and original source")!=-1 ||
          name.toLowerCase().indexOf("select job type")!=-1 ||
          name.toLowerCase().indexOf("copyright status")!=-1 ||
          name.toLowerCase().indexOf("contract negotiation and asset procurement")!=-1 ||
          name.toLowerCase().indexOf("review image permissions")!=-1 ||
          name.toLowerCase().indexOf("asset approval")!=-1 ||
          name.toLowerCase().indexOf("waiting room preflight (for permission workflow)")!=-1 ||
          name.toLowerCase().indexOf("a&p record keeping")!=-1 ){
            Teamname="Permissions Team";
          }
          else if(name.toLowerCase().indexOf("art production lead assigns designer")!=-1 ||
           name.toLowerCase().indexOf("create asset")!=-1 ||
           name.toLowerCase().indexOf("designer create asset")!=-1 ||
           name.toLowerCase().indexOf("review image design and quality")!=-1 ||
           name.toLowerCase().indexOf("art production lead review")!=-1 ||
           name.toLowerCase().indexOf("team lead/designer creates asset")!=-1 ||
           name.toLowerCase().indexOf("team lead assigns designer")!=-1 ||
           name.toLowerCase().indexOf("waiting room preflight")!=-1 ){
             Teamname="Art Team";
          }
          else if(name.toLowerCase().indexOf("search the dam for existing assets")!=-1 ||
          name.toLowerCase().indexOf("verify permissions and upload the")!=-1 ||
          name.toLowerCase().indexOf("evaluate asset and assign for further action ")!=-1 ||
          name.toLowerCase().indexOf("search the DAM for existing assets ")!=-1 ||
          name.toLowerCase().indexOf("waiting room preflight (for clip art or storage workflow) ")!=-1 ||
          name.toLowerCase().indexOf("approve and upload asset to the waiting room")!=-1 ){
            Teamname="Clip Art & Storage Team";
          }else if(name.toLowerCase().indexOf("complete image research and provide options to writer")!=-1 ||
          name.toLowerCase().indexOf("upload final image")!=-1 ){
            Teamname="Shutterstock Team";
          }else if(name.toLowerCase().indexOf("content team feedback and approval")!=-1 ||
          name.toLowerCase().indexOf("feedback and approval")!=-1 ||
          name.toLowerCase().indexOf("math audit review")!=-1 ||
          name.toLowerCase().indexOf("math managing editor feedback and approval")!=-1 ||
          name.toLowerCase().indexOf("complete request form")!=-1 ||
          name.toLowerCase().indexOf("content team feedback and approval")!=-1 ||
          name.toLowerCase().indexOf("feedback and approval")!=-1 ||
          name.toLowerCase().indexOf("fpo math audit")!=-1 ||
          name.toLowerCase().indexOf("rejected asset notification")!=-1 ){
            Teamname="Content Team";
          }else{
            Teamname="On Hold Team";
          }
        }
        return Teamname;
     }
}
class Wmdt {
    getAGrades(){

    }
};
module.exports= Metadt;
//module.exports= AssetTags;