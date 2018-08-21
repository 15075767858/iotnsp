Ext.define('iotnsp.view.productmanage.ProductManageModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productmanage-productmanage',
    data: {
        name: 'iotnsp'
    },
    stores:{
        products:{
            type:"Products"
        }
    }
});
