Ext.define('iotnsp.view.productmanage.ProductAdd', {
    extend: 'iotnsp.view.window.FullScreenWindow',

    // requires: [
    //     'iotnsp.view.productmanage.ProductAddController',
    //     'iotnsp.view.productmanage.ProductAddModel'
    // ],
    //
    // controller: 'productmanage-productadd',
    // viewModel: {
    //     type: 'productmanage-productadd'
    // },
    // controller: 'productmanage-productmanage',
    // viewModel: {
    //     type: 'productmanage-productmanage'
    // },

    xtype: 'productadd',
    title: '添加商品',
    viewModel: {
        links: {
            product: {
                type: "Product",
                create: true
            }
        }
    },

    listeners: {
        boxready: function (win) {
            var me = win;
            var viewModel = me.viewModel;
            if (me.product) {
                me.setTitle("修改商品")
                viewModel.set('product', me.product)
            }
        }
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
            items: [
                {
                    xtype: 'textfield',
                    emptyText: '产品标识（英文字母或数字）',
                    bind: '{product.indentifier}'
                },
                {
                    xtype: 'checkbox',
                    boxLabel: '自动创建标识符',
                },
                {
                    xtype: 'textfield',
                    emptyText: '产品名称',
                    bind: '{product.name}'
                },
                {
                    xtype: 'textfield',
                    emptyText: '生产企业',
                    bind: "{loginUser.true_name}"
                },
                {
                    xtype: 'combo',

                },
                {
                    xtype: 'button',
                    text: '下一步',
                    handler: function () {
                        Ext.create("iotnsp.view.productmanage.TemplateEdit")
                    }
                }
            ]
        }
    ]

});
