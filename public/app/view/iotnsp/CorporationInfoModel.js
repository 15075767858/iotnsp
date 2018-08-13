Ext.define('iotnsp.view.iotnsp.CorporationInfoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.iotnsp-corporationinfo',
    data: {
        corporation_logo: "resources/test/qiye_logo.jpg"
    },
    links: {
        corporation: {
            type: "User",
            create:true
        }
    }

});
