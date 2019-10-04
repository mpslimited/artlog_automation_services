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
        
        this.lessonkey     =   "b447dc7d70b0420a8ac9ec9aeff78296";
        this.lessonletkey  =   "7b30e1d296d343bdaaffcb6be164a713";
        this.componentkey  =   "87d538e6d3a442468b20426285aef253";
        this.tagkey        =   "dde4714035904b0cb68888e0acf389b2";
        this.gradekey      =   "c0ac0a86e65f4f7ebd88dbd7e77965ef";
        this.modulekey     =   "7388493928bc4a9aa57ca65306ed1579";
        this.artComplexkey =   "c7fbc907710045778ee29863e33d2bd2";
        this.artAssionkey  =   "cd8809565088496da4955eb3327fea04";
        this.dateCreatedMkey=  "e9074f5b472f41d4a92ac511e53da775";
        this.riskkey       =   "309909b0de3f4eb9b5674efe59bee8b9";
        this.impactkey     =   "f8bf767302224972a79fd80f7fb36d12";
        this.batchkey      =    "";
        this.jobkeykey     =    "ccf531b93d1c46428aa5c52bc8cc639f";
        this.wipkey        =    "0790cd4f2aed4ce0a315ff8034a43994";
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
     reIniMeta( dt, meta){
        this.data = dt;
        this.meta=meta;
     }
     referValueByKey(refKey, refVal){
        console.log(refKey, refVal);
        let retVal = "";
        let opt=this.Meta.filter(d=>d.tempId==refKey);
        if(opt.length> 0 && !! opt[0].options){
            let lendt=opt[0].options.filter((d)=> d.label== refVal);
            if(lendt.length> 0){
                retVal= lendt[0].ID.split("-").join("");
            }
        }
        return retVal;
     }
     getWorkflow(){
       let  ret='';
        if(this.data.hasOwnProperty('presetName') && this.data.presetName !=""){
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
     getJobkey(){
        if( this.data.jobMetaproperties.hasOwnProperty(this.jobkey)){
            return this.data.jobMetaproperties[this.jobkeykey];
        }else{
            return '';
        } 
     }
     setJobkey(value){
        this.data.jobMetaproperties[this.jobkeykey]=value;
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
     getGrade(){
        if(this.data.jobMetaproperties.hasOwnProperty(this.gradekey)){
            return this.data.jobMetaproperties[this.gradekey];
        }else{
            return '';
        }
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
     setGrade(value){
        this.data.jobMetaproperties[this.gradekey]=value;
     }
     getMeta(){
        let dt={ 
            getjobkey    :   this.getJobkey(),
            lesson       :   this.getLesson(),
            lessonlet    :   this.getLessonlet(),
            component    :   this.getComponent(),
            batch        :   "",
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
            artComplex   :   this.getArtComplex(),
            artComplexVal:   this.getValByKeyID(this.artComplexkey, this.getArtComplex()),
            artAssion    :   this.getArtAssion()  ,
            artAssionVal :   this.getValByKeyID(this.artAssionkey, this.getArtAssion()),
            
        };
        return dt;
    }
    getmetaVal(){
        let dt={ 
            getjobkey : this.getJobkey(),
            gradeID     : this.getGrade(),
            gradeVal    : this.getGradeVal(),
            moduleID    : this.getModule(),
            moduleVal   :'',

            lession   : this.getLesson(),
            component : this.getComponent(),
            batch     : "",
            dateCreatedM : this.getDateCreatedM(),
            tag         : this.getTag(),
            impactID    : this.getImpact(),
            impactVal   : '',
            ristID      : this.getRisk(),
            ristVal     : '',
            artComplexID: this.getArtComplex(),
            artComplexVal:'',
            artAssionID : this.getArtAssion() ,
            artAssionVal:'' 
        };
        return dt;
    }
     print( dd){
        console.log('Name is :'+ this.name, '==>', dd);
     }
}
class Wmdt {
    getAGrades(){

    }
};
module.exports= Metadt;
//module.exports= AssetTags;