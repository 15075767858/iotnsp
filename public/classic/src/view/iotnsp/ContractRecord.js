Ext.define('iotnsp.view.iotnsp.ContractRecord', {
    extend: 'Ext.panel.Panel',

    requires: [
        'iotnsp.view.iotnsp.ContractRecordController',
        'iotnsp.view.iotnsp.ContractRecordModel'
    ],

    controller: 'iotnsp-contractrecord',
    viewModel: {
        type: 'iotnsp-contractrecord'
    },
    xtype: "contractrecord",
    title:"签约记录",
    html: '暂无记录'
});