Ext.define('iotnsp.view.productmanage.ProductList', {
    extend: 'Ext.grid.Panel',

    requires: [
        //'iotnsp.view.productmanage.ProductListController',
        //'iotnsp.view.productmanage.ProductListModel',
        //'iotnsp.view.productmanage.ProductManage'
    ],
    id: 'b',

    // controller: 'productmanage-productlist',
    // viewModel: {
    //     type: 'productmanage-productlist'
    // },
    controller: 'productmanage-productmanage',
    viewModel: {
        type: 'productmanage-productmanage'
    },
    userCls: 'big-100',
    title: "产品列表",
    xtype: 'productlist',
    store: {
        type: 'Products'
    },
    listeners:{
        boxready:function () {
            new iotnsp.view.productmanage.TemplateEdit
        }
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
                handler: "onAddProduct"
            }
            ]
    }],
    columns: [
        {
            text: "序号",
            dataIndex: "id",
            width: 50,
            align: 'center'
        }, {
            text: "商品名称",
            dataIndex: "name",
            flex: 1,
            align: 'center'
        }, {
            text: "标识",
            dataIndex: "identifier",
            flex: 1,
            align: 'center'
        }, {
            type: "date",
            text: "注册时间",
            dataIndex: "create_time",
            formatter: 'date("m/d/Y h:m:s")',
            width: 200,
            align: 'center'
        }, {
            text: "操作",
            xtype: 'actioncolumn',
            align: 'center',
            items: [{
                iconCls: 'x-fa fa-pencil',
                //row:"<div>dfaf</div>"
                //iconCls: 'x-fa fa-cog',
                tooltip: '编辑',
            }, {
                iconCls: 'x-fa fa-file',
                tooltip: '发码',
            }]
        }
    ]

});
