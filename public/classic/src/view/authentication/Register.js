Ext.define('iotnsp.view.authentication.Register', {
    extend: 'iotnsp.view.authentication.LockingWindow',
    xtype: 'register',


    title: '注册',
    defaultFocus: 'authdialog',  // Focus the Auth Form to force field focus as well
    scrollable: 'y',
    items: [
        {
            xtype: 'authdialog',
            bodyPadding: '20 20',
            width: 455,
            reference: 'authDialog',
            defaultButton: 'submitButton',
            autoComplete: true,
            //cls: 'auth-dialog-register',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                margin: '10 0',
                selectOnFocus: true
            },
            url: "/v1/auth/register",
            items: [
                {
                    xtype: 'label',
                    //cls: 'lock-screen-top-label',
                    text: '创建邮箱账户'
                },
                {
                    xtype: 'textfield',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    name: 'email',
                    bind: '{register.email}',
                    emptyText: '请输入您的邮箱',
                    vtype: 'email',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-envelope-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    //allowBlank: false,
                    emptyText: '密码',
                    name: 'password',
                    inputType: 'password',
                    bind: '{register.password}',
                    validator: function (val) {
                        var errMsg = '以字母开头，长度在6-12之间，必须包含数字和特殊字符';
                        if (!/[a-z](.){6,10}$/i.test(val)) {
                            return errMsg;
                        }
                        if (!/\W+/.test(val)) {
                            return errMsg;
                        }
                        if (!/\d+/.test(val)) {
                            return errMsg
                        }

                        return true;
                    },
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: true,
                    value: "lzc123122@",
                    submitValue: false,
                    emptyText: '确认密码',
                    disabled:true,

                    validator: function (val) {
                        var viewModel = this.lookupController().getViewModel()
                        var pwd = viewModel.data.register.get('password')
                        if (val != pwd) {
                            return "两次密码输入不一致"
                        }
                        return true;
                    },
                    inputType: 'password',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: '企业名称',
                    bind: '{register.true_name}',
                    name: 'true_name',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'combo',
                    store: {
                        type: 'provinces'
                    },
                    listeners: {
                        change: 'provinceChange'
                    },
                    valueField: 'province_code',
                    displayField: 'region_name',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: true,
                    emptyText: '企业所在省',
                    submitValue: false,
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'combo',
                    store: {
                        type: 'citys',
                        filters: [{
                            property: 'province_code',
                            value: /W+/
                        }]
                    },
                    reference: 'city',
                    valueField: 'city_code',
                    displayField: 'region_name',
                    listeners: {
                        change: 'cityChange',
                    },
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: true,
                    submitValue: false,
                    emptyText: '企业所在市',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'combo',
                    store: {
                        type: 'regions',
                        filters: [{
                            property: 'city_code',
                            value: /W+/
                        }]
                    },
                    reference: 'region',
                    valueField: 'region_code',
                    displayField: 'region_name',
                    //cls: 'auth-textbox',
                    bind: '{register.region_code}',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: '企业所在区',
                    name: 'region_code',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    bind: '{register.address}',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: '企业地址',
                    name: 'address',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'combo',
                    //cls: 'auth-textbox',
                    height: 55,
                    store: 'Industry',
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: '所属行业分类',
                    name: 'code_i',
                    valueField: 'code',
                    displayField: 'industry',
                    bind: '{register.code_i}',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    bind: '{register.linkman}',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: '企业联系人姓名',
                    name: 'linkman',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    //cls: 'auth-textbox',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    bind: '{register.phone}',
                    emptyText: '请输入联系人手机号码',
                    name: 'phone',
                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    height: 55,
                    hideLabel: true,
                    allowBlank: false,
                    emptyText: '请输入营业执照号码',
                    name: 'license_code',
                    bind: '{register.license_code}',

                    triggers: {
                        glyphed: {
                            //cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },

                {
                    xtype: 'checkbox',
                    flex: 1,
                    name: 'agrees',
                    submitValue:false,
                    //cls: 'form-panel-font-color rememberMeCheckbox',
                    height: 32,
                    allowBlank: false,
                    value: true,
                    boxLabel: '我同意',

                    // In this case, the form operation is not VALID unless Terms are agreed upon
                    isValid: function () {
                        var me = this;
                        return me.checked || me.disabled;
                    }
                },

                {
                    xtype: 'button',
                    scale: 'large',
                    //ui: 'soft-blue',
                    formBind: true,
                    reference: 'submitButton',
                    bind: false,
                    margin: '5 0',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: '注册',
                    handler: "onSignupClick",
                    listeners: {
                        // click: ''
                    }
                },
                {
                    xtype: 'component',
                    html: '<div style="text-align:right">' +
                    '<a href="#login" class="link-forgot-password">' +
                    '返回登录</a>' +
                    '</div>'
                }
            ]
        }
    ]
});
