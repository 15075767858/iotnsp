Ext.define('iotnsp.view.productmanage.TemplateEditModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.productmanage-templateedit',
    data: {
        name: 'iotnsp',
        editDisplay:'',
        template: {
            pageTitle: 'a',
            nav1_name:'b',
            nav1_value:'c',
            nav2_name:'d',
            nav2_value:'e',
            nav3_name:'f',
            nav3_value:'g',
        },
    },
    links:{
      product:{
          type:'Product',
          create:{
              id:2
          }
      }
    },
    formulas: {

        imgSrc: {
            get: function (get) {
                var value = get('modelgrid.selection.field_value');
                if (typeof  value == 'string') {
                    return value;
                } else {
                    return '';
                }
                //return value instenceof String?value:null
            },
            set: function (imgSrc) {
                this.set('modelgrid.selection.field_value', imgSrc)
            }
        },
        aaa: function () {
            return '123'
        }

    }

});
