Ext.define('iotnsp.model.Product', {
    extend: 'iotnsp.model.Base',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'user_id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'identifier', type: 'string'},
        {name: 'create_time', type: "date"},
        {name: 'templateId', reference: 'Template'}
    ],
    proxy:{
        url:'/v1/products/',
        type:'api'
    }
});
