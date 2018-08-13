Ext.define('iotnsp.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    fields: [{
        name: 'text'
    }],
    storeId: 'NavigationTree',

    root: {
        expanded: true,
        children: [{
                text: '企业概况',
                leaf: true,
                viewType: "iotnsp",
                iconCls: 'x-fa fa-bookmark-o'
            },
            {
                text: '生产定制管理',
                expanded: true,
                iconCls: 'x-fa fa-folder',
                children: [{
                    text: '产品管理',
                    leaf: true,
                    viewType: "productmanage",
                    iconCls: 'x-fa fa-book'
                }, {
                    text: '包装管理',
                    leaf: true,
                    viewType:"PackageManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }, {
                    text: '生产管理',
                    leaf: true,
                    viewType: "ProductionManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }, {
                    text: '费码处理',
                    leaf: true,
                    viewType:"BadcodeManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }, {
                    text: '经销商管理',
                    leaf: true,
                    viewType:"AgencyManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }, {
                    text: '销售管理',
                    leaf: true,
                    viewType:"SalesManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }, {
                    text: '退货管理',
                    leaf: true,
                    viewType:"ReturnsManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }, {
                    text: '定制管理',
                    leaf: true,
                    viewType:"CustomizedManage",
                    iconCls: 'x-fa fa-graduation-cap'
                }]
            }, {
                text: '基础信息记录',
                iconCls: 'x-fa fa-usd',
                children: [{
                        text: '码库记录',
                        leaf: true,
                        viewType:"CodeRecord",
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '包装码记录',
                        leaf: true,
                        viewType:"PackageManage",
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '扫描记录',
                        leaf: true,
                        viewType:"ScanRecord",
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '退码记录',
                        leaf: true,
                        viewType:"ReturnsCodeRecord",
                        iconCls: 'x-fa fa-book'
                    }, {
                        text: '费码记录',
                        leaf: true,
                        viewType:"BadcodeRecord",
                        iconCls: 'x-fa fa-book'
                    }
                ]
            }, {
                text: '防伪防窜',
                iconCls: 'x-fa fa-usd',
                children: [{
                        text: '扫描概览',
                        leaf: true,
                        viewType:"ScanOverview",
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '异常地图',
                        leaf: true,
                        viewType:"FakeMap",
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '异常记录',
                        leaf: true,
                        viewType:"FakeRecord",
                        iconCls: 'x-fa fa-book'
                    }
                ]
            },
            {
                text: '活动调研管理',
                iconCls: 'x-fa fa-usd',
                children: [{
                        text: '活动列表',
                        leaf: true,
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '派奖管理',
                        leaf: true,
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '短信记录',
                        leaf: true,
                        viewType:"MsgRecord",
                        iconCls: 'x-fa fa-book'
                    }
                ]
            }, {
                text: '资金管理',
                iconCls: 'x-fa fa-usd',
                children: [{
                        text: '收支明细',
                        leaf: true,
                        viewType:"AccountDetail",
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '充值管理',
                        leaf: true,
                        viewType:"RechargeRecord",
                        iconCls: 'x-fa fa-book'
                    }
                ]
            }, {
                text: '系统设置',
                iconCls: 'x-fa fa-usd',
                children: [{
                    text: '账号中心',
                    leaf: true,
                    viewType:"PasswordSetting",
                    iconCls: 'x-fa fa-book'
                }]
            }, {
                text: '账户操作',
                visible: true,
                iconCls: 'x-fa fa-usd',
                children: [
                    {
                      text:'注册',
                      viewType:'register',
                      leaf:true
                    },
                    {
                        text: '登录',
                        viewType: "login",
                        leaf: true,
                        iconCls: 'x-fa fa-book'
                    },
                    {
                        text: '密码重置',
                        viewType: "passwordreset",
                        leaf: true,
                        iconCls: 'x-fa fa-book'
                    }
                ]
            }
        ]
    }

});