'use strict'


class Template {


    constructor(obj) {
        console.log(obj)
        this.id = null;
        this.data = null;
        this.product_id = null;
        this.user_id = null;
        this.name = null;
        for (var pro in obj) {
            this[pro] = obj[pro]
        }
        Object.preventExtensions(this)
    }

    // get id(){
    //     return this.id;
    // }
    // set id(id){
    //     //this.id=id;
    // }
    // get data(){
    //     return this.id;
    // }
    // set data(data){
    //     //this.data=data;
    // }
    // get productId(){
    //     return this.productId;
    // }
    // set productId(id){
    //     //this.productId=productId;
    // }

}


//exports.Template = Template;
module.exports = Template
//
// var t = new Template({
//     id:1,
//     data:'123',
//     productId:123
// })
//
//
// console.log(t)