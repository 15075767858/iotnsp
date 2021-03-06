
Ext.define('iotnsp.view.authentication.AuthDialog',{
    extend: 'Ext.form.Panel',

    requires: [
        'iotnsp.view.authentication.AuthDialogController',
        'iotnsp.view.authentication.AuthDialogModel'
    ],

    controller: 'authentication-authdialog',
    viewModel: {
        type: 'authentication-authdialog'
    },

    xtype:"authdialog",
    /*
     * Seek out the first enabled, focusable, empty textfield when the form is focused
     */
    defaultFocus: 'textfield:focusable:not([hidden]):not([disabled]):not([value])',

    /**
     * @cfg {Boolean} [autoComplete=false]
     * Enables browser (or Password Managers) support for autoCompletion of User Id and
     * password.
     */
    autoComplete : false,

    initComponent: function () {
        var me = this, listen;

        if (me.autoComplete) {
            // Use standard FORM tag for detection by browser or password tools
            me.autoEl = Ext.applyIf(
                me.autoEl || {},
                {
                    tag: 'form',
                    name: 'authdialog',
                    method: 'post'
                });
        }

        //me.addCls('auth-dialog');
        me.callParent();

        if (me.autoComplete) {
            listen = {
                afterrender : 'doAutoComplete',
                scope : me,
                single : true
            };

            Ext.each(me.query('textfield'), function (field) {
                field.on(listen);
            });
        }
    },

    doAutoComplete : function(target) {
        if (target.inputEl && target.autoComplete !== false) {
            target.inputEl.set({ autocomplete: 'on' });
        }
    }
});
