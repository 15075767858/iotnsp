Ext.define('iotnsp.view.productmanage.ProductAdd', {
//    extend: 'iotnsp.view.window.FullScreenWindow',
    extend: 'Ext.window.Window',
    requires: [
        'iotnsp.view.productmanage.ProductAddController',
        'iotnsp.view.productmanage.ProductAddModel'
    ],

    controller: 'productmanage-productadd',
    viewModel: {
        type: 'productmanage-productadd'
    },
    // controller: 'productmanage-productmanage',
    // viewModel: {
    //     type: 'productmanage-productmanage'
    // },

    autoShow: true,
    xtype: 'productadd',
    title: '添加商品',

    ghost: false,
    listeners: {
        boxready: 'boxready'
    },
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            width: 300,
            items: [
                {
                    fieldLabel: '产品标识',
                    xtype: 'textfield',
                    emptyText: '英文字母或数字',
                    allowBlank:false,
                    bind: '{product.indentifier}'

                },
                {
                    xtype: 'checkbox',
                    boxLabel: '自动创建标识符',

                },
                {
                    fieldLabel: '产品名称',
                    allowBlank:false,
                    xtype: 'textfield',
                    emptyText: '请输入产品名称',
                    bind: '{product.name}'
                },
                {
                    fieldLabel: '生产企业',
                    allowBlank:false,
                    editable:false,
                    xtype: 'textfield',
                    bind: "{loginUser.true_name}"
                },
                {
                    fieldLabel: '模版选择',
                    xtype: 'combo',
                    emptyText: '选择模版',
                    allowBlank:false,
                    reference:'templateCombo',
                    bind: {
                        value: '{product.template_id}',
                        store: '{loginUser.templates}'
                    },
                    valueField: 'id',
                    displayField: 'name'
                },
                {
                    defaults: {
                        margin: 10
                    },
                    layout: {
                        type: 'hbox',
                        pack: 'start',
                        align: 'stretch'
                    },
                    items: [
                        {
                            flex: 1,
                            xtype: 'button',
                            text: '创建新模版',
                            handler: 'createTemplate'
                        },
                        {
                            bind:{
                              disabled:'{!templateCombo.selection}'
                            },
                            flex: 1,
                            xtype: 'button',
                            text: '模版编辑',
                            handler: 'editTemplate'
                        }
                    ]
                },
                {
                    width: '100%',
                    xtype: 'button',
                    formBind: true,
                    text: '保存',
                    handler: 'saveProduct'
                }
            ]
        }
    ]

});
