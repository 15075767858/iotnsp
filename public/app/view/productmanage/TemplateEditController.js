Ext.define('iotnsp.view.productmanage.TemplateEditController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.productmanage-templateedit',
    bindings: {},
    templateReady: function () {
        var viewModel = this.getViewModel()
        //viewModel.set('editDisplay','')
        var refs = this.view.getReferences();
        a=viewModel
    },
    getTemplateData: function () {
        var data = {
            pageTitle: '',
            nav1_name: '',
            nav1_value: '',
            nav2_name: '',
            nav2_value: '',
            nav3_name: '',
            nav3_value: '',
            modules: []
        }
        var viewModel = this.getViewModel();
        Ext.apply(data, viewModel.data.template);
        var refs = this.view.getReferences();
        var modContainer = refs['modulegridcontainer'];
        for (var i = 0; i < modContainer.items.length; i++) {
            var grid = modContainer.items.items[i];
            var store = grid.store;
            var dataItems = store.getData().items;
            var arr = [];
            dataItems.forEach(function (v) {
                delete v.data.id
                arr.push(v.data)
            })
            data.modules.push({
                title: grid.title,
                data: arr
            })
        }
        console.log(data)
        return data;
    },
    saveTemplateData: function () {
        var data = this.getTemplateData();
        var viewModel = this.getViewModel();
        var product = viewModel.get('product');

        Ext.Ajax.request({
            url: `/v1/products/${product.get('id')}/template/`,
            method: 'post',
            params: {
                data:JSON.stringify(data)
            },
            success: function () {
                console.log(arguments)
            }
        })
    },
    loadTemplateData: function () {
        console.log(arguments)
    },
    moduleMove: function (e, el, header, tool) {
        var grid = header.up();
        var refs = this.view.getReferences();
        var modulegridcontainer = refs['modulegridcontainer'];
        var items = modulegridcontainer.items;
        var index = items.indexMap[grid.id];
        for (var i = 0; i < items.length; i++) {
            if (items.items[i] == grid) {
                index = i;
            }
        }
        if (tool.type == 'down') {
            modulegridcontainer.insert(index + 1, grid)
        }
        if (tool.type == 'up') {
            modulegridcontainer.insert(index == 0 ? index : index - 1, grid)
        }
    },
    addModuleGrid: function (button) {
        var refs = this.view.getReferences();
        refs['modulegridcontainer'].add(Ext.widget('modulegrid'))
    },
    uploadFormCommit: function (form, success) {
        form.submit({
            waitMsg: '图片上传中...',
            success: success,
            failure: function () {
                var result;
                try {
                    result = JSON.parse(action.response.responseText);
                    console.log(result)
                    Ext.Msg.alert('上传失败 error_code=' + result.code, result.message);
                } catch (e) {
                    Ext.Msg.alert('上传失败 ', action.response.responseText);
                }
            }
        })
    },
    uploadImg: function (img) {
        var viewModel = this.getViewModel()
        this.uploadFormCommit(img.up('form'), function (form, action) {
            console.log(arguments)
            viewModel.set('modelgrid.selection.field_value', action.result.data);
        })
    },
    uploadImgs: function (img) {
        this.uploadFormCommit(img.up('form'), function (form, action) {
            console.log(arguments)
            //viewModel.set('modelgrid.selection.field_value', action.result.data);
        })
    },
    pageTitleFocus: function () {
        var viewModel = this.getViewModel()
        viewModel.set('editDisplay', 'pageTitle')
    },
    navHandler: function (button) {
        var viewModel = this.getViewModel()
        viewModel.set('editDisplay', button.type)
    },
    modTitleClick: function () {
        var viewModel = this.getViewModel()
        viewModel.set('editDisplay', 'modTitle')
    },
    modgridcellClick: function () {
        var viewModel = this.getViewModel()
        viewModel.set('editDisplay', 'modEdit')
    }

});
