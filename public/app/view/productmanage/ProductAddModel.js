Ext.define('iotnsp.view.productmanage.ProductAddModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productmanage-productadd',
    data: {
        name: 'iotnsp'
    },
    links: {
        product: {
            type: "Product",
            create: true
        }
    }

});
