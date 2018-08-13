Ext.define('iotnsp.model.ResultBase', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'code', type: 'int' },
        { name: 'msg', type: 'string' },
        { name: 'data', type: 'auto' }
    ]
});
