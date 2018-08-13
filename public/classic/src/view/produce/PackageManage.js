Ext.define('iotnsp.view.produce.PackageManage', {
    extend: 'Ext.grid.Panel',

    requires: [
        'iotnsp.view.produce.PackageManageController',
        'iotnsp.view.produce.PackageManageModel'
    ],

    controller: 'produce-packagemanage',
    viewModel: {
        type: 'produce-packagemanage'
    },
    title:"包装管理",
    xtype: "PackageManage",
    columns: [{
        text: "包装名称",
    }, {
        text: "规格标识"
    }, {
        text: "对应产品"
    }, {
        text: "包装规格"
    }, {
        text: "包装级"
    }, {
        text: "操作人"
    }, {
        text: "总出码量"
    }, {
        text: "操作"
    }]

});