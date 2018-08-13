
Ext.define('iotnsp.view.authentication.Login',{
    extend: 'iotnsp.view.authentication.LockingWindow',

    requires: [

        'iotnsp.view.authentication.AuthDialog'
    ],
    xtype:"login",

    title: '中科物联国物标识管理登录',
    defaultFocus: 'authdialog', // Focus the Auth Form to force field focus as well

    items: [
        {
            xtype: 'authdialog',
            defaultButton : 'loginButton',
            autoComplete: true,
            bodyPadding: '20 20',
            header: false,
            width: 415,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults : {
                margin : '5 0'
            },
            url:"/v1/auth/login",
            items: [
                {
                    xtype: 'label',
                    text: '登录您的账户'
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    vtype: 'email',
                    bind: '{login.email}',
                    height: 55,
                    hideLabel: true,
                    allowBlank : false,
                    emptyText: '请输入账户邮箱',
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-email-trigger'
                        }
                    }
                },
                {
                    xtype: 'textfield',
                    height: 55,
                    hideLabel: true,
                    emptyText: '请输入登录密码',
                    inputType: 'password',
                    name: 'password',
                    bind: '{login.password}',
                    allowBlank : false,
                    triggers: {
                        glyphed: {
                            cls: 'trigger-glyph-noop auth-password-trigger'
                        }
                    }
                },
                {
                    xtype: 'container',
                    layout: 'hbox',
                    items: [
                        {
                            //hidden:true,
                            xtype: 'checkboxfield',
                            flex : 1,
                            //cls: 'form-panel-font-color rememberMeCheckbox',
                            height: 30,
                            //bind: '{persist}',
                            boxLabel: '记住账号'
                        },
                        {
                            hidden:true,
                            xtype: 'box',
                            html: '<a href="#passwordreset" class="link-forgot-password"> 忘记密码?</a> '
                        },

                        {
                            xtype:'box',
                            html: ' <a href="#register" class="link-forgot-password"> 注册账号</a>'
                        }
                    ]
                },
                {
                    xtype: 'button',
                    reference: 'loginButton',
                    scale: 'large',
                    //ui: 'soft-green',
                    iconAlign: 'right',
                    iconCls: 'x-fa fa-angle-right',
                    text: 'Login',
                    formBind: true,
                    listeners: {
                        click: 'onLoginButton'
                    }
                }
            ]
        }
    ],
});
