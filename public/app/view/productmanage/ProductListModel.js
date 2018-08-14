Ext.define('iotnsp.view.productmanage.ProductListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productmanage-productlist',
    data: {
        name: 'iotnsp'
    },
    stores:{
        products:{
            type:"Products"
        }
    }
});
