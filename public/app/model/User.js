Ext.define('iotnsp.model.User', {
    extend: 'Ext.data.Model',
    schema: {
        namespace: 'iotnsp.model',
    },
    fields: [
        {name: 'id', type: 'int'},
        {name: 'email', type: 'string'},
        {name: 'password', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'true_name', type: 'string'},
        {name: 'region_code', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'code_i', type: 'string'},
        {name: 'linkman', type: 'string'},
        {name: 'license_code', type: 'string'},
        {name: 'license_url', type: 'string'},
        {name: 'logo', type: 'string'},
        {name: 'token', type: 'string'}
    ],
//    idProperty:"email",

    data:{

    },
    proxy: {
        reader:{
            type:'json',
            rootProperty:'data'
        },
        type: "rest",
        url: "/v1/users"
        //url:'app/data/corporation'
    }
});
