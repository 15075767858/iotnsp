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
    controller: 'productmanage-productmanage',
    viewModel: {
        type: 'productmanage-productmanage'
    },
    xtype: 'addproduct',

    title:"产品添加",

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
                },
                {
                    xtype: 'checkbox',
                    boxLabel: '自动创建标识符'
                },
                {
                    xtype: 'textfield',
                    emptyText: '产品名称',
                },
                {
                    xtype: 'textfield',
                    emptyText: '识别码序号',
                },
                {
                    xtype: 'textfield',
                    emptyText: '',
                },
                {
                    xtype:'button',
                    text:'下一步',
                    handler:function(){
                        Ext.create("iotnsp.view.productmanage.TemplateEdit")
                    }
                }
            ]
        }
    ]

});
