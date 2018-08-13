
Ext.define('iotnsp.view.iotnsp.Notice',{
    extend: 'Ext.panel.Panel',

    requires: [
        'iotnsp.view.iotnsp.NoticeController',
        'iotnsp.view.iotnsp.NoticeModel'
    ],
    xtype:"notice",
    controller: 'iotnsp-notice',
    viewModel: {
        type: 'iotnsp-notice'
    },
    title:"通知公告",
    html: '暂无公告'
});
