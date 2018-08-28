Ext.define('iotnsp.model.Template', {
    extend: 'iotnsp.model.Base',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'data', type: 'string' },
        //{ name: 'productId', reference: 'Product' }
    ],
    proxy:{
        url:'template',
        type:'api'
    }
});
