'use strict'

class Product {

    constructor(obj) {
        this.id = null;
        this.user_id = null;
        this.create_time = null;
        this.identifier = null;
        this.name = null;
        this.template_id = null;
        Object.assign(this,obj)
        Object.preventExtensions(this)
    }

}

module.exports=Product;
