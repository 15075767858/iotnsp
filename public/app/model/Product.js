Ext.define('iotnsp.model.Product', {
    extend: 'iotnsp.model.Base',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'user_id', type: 'string'},
        {name: 'template_id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'identifier', type: 'string'},
        {name: 'create_time', type: "date"},
    ],
    hasMany:['Template'],
    proxy: {
        url: '/v1/products/',
        type: 'api'
    }
});
