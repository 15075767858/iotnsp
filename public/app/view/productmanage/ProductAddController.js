Ext.define('iotnsp.view.productmanage.ProductAddController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productmanage-productadd',
    createTemplate: function () {
        console.log(this)
    },
    editTemplate: function (button) {
        var viewModel = this.getViewModel();

        var template = viewModel.get('templateCombo.selection');

        Ext.create("iotnsp.view.productmanage.TemplateEdit");
        console.log(this)
    },
    saveProduct: function () {
        var viewModel = this.getViewModel();
        viewModel.get('product').save()
        a = viewModel
    },
    boxready: function (win) {
        var me = win;
        var viewModel = me.viewModel;
        if (me.product) {
            me.setTitle("修改商品")
            viewModel.set('product', me.product)
        }
    }
});
