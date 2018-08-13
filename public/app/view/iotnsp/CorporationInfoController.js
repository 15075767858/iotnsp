Ext.define('iotnsp.view.iotnsp.CorporationInfoController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.iotnsp-corporationinfo',
    boxready: function () {
        var viewModel = this.getViewModel();
        var corporation = viewModel.data.corporation;
        console.log(corporation)
        // id:Ext.util.Cookies.get('id')||1
        corporation.setId(Ext.util.Cookies.get('id')||'');
        viewModel.data.corporation.load({
            success:function () {
                console.log(corporation)
                console.log(arguments)
            }
        })
        //console.log('show',viewModel)
    }

});
