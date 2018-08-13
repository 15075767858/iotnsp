Ext.define('iotnsp.main.NavigationController', {
    extend: 'Ext.app.ViewController',

    isLogin: function () {
        var token = Ext.util.Cookies.get('api_token');
        if(!token){
            this.redirectTo('login')
        }
    }
});
