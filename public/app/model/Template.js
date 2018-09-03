Ext.define('iotnsp.model.Template', {
    extend: 'iotnsp.model.Base',

    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'data', type: 'string'},
        {name: 'product_id', type: 'string'},
        {name: 'user_id', type: 'string'},
    ],
    proxy: {
        //url:'template',
        url: '/v1/templates/',
        type: 'api'
    },
});
