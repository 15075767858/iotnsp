Ext.define('iotnsp.proxy.API',{


    extend:'Ext.data.proxy.Rest',
    alias:'proxy.api',
    reader:{
        type:'json',
        rootProperty:'data'
    }

})