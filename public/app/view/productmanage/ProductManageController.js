Ext.define('iotnsp.view.productmanage.ProductManageController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productmanage-productmanage',
    onAddProduct: function () {
        Ext.create('iotnsp.view.productmanage.ProductAdd', {})
    },
    boxready: function () {
        //new iotnsp.view.productmanage.TemplateEdit
    },
    onProductEdit: function (grid, rowIndex, colIndex, action, event, record) {
        console.log(arguments)

        var productadd = Ext.widget('productadd', {
            title: '产品编辑',
        })
        productadd.viewModel.setData({
            product:record
        })
        console.log(productadd)
    }
});
