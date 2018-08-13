'use strict'




class User {


    constructor(obj){
        this.id=null;
        this.email=null;
        this.password=null;
        this.api_token=null;
        this.phone=null;
        this.true_name=null;
        this.region_code=null;
        this.address=null;
        this.code_i=null;
        this.linkman=null;
        this.license_code=null;
        for(var pro in obj){
            this[pro]=obj[pro]
        }
        Object.preventExtensions(this)
    }

}

exports.User=User;

