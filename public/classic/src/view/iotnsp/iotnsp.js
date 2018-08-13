Ext.define('iotnsp.view.iotnsp.iotnsp', {
    extend: "Ext.Container",
    //extend: 'iotnsp.view.iotnsp.LockingPanel',
    xtype: "iotnsp",
    requires: [
        'iotnsp.view.iotnsp.iotnspController',
        'iotnsp.view.iotnsp.iotnspModel',
        'iotnsp.view.iotnsp.CorporationInfo',
        'iotnsp.view.iotnsp.Notice',
    ],
    controller: 'iotnsp-iotnsp',
    viewModel: {
        type: 'iotnsp-iotnsp'
    },
    cls: 'main-container',
    layout: "responsivecolumn",
    listeners:{
      boxready:'boxready'
    },
    items: [{
        xtype: "notice",
        cls: "big-100 small-100 shadow"
    }, {
        xtype: "corporationinfo",
        cls: "big-100 small-100"
    }, {
        xtype: "myserveice",
        cls: "big-50 small-100"
    }, {
        xtype: "contractrecord",
        cls: "big-50 small-100"
    }]

});