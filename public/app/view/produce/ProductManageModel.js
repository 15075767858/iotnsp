Ext.define('iotnsp.view.produce.ProductManageModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.produce-productmanage',
    data: {
        name: 'iotnsp'
    },
    stores:{
        products:{
            type:"Products"
        }
    }
});
