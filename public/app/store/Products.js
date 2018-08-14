Ext.define('iotnsp.store.Products',{
    extend:'Ext.data.Store',


    model:"iotnsp.model.Product",

    alias:'store.Products',

    autoLoad:true,
    proxy:{
        type:"api",
        url:"/v1/products"
    }
})