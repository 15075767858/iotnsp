Ext.define('iotnsp.model.User', {
    extend: 'iotnsp.model.Base',

    fields: [
        {name: 'id', type: 'string'},
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
        {name: 'token', type: 'string'},
    ],
    hasMany: ['Product'],
//    idProperty:"email",
    data: {},
    proxy: {
        type:'api',
        url: "/v1/users"
        //url:'app/data/corporation'
    }
});
