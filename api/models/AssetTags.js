 class AssetTags{
    constructor(dt){
        this.data=dt;
    }
    getJobs(){
        console.job("READ TAGS from :",this.data);
        let retData={};
        if(this.data.property_workflowjobkey.length > 0){
            retData.job_key = this.data.property_workflowjobkey[0];
        }
        if(!!this.description){
            retData.description = this.data.description;
        }
        //lesson: "", component:  "",  lessonlet:  "", 
        if(!!this.data.thumbnails && this.data.thumbnails['thul']){
            retData.thumb = this.data.thumbnails['thul'];
        }
        let respdt=[];
        if(this.data.tags.length){
            retData.tags= this.data.tags;
            // case where we have need to define jobs meta data
            for(let t=0; t< this.data.tags.length; t++){
                console.log("Tags data =>",this.data.tags[t]);
            }
        }
        
        // need for read tags data // grade module 
        // Not founded data 
        // cstage: "", //Current Stage, totalage: "", lastage: "", comment:"", isPaging:"",
        //comment
        /*
        retData={
            job_key : this.data,
            
            
            lessonlet:  "",
            description :   "",
            thumb:  "",
            cstage: "", //Current Stage
            totalage: "",
            lastage: "",
            comment :   "",
            mverification   :   "",
            tags:"",

            
            
            
            grade   :   "",
            module  :   "",
            component:  "",
            lesson: "",
            batch   :   "",
            workflow: "",

            
        }
        */
    }
 }
module.exports= AssetTags;