Ext.define('iotnsp.view.productmanage.TemplateEdit', {
//    extend: 'Ext.window.Window',
    extend: 'iotnsp.view.window.FullScreenWindow',

    requires: [
        'iotnsp.view.productmanage.TemplateEditController',
        'iotnsp.view.productmanage.TemplateEditModel'
    ],

    controller: 'productmanage-templateedit',
    viewModel: {
        type: 'productmanage-templateedit'
    },
    xtype: "templateedit",
    autoShow: true,
    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    title: '模版管理',

    defaults: {
        border: 1,
        //height: '100%',

    },
    items: [
        {
            flex: 1,
            defaultType: "button",
            layout: {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
            defaults: {
                margin: 10
            },
            items: [
                {
                    text: '扫码主页展示区'
                }, {
                    text: '导航一'
                }, {
                    text: '导航二'
                }, {
                    text: '导航三'
                },
            ]
        },

        {
            scrollable: 'y',
            flex: 3,
            defaults: {
                width: '100%',
                margin: 0
            },
            items: [
                {
                    xtype: 'textfield',
                    emptyText: '请输入标题'
                },
                {
                    xtype: 'image',
                    src: 'http://v2.cniotroot.cn/static/v1/images/templateEdit/style3.png',
                    width: '100%'
                },
                {
                    //xtype: 'panel',
                    //height:100,
                    layout: {
                        type: 'hbox',
                        align: 'stretchmax'
                    },

                    items: [
                        {
                            xtype: 'image',
                            src: '/resources/test/qiye_logo.jpg',
                            width: '30%',
                            height: 100
                        },
                        {
                            margin: 10,
                            width: '70%',
                            bind: {
                                html: "<h3>qee</h3><div>物联网标识：xxxxx</div><div>生产厂家：沧州盐业集团公司</div>",
                            }
                        }
                    ]
                }, {
                    title: "扫码提示",
                    html: '<div>该标识由国家物联网标识平台签发授权 沧州盐业集团有限公司 商品溯源防伪使用。</div>' +
                    '<div>该标识码无异常记录，请核实实物。</div>'
                },
                {
                    reference: 'modulegridcontainer',
                    items: [{
                        title: '1',
                        xtype: 'modulegrid'
                    }, {
                        title: '2',
                        xtype: 'modulegrid'
                    }, {
                        title: '3',
                        xtype: 'modulegrid'
                    }]
                },
                {
                    xtype: 'testcom'
                },
                {
                    xtype: 'button',
                    text: '点我添加模块',
                    handler: 'addModuleGrid'
                }
            ]
        },
        {
            flex: 3,
            xtype: 'editform',
        }
    ],
    listeners: {
        boxready: function () {
            a = this.viewModel
        }
    },
});


Ext.define('iotnsp.view.productmanage.TemplateEdit.ModuleGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'modulegrid',
    title: '基本信息',
    reference: 'modelgrid',
    tools: [
        {
            //type: 'up',
            iconCls: 'x-fa fa-arrow-down',
            handler: 'moduleMove',
            type: 'down'
            //toggleValue: false,
        }, {
            iconCls: 'x-fa fa-arrow-up',
            handler: 'moduleMove',
            type: 'up'
        }, {
            iconCls: 'x-fa fa-plus',
            handler: 'addModuleGrid'
            //type: 'plus'
        }, {
            iconCls: 'x-fa fa-close',
            handler: function (event, el, header, tool) {
                header.up().destroy()
            }
            //type: 'minus'
        }
    ],
    defaults: {
        width: '100%'
    },
    store: {
        data: [{
            relation_system: true,
            field_name: '1',
            field_value: 'bb',
            field_type: 'string',
            index: 1
        }, {
            relation_system: false,
            field_name: '2',
            field_value: new Date(),
            field_type: 'date',
            index: 2
        },
            {
                relation_system: false,
                field_name: '2',
                field_value: new Date(),
                field_type: 'date',
                index: 2
            },
            {
                relation_system: false,
                field_name: '3',
                field_value: 'dd',
                field_type: 'img',
                index: 2
            }, {
                relation_system: false,
                field_name: '4',
                field_value: 'dd',
                field_type: 'string',
                index: 2
            }]
    },
    stateful: true,
    columns: [
        {
            text: '关联系统',
            xtype: 'checkcolumn',
            dataIndex: 'relation_system'
        },
        {
            text: '字段名',
            dataIndex: 'field_name'
        },
        {
            text: '字段值',
            dataIndex: 'field_value',
            renderer: function (v) {
                if (v instanceof Date) {
                    return v.toLocaleDateString()
                }
                return v;
            }
        },
        {
            text: '类型',
            dataIndex: 'field_type'
        }, {
            text: 'actions',
            xtype: 'actioncolumn',
            width: 88,
            items: [
                {
                    iconCls: 'x-fa fa-arrow-down',
                    handler: function (grid, rowIndex, colIndex) {
                        v = this.up('window').viewModel
                        var rec = grid.store.getAt(rowIndex)
                        grid.store.insert(rowIndex + 1, rec)
                    }
                }, {
                    iconCls: 'x-fa fa-arrow-up',
                    handler: function (grid, rowIndex, colIndex) {
                        var rec = grid.store.getAt(rowIndex)
                        grid.store.insert(rowIndex == 0 ? rowIndex : rowIndex - 1, rec)
                    }
                }, {
                    iconCls: 'x-fa fa-plus',
                    handler: function (grid, rowIndex, colIndex) {
                        grid.store.insert(rowIndex + 1, {})
                    }
                }, {
                    iconCls: 'x-fa fa-minus',
                    handler: function (grid, rowIndex, colIndex) {
                        grid.store.removeAt(rowIndex)
                    }
                }
            ]
        },

    ]

})

Ext.define('editform',
    {
        xtype: 'editform',
        extend: 'Ext.form.Panel',
        title: '栏目编辑',
        bodyPadding: 10,
        controller: 'productmanage-templateedit',
        viewModel: {
            type: 'productmanage-templateedit'
        },

        items: [
            {
                xtype: 'DateTimeField'
            },
            {
                xtype: 'textfield',
                fieldLabel: '字段名称',
                bind: '{modelgrid.selection.field_name}'

            }, {
                xtype: 'fieldcontainer',
                fieldLabel: '关联系统数据',
                defaultType: 'radiofield',
                defaults: {
                    flex: 1
                },
                layout: 'hbox',
                items: [
                    {
                        boxLabel: '不关联',
                        name: 'size',
                        inputValue: 'm',
                        id: 'radio1',
                        bind: '{!modelgrid.selection.relation_system}',
                        reference: 'relationNormal',
                    },
                    {
                        boxLabel: '关联',
                        name: 'size',
                        inputValue: 'l',
                        id: 'radio2',
                        bind: '{modelgrid.selection.relation_system}',
                        reference: 'relationSystem',
                    },

                ]
            },
            {
                bind: {
                    disabled: '{!relationNormal.checked}',
                    hidden: '{!relationNormal.checked}'
                },
                items: [
                    {
                        fieldLabel: '选择字段类型',
                        xtype: 'combo',
                        reference: 'fieldType',
                        bind: '{modelgrid.selection.field_type}',
                        store: {
                            storeId: 'aaa',
                            field: ['name', 'type'],
                            data: [
                                {name: '字段文本', type: 'string', selected: true},
                                {name: '时间文本', type: 'date'},
                                {name: '图片链接', type: 'img'},
                                {name: '样式文本', type: 'html'},
                                {name: '视频', type: 'video'},
                                {name: '图片组', type: 'imgs'}
                            ]
                        },
                        value: 'string',
                        valueField: 'type',
                        displayField: 'name'
                    },
                    {
                        bind: {
                            disabled: '{relationSystem.checked}',
                            hidden: '{relationSystem.checked}'
                        },
                        xtype: 'container',
                        items: [
                            {
                                xtype: 'textfield',
                                emptyText: '字段内容',
                                bind: {
                                    disabled: '{fieldType.selection.type!="string"}',
                                    hidden: '{fieldType.selection.type!="string"}',
                                    value: '{modelgrid.selection.field_value}',
                                }
                            },
                            {
                                bind: {
                                    disabled: '{fieldType.selection.type!="date"}',
                                    hidden: '{fieldType.selection.type!="date"}',
                                },
                                xtype: 'fieldcontainer',
                                fieldLabel: '时间选择',
                                items: [
                                    {
                                        xtype: 'datefield',
                                        emptyText: '选择日期',
                                        bind: '{modelgrid.selection.field_value}',
                                    },

                                ]
                            },
                            {
                                xtype: 'fieldcontainer',
                                bind: {
                                    disabled: '{fieldType.selection.type!="img"}',
                                    hidden: '{fieldType.selection.type!="img"}',
                                },
                                fieldLabel: '时间选择',
                                items: [
                                    {
                                        xtype: 'form',
                                        url: '/v1/upload/img',
                                        items: [{
                                            xtype: 'filefield',
                                            fieldLabel: '图片',
                                            msgTarget: 'side',
                                            allowBlank: false,
                                            anchor: '100%',
                                            name:'img',
                                            buttonText: '选择图片',
                                            accept: 'image/jpeg,image/png,image/x-ms-bmp',
                                            listeners: {
                                                change: function (img) {
                                                    img.up('form').submit({
                                                        waitMsg: 'Uploading your photo...',
                                                        success:function(form, action){

                                                            console.log(arguments)
                                                        },
                                                        failure:function(){
                                                            console.log(arguments)
                                                        }
                                                    })
                                                }
                                            }
                                        }]
                                    },
                                    {
                                        xtype: 'image',
                                        width: 100,
                                        height: 100,
                                        border: '1px red solid',
                                        bind: '{modelgrid.selection.field_value}'
                                    }
                                ]
                            },
                            {
                                bind: {
                                    disabled: '{fieldType.selection.type!="html"}',
                                    hidden: '{fieldType.selection.type!="html"}',
                                },
                                xtype: 'htmleditor'
                            },
                            {
                                bind: {
                                    disabled: '{fieldType.selection.type!="video"}',
                                    hidden: '{fieldType.selection.type!="video"}',
                                },
                                items: [
                                    {

                                        xtype: 'textfield',
                                        emptyText: '视频描述',
                                    }, {
                                        xtype: 'textfield',
                                        emptyText: '视频链接'
                                    }
                                ]
                            },
                            {
                                bind: {
                                    disabled: '{fieldType.selection.type!="images"}',
                                    hidden: '{fieldType.selection.type!="images"}',
                                },
                                items: [
                                    {
                                        xtype: 'filefield',
                                        fieldLabel: '图片',
                                        msgTarget: 'side',
                                        allowBlank: false,
                                        anchor: '100%',
                                        buttonText: '选择图片',
                                    }
                                ]
                            }

                        ]
                    },
                ]
            },

            {

                xtype: 'container',
                bind: {
                    disabled: '{!relationSystem.checked}',
                    hidden: '{!relationSystem.checked}'
                },
                items: {
                    bind: '{modelgrid.selection.field_type}',
                    xtype: 'combo',
                    valueField: 'type',
                    displayField: 'name',
                    store: {
                        field: ['name', 'type'],
                        data: [
                            {name: '经销商', type: 'retailer'},
                            {name: '订单号', type: 'order'},
                            {name: '生产批次', type: 'produce_batch'},
                            {name: '物联网标识', type: 'iot_id'},
                            {name: '生产时间', type: 'produce_time'},
                            {name: '出货日期', type: 'order_time'}
                        ]
                    }
                }
            }
        ]
    })

Ext.define('DateTimeField', {
    extend: 'Ext.form.field.Base',
    xtype: 'DateTimeField',
    items: [
        {
            xtype: 'datefield',
            emptyText: '选择日期',
        },
        {
            xtype: 'timefield',
            emptyText: '选择时间',
        }
    ]

})

Ext.define('testcom', {
    xtype: 'testcom',
    extend: 'Ext.Component',
    mixins: {
        labelable: 'Ext.form.Labelable',
        fieldAncestor: 'Ext.form.FieldAncestor'
    },
    childEls: [
        'containerEl'
    ],
    viewModel: {
        data: {
            a: {
                aaa: ['q', 'w', 'e']
            }
        }
    },

    itemSelector: 'div.dataview-multisort-item',
    height: 100,
    // bind:{
    //   data:"{a}"
    // },
    data: {
        a: 'aa',
        b: 'bb',
        c: false
    },
    tpl: '<div class="weather-image-container"><img src="resources/images/icons/{.}" alt=""/></div>' +
    '<div class="weather-details-container">' +
    '<div>asd</div>' +
    '<tpl foreach=".">-{$}-{.}-<br>' +
    '<tpl if={.}>{[1/2]}</tpl>' +
    '</tpl>' +
    '</div>'
    // initComponent:function(){
    //     var me = this;
    //
    //     me.callParent()
    //     // Init mixins
    //     me.initLabelable();
    //
    // },
    // fieldLabel:"bbb",
    //html:'aaaaa'

})
