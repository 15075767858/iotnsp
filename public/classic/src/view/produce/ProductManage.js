Ext.define('iotnsp.view.produce.ProductManage', {
    extend: 'Ext.Container',

    requires: [
        'iotnsp.view.produce.ProductManageController',
        'iotnsp.view.produce.ProductManageModel',
        'iotnsp.store.Products'
    ],

    controller: 'produce-productmanage',
    viewModel: {
        type: 'produce-productmanage'
    },
    xtype: "productmanage",
    //height: 300,
    layout: "responsivecolumn",
    cls:'main-container',
    items: {
        userCls:'big-100',
        title: "产品列表",
        xtype:'grid',
        store: {
            type: 'Products'
        },
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xtype: "datefield",
                    emptyText: "开始时间",
                    maxValue: new Date()
                }, {
                    xtype: "datefield",
                    emptyText: "结束时间",
                    maxValue: new Date(),
                },
                {
                    xtype: "textfield",
                    fieldLabel: "标识/商品名："
                },
                {
                    text: "查询",
                    iconCls: null,
                    glyph: 61,
                    xtype: 'button'
                }, '-', {
                    text: "添加商品",
                    iconCls: null,
                    glyph: 88,
                    xtype: 'button',
                    handle: "onAddProduct"
                }]
        }],
        columns: [
            {
                text: "序号",
                dataIndex: "id",
                width:50,
                align:'center'
            }, {
                text: "商品名称",
                dataIndex: "product_name",
                flex:1,
                align:'center'
            }, {
                text: "标识",
                dataIndex: "product_identification",
                flex:1,
                align:'center'
            }, {
                type:"date",
                text: "注册时间",
                dataIndex: "register_time",
                formatter: 'date("m/d/Y h:m:s")',
                width:200,
                align:'center'
            }, {
                text: "操作",
                xtype: 'actioncolumn',
                align:'center',
                items: [{
                    iconCls: 'x-fa fa-cog',
                    tooltip: '编辑',
                }, {
                    iconCls: 'x-fa fa-cog',
                    tooltip: '发码',
                }]
            }
        ]

    }
});
