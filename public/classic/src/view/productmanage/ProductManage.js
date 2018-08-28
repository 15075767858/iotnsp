
Ext.define('iotnsp.view.productmanage.ProductManage',{
    extend: 'Ext.panel.Panel',
    requires: [
        'iotnsp.view.productmanage.ProductManageController',
        'iotnsp.view.productmanage.ProductManageModel'
    ],
    controller: 'productmanage-productmanage',
    viewModel: {
        type: 'productmanage-productmanage'
    },
    xtype: "productmanage",
    //height: 300,
    layout: "responsivecolumn",
    cls: 'main-container',
    items:{
        xtype:'productlist'
    }

});


