/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('iotnsp.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'iotnsp.view.main.MainController',
        'iotnsp.view.main.MainModel',
        'iotnsp.view.main.List',
        'Ext.list.Tree'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    controller: 'main',
    viewModel: 'main',
    listeners: {
        boxready: "onLogin"
    },
    items: [{
        xtype: "toolbar",
        height: 70,
        cls: "shadow",
        border: '0 0 1 0',
        items: [{
            xtype: "component",
            html: '<div class="main-logo"><img height="60px" src="resources/images/logo.png"></div>',
        },
            "->",
            {
                xtype: "image",
                reference: "acount_logo",
                height: 35,
                width: 35,
                bind:{
                    src:'{user.logo}'
                }
            },
            {
                reference: "acount",
                xtype: "component",
                bind: {
                    html: "{user.email}"
                }
            },
            {
                iconCls: 'x-fa fa-envelope',
                href: '#email',
                hrefTarget: '_self',
                tooltip: 'Check your email',
                html: "0"
            },
            {
                html: "退出登录"
            }
        ]
    },
        {
            scrollable: 'y',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretchmax',

                // Tell the layout to animate the x/width of the child items.
                animate: true,
                animatePolicy: {
                    x: true,
                    width: true
                }
            },


            items: [{
                reference: 'navigationTreeList',
                xtype: "treelist",
                width: 230,
                scrollable: true,
                ui: 'navigation',
                store: "NavigationTree",
                listeners: {
                    selectionchange: 'onNavigationTreeSelectionChange'
                }
            },
                {
                    //margin:10,
                    //xtype: "container",
                    flex: 1,
                    //hidden:true,
                    cls: 'main-container',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    },
                    scrollable: true,
                    navigationBar: false,
                    reference: 'mainCardPanel',
                    items: [{
                        xtype: "iotnsp"
                    },]
                }
            ]
        }
    ]
});