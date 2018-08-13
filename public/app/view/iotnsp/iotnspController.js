Ext.define('iotnsp.view.iotnsp.iotnspController', {
    //extend: 'Ext.app.ViewController',
    extend:'iotnsp.main.NavigationController',
    alias: 'controller.iotnsp-iotnsp',

    boxready:function(){
        this.isLogin()
    }
});
