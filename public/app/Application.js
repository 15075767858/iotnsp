/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('iotnsp.Application', {
    extend: 'Ext.app.Application',

    name: 'iotnsp',
    stores: [
        'NavigationTree',
        'Industry',
        'Templates'
        // TODO: add global / shared stores here
    ],
    models: [
        'User', 'Product', 'Template'
    ],
    //defaultToken: "iotnsp",
    config: {
        //loginUser: null,
    },
    launch: function () {
        var me = this;
        if (Ext.util.Cookies.get('api_token')) {
            var userModel = this.getModel('User')
            var user = new userModel;
            user.setId(Ext.util.Cookies.get('id'))
            user.load({
                success: function () {
                    //iotnsp.app.setLoginUser(user)
                    me.setMainView('iotnsp.view.main.Main')
                    me.getMainView().getViewModel().setLinks({
                        loginUser:user
                    })
                },
                failure: function () {
                    Ext.create('iotnsp.view.authentication.Login')
                }
            })
        } else {
            Ext.create('iotnsp.view.authentication.Login')

            //this.redirectTo('login')
        }

        // TODO - Launch the application
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
