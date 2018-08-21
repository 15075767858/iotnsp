
Ext.define('iotnsp.view.window.FullScreenWindow',{
    extend: 'Ext.window.Window',

    requires: [
        'iotnsp.view.window.FullScreenWindowController',
        'iotnsp.view.window.FullScreenWindowModel'
    ],

    controller: 'window-fullscreenwindow',
    viewModel: {
        type: 'window-fullscreenwindow'
    },
    autoShow: true,
    width:"100%",
    height:"100%",
});
