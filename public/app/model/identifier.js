Ext.define('iotnsp.model.identifier', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'string'},
        {name: 'domain', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'create_time', type: 'date'},
        {name: 'corporationId', type: 'string'}

    ]
});
