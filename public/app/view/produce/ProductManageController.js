Ext.define('iotnsp.view.produce.ProductManageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.produce-productmanage',

    onAddProduct:function () {
        console.log(arguments)

        Ext.create('Ext.window.Window',{
            autoShow:true,
            title:"add",
            items:{
                xtype:"form",
                items:[
                    {
                        fieldLable:"产品名称"
                    },{

                    }
                ]
            }

        })
    }

});
