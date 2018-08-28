Ext.define('iotnsp.model.identifier', {
    extend: 'iotnsp.model.Base',

    fields: [
        {name: 'id', type: 'string'},
        {name: 'domain', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'create_time', type: 'date'},
        {name: 'corporationId', type: 'string'}
    ],

});
