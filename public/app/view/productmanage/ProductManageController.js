Ext.define('iotnsp.view.productmanage.ProductManageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productmanage-productmanage',
    onAddProduct:function(){
        Ext.create('iotnsp.view.productmanage.ProductAdd')
    }
});
