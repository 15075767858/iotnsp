Ext.define('iotnsp.view.authentication.AuthDialogController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.authentication-authdialog',

    provinceChange: function (field, value) {
        var refs = this.getReferences();
        refs['city'].store.filter('province_code', value);
        console.log(refs, arguments)
    },
    cityChange: function (field, value) {
        var refs = this.getReferences();
        refs['region'].store.filter('city_code', value);
        console.log(refs, arguments)
    },
    onSignupClick: function (field) {
        var __this = this;
        var form = field.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                success: function (form, action) {
                    Ext.Msg.alert('注册成功', action.result.message);
                    setTimeout(function () {
                        __this.redirectTo('login')
                    }, 3000)
                },
                failure: function (form, action) {
                    var result;
                    try {
                        result = JSON.parse(action.response.responseText);
                        console.log(result)
                        Ext.Msg.alert('注册失败 error_code=' + result.code, result.message);
                    } catch (e) {
                        Ext.Msg.alert('注册失败 ', action.response.responseText);
                    }
                }
            });
        }
        console.log(arguments)
    },
    onLoginButton: function (field) {
        var __this = this;
        var form = field.up('form').getForm();
        if (form.isValid()) {
            form.submit({
                clientValidation: true,
                success: function (form, action) {
                    console.log(arguments)
                    Ext.Msg.alert('登录成功 ', action.result.message);
                    setTimeout(function () {
                        location.reload()
                        //__this.redirectTo('iotnsp')
                    }, 3000)
                },
                failure: function (form, action) {
                    var result;
                    try {
                        result = JSON.parse(action.response.responseText);
                        console.log(result)
                        Ext.Msg.alert('登录失败 error_code=' + result.code, result.message);
                    } catch (e) {
                        Ext.Msg.alert('登录失败 ', action.response.responseText);
                    }
                }
            });
        }


        // var viewModel = this.getViewModel();
        // var corporation =  viewModel.data.login;
        //
        // corporation.save({
        //     //url:'/emailuser/login',
        //     callback:function () {
        //         console.log(arguments)
        //     }
        // });
    }
});
