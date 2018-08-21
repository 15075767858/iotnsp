Ext.define('iotnsp.view.productmanage.TemplateEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productmanage-templateedit',
    moduleMove: function (e, el, header, tool) {
        var grid = header.up();
        var refs = this.view.getReferences();
        var modulegridcontainer = refs['modulegridcontainer'];
        var items = modulegridcontainer.items;
        var index = items.indexMap[grid.id];
        if (tool.type == 'down') {
            modulegridcontainer.insert(index + 1, grid)
        }
        if(tool.type=='up'){
            modulegridcontainer.insert(index == 0 ? index : index - 1, grid)
        }
    },
    addModuleGrid: function (button) {
        var refs = this.view.getReferences();
        refs['modulegridcontainer'].add(Ext.widget('modulegrid'))
    },


});
