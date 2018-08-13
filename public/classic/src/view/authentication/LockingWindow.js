Ext.define('iotnsp.view.authentication.LockingWindow', {
    extend: 'Ext.window.Window',

    requires: [
        'iotnsp.view.authentication.LockingWindowController',
        'iotnsp.view.authentication.LockingWindowModel'
    ],

    controller: 'authentication-lockingwindow',
    viewModel: {
        type: 'authentication-lockingwindow'
    },
    xtype: 'lockingwindow',

    closable: false,
    resizable: false,
    autoShow: true,
    titleAlign: 'center',
    maximized: true,
    modal: true,

    bodyStyle: {
        background: '#ffc',
        padding: '10px'
    },
    
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    //bodyPadding: 100
});
