Ext.define('iotnsp.model.Product', {
    extend: 'Ext.data.Model',
    fields: [

        {name: 'id', type: 'int'},
{name: 'user_id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'identifier', type: 'string'},
        {name: 'create_time',type:"date"},
    ],

});
