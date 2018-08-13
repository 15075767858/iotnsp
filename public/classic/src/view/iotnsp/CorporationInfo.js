Ext.define('iotnsp.view.iotnsp.CorporationInfo', {
    extend: 'Ext.panel.Panel',

    xtype: 'corporationinfo',
    requires: [
        'iotnsp.view.iotnsp.CorporationInfoController',
        'iotnsp.view.iotnsp.CorporationInfoModel',
    ],

    controller: 'iotnsp-corporationinfo',
    viewModel: {
        type: 'iotnsp-corporationinfo'
    },
    title: '企业信息',

    layout: {
        type: 'vbox',
        align:'stretch'
    },
    listeners:{
        boxready :"boxready"
    },
    height: 300,
    bodyPadding: 10,
    items: [
        {
            flex: 8,
            layout: {
                type: 'hbox',
                align:'stretchmax'
            },
            defaults: {
                flex: 1
            },
            items: [
                {
                    layout: {
                        type: 'hbox',
                        align:'stretch'
                    },
                    items: [{
                        xtype: 'image',
                        width: 100,
                        height: 100,
                        bind: {
                            src: '{corporation.logo}'
                        }
                    },
                        {
                            xtype: 'image',
                            width: 100,
                            height: 100,
                            bind: {
                                src: '{corporation.license_url}'
                            }
                        },

                    ]
                },
                {
                    layout: 'vbox',
                    defaults: {
                        flex: 1
                    },
                    height: 200,
                    items: [
                        {
                            bind: {
                                html: '公司名称：{corporation.true_name}'
                            }
                        },
                        {
                            bind: {
                                html: '服务年限：'
                            }
                        }, {
                            bind: {
                                html: '公司网址：{corporation.site||"无"}'
                            }
                        }
                    ]
                },
                {
                    layout: 'vbox',
                    defaults: {
                        flex: 1
                    },
                    height: 200,
                    items: [
                        {
                            bind: {
                                html: '联系人：{corporation.linkman}'
                            }
                        }, {
                            bind: {
                                html: '标识域：{corporation.domain}'
                            }
                        }, {
                            bind: {
                                html: '联系方式：{corporation.phone}'
                            }
                        }
                    ]
                }

            ]
        },
        {
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'

            },
            defaults: {
                flex: 1,

            },
            items: [{
                bind: {
                    html: '产品：{corporation.contact_name}'
                }
            },
                {
                    bind: {
                        html: '累计发码量：{corporation.contact_name}'
                    }
                },
                {
                    bind: {
                        html: '累计发码量：{corporation.contact_name}'
                    }
                },
                {
                    bind: {
                        html: '服务到期： '
                    }
                }]
        }
    ],
});