 class AssetTags{
    constructor(dt){
        this.data=dt;
    }
    getJobs(){
        
        let retData=[];
        let effectedData= this.data.tags.filter(d=> d.toUpperCase()==d && d.indexOf("_")!= -1);
        //console.log(' effectedData :', effectedData);
        if(effectedData.length){
            //{reader:'SC_', grade:'G04', module:'M05', components:'TE', lession: 'L09', lessionLet: }
            let tagRead=new TagRead();
            for(let t=0; t< effectedData.length; t++){
                if(!!effectedData[t] ){
                    let splitTags= effectedData[t].split("_");
                    tagRead.generater(splitTags[0]+'_', effectedData[t]);
                    console.log("TagsReader=>",effectedData[t]," TAGS generator=>",JSON.stringify(tagRead.getCollection()));
                }
            }
            //hear we hv need return reader data
            console.log("Storeg point : ", JSON.stringify(tagRead.getCollection()));
            retData= tagRead.getCollection();
        }
        return retData;
    }
 }
 class TagRead{
    constructor(){
        this.data=[];
        this.otherCase();
    }
    generater(r, tag){
        if(this.hasReader(r)){
             let loop=this.data.length-1;
             while(loop >= 0){
               let Looper= this.data[loop];
               if(Looper.reader==r && Looper.grade==this.getGrade(tag,r) && !Looper.module && !!this.getModule(tag,r)){
                    //Module handler
                    this.data[loop].module=this.getModule(tag, r);
                    if(!!this.getComp(tag, r) && !this.data[loop].comp){ //for comp lesson handling
                        this.data[loop].comp=this.getComp(tag, r);
                    }
                    if(!!this.getLets(tag, r) && this.getLets(tag, r).length > 0 && !this.data[loop].lesson){
                        this.setLessons(this.data[loop], this.getLets(tag, r));
                    }
               }else if(Looper.reader==r && Looper.grade==this.getGrade(tag,r) && Looper.module == this.getModule(tag,r) && !!this.getComp(tag,r) && !Looper.comp){
                    //components handler
                    this.data[loop].comp=this.getComp(tag, r);
                    if(!!this.getLets(tag, r) && this.getLets(tag, r).length > 0 && !this.data[loop].lesson){
                        this.setLessons(this.data[loop], this.getLets(tag, r));
                    }
               }else if(Looper.reader==r && Looper.grade==this.getGrade(tag,r) && Looper.module == this.getModule(tag,r) && this.getComp(tag,r) == Looper.comp && !Looper.lesson && !!this.getLets(tag,r)){
                    //this.data[loop].comp=this.getComp(tag, r);
                    let l=this.getLets(tag,r);
               }else{
                   //avoide dupplicats 
                   let match1=this.data.filter(d=> d.reader==r);
                   if(match1.length >0){
                        if(!!this.getGrade(tag, r) && !!this.getModule(tag,r)){
                            let match2=match1.filter(d=>d.grade==this.getGrade(tag,r) && d.module==this.getModule(tag,r));
                            if(match2.length >0){
                                if(!!this.getComp(tag,r)){
                                    let match3=match2.filter(d=>d.comp==this.getComp(tag,r));
                                    if(match3.length> 0){
                                        if(!!this.getLets(tag,r)){
                                          let lessons= this.getLets(tag,r); ////having multiple lession handling
                                          for(let temp=0; temp < lessons.length; temp++){
                                            if(match3.filter(d=> d.lesson==lessons[temp]).length == 0){
                                                //case for newly jobs for same comp
                                                let newDT={ reader: r, 
                                                    grade   :   this.getGrade(tag,r),
                                                    module  :   this.getModule(tag, r),
                                                    comp    :   this.getComp(tag, r),
                                                    lesson  :   lessons[temp]
                                                }
                                                this.data.push(newDT);
                                            }
                                          }
                                        }
                                    }else{
                                       // camp not matched
                                       let newDT={ reader:r,grade:this.getGrade(tag,r),module:this.getModule(tag, r)};
                                       if(!!this.getComp(tag,r)){
                                           newDT.comp=this.getComp(tag,r);
                                       }
                                       if(this.getLets(tag,r).length > 0){
                                           this.setLessons(newDT, this.getLets(tag, r));
                                       }
                                       this.data.push(newDT);
                                    }
                                }else{
                                    //job did't have Camp
                                    let newDT={ reader: r, 
                                        grade   :   this.getGrade(tag,r),
                                        module  :   this.getModule(tag, r),
                                        comp    :   this.getComp(tag, r)
                                    }
                                    if(!!this.getLets(tag,r).length >0){
                                        this.setLessons(newDT, this.getLets(tag, r));
                                    }
                                    this.data.push(newDT);
                                }
                            }else{
                                //deff grade & module
                                let newDT={ reader:r,grade:this.getGrade(tag,r),module:this.getModule(tag, r)};
                                if(!!this.getComp(tag,r)){
                                    newDT.comp=this.getComp(tag,r);
                                }
                                if(this.getLets(tag,r).length > 0){
                                    this.setLessons(newDT, this.getLets(tag, r));
                                }
                                this.data.push(newDT);
                            }
                        }
                   }else{
                        //complety new Job cat
                        let newDT={ reader:r,grade:this.getGrade(tag,r),module:this.getModule(tag, r)};
                        if(!!this.getComp(tag,r)){
                            newDT.comp=this.getComp(tag,r);
                        }
                        if(this.getLets(tag,r).length > 0){
                            this.setLessons(newDT, this.getLets(tag, r));
                        }
                        this.data.push(newDT);
                   }
                   //assuming this is new Jobs
                   //this.addNewEntry(r, tag);
               }
               loop--;
             }
        }else{
            this.addNewEntry(r, tag);
        }
    }
    setLessons(data,Lessons){
        for(let t=0; t <Lessons.length; t++){
            if(t==0){
                data.lesson= Lessons[t];
            }else{
                this.addNewEntryLession(data, Lessons[t]);
            }
        }
    }
    addNewEntryLession(d, Lesson){
        d.lesson=Lesson;
        this.data.push(d);
    }
    addNewEntry(r, tag){
        let addData={reader: r};
        if(!!this.getGrade(tag,r)){
            addData.grade=this.getGrade(tag,r);
        }
        if(!!this.getModule(tag, r)){
            addData.module=this.getModule(tag, r);
        }if(!!this.getComp(tag, r)){
            addData.comp=this.getComp(tag, r);
        }if(!!this.getLets(tag, r) && this.getLets(tag, r).length > 0 ){
            this.setLessons(addData, this.getLets(tag, r));
        }
        this.data.push(addData);
    }
    otherCase(){
        this.caseArray=Array('EOMA','EOMA_Rubric'
        ,'EOMA_Section_Page','AppB_Storyline'
        ,'AppC_Glossary','AppD_Cognates','Works_Cited'
        ,'Credits','TOC','Internal_Title','Bibliography'
        ,'Overview');
        return this.caseArray;
    }
    thatGrade(curriculumRead){
       return this.data.filter(d=> d.reader==curriculumRead);
    }
    getCollection(){
        return this.data;
    }
    existRGML(reader, L){
        return this.data.filter(d=> d.reader== reader && d.grade== L).length > 0;
    }
    existRGM(reader, G, M){
        return this.data.filter(d=> d.reader== reader && d.grade== G && d.module== M).length > 0;
    }
    existRG(reader, G){
        return this.data.filter(d=> d.reader== reader && d.grade== G).length >0;
    }
    existR(reader){
       return this.data.filter(d=> d.reader== reader).length > 0;
    }
    hasReader(reader){
      return  this.data.length >0 && this.data.filter(d=> d.reader== reader).length >0 ;
    }
    getComp(tag, read){
        let ret='';
        let splited= tag.split("_");
        let filterd=splited.filter(d=> d.length > 3);
        if(filterd.length >0){
            ret= filterd[0].substring(4, filterd[0].length);
        }else if(filterd.length ==0 && splited.length > 4){ //normal case we assume  3rd itrator
           ret=splited[3];
        }
        if(!!ret &&this.caseArray.indexOf(ret) > -1 ){
            ret="";
        }
        return ret;
    }
    getLets(tag, read){
        let ret=[];
        if(!!tag.match(/L\d+/g)){
            ret=tag.match(/L\d+/g);
        }
        if(ret.length==1 && tag.split(ret[0]).length ==2){
            let last=tag.split(ret[0]).pop()
            if(last.indexOf("_") != -1){
                last=last.split("_").join("");
                ret=Array(ret[0]+last); 
            }
        }
        // case
        if(ret.length ==0 ){
            this.caseArray.forEach(itr=>{
                if( tag.indexOf(itr) > -1){
                    ret=Array(itr);
                }
            });
        }
        return ret;
    }
    getGrade(tag, read){
        let ret='';
        if(!!tag.match(/G\d+/g)){
            ret=tag.match(/G\d+/g)[0];
        }else{
           let splited= tag.split("_");
           if(splited[0]+'_'== read && splited[1].length > 5 ) {
            ret="G"+ splited[1].substring(0, 2);
           }
        }
        return ret;
    }
    getModule(tag, read){
       let ret='';
        if(!!tag.match(/M\d+/g)){
            ret=tag.match(/M\d+/g)[0];
        }else{
            let splited= tag.split("_");
            if(splited[0]+'_'== read && splited[1].length > 5 ) {
             ret="M"+ splited[1].substring(2, 4);
            }
         }
        return ret;
    }
 }
module.exports= AssetTags;