'use strict'




class Product {


    constructor(obj){
        this.id=null;
        this.user_id=null;
        this.create_time=null;
        this.identifier=null;
        this.name=null;
        for(var pro in obj){
            this[pro]=obj[pro]
        }
        Object.preventExtensions(this)
    }

}

exports.Product=Product;

