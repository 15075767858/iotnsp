
Ext.define('iotnsp.view.iotnsp.MyServeice',{
    extend: 'Ext.grid.Panel',

    requires: [
        'iotnsp.view.iotnsp.MyServeiceController',
        'iotnsp.view.iotnsp.MyServeiceModel'
    ],
    controller: 'iotnsp-myserveice',
    viewModel: {
        type: 'iotnsp-myserveice'
    },
    xtype:"myserveice",
    title:"我的当前服务",
    dockedItems:[{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            text:"服务增补",
            iconCls: null,
            glyph: 61,
            xtype: 'button'
        }, '-', {
            text:"续约",
            iconCls: null,
            glyph: 88,
            xtype: 'button'
        }]
    }],
    height:300,
    columns:[
        {
            text:"服务名称"
        },{
            text:"起始时间"
        },{
            text:"结束时间"
        },{
            text:"关联合同"
        },{
            text:"费用说明"
        }
    ]
});
