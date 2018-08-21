Ext.define('iotnsp.view.productmanage.TemplateEditModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productmanage-templateedit',
    data: {
        name: 'iotnsp'
    },
    formulas: {
        selectFieldDate:function(get){
            console.log(get)
            var date = get('modelgrid.selection.field_value');

            console.log(date)
            return new Date()
        },
        selectFieldTime:function(get){

        }

    }

});
