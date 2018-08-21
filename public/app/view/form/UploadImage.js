
Ext.define('iotnsp.view.form.UploadImage',{
    extend: 'Ext.panel.Panel',

    requires: [
        'iotnsp.view.form.UploadImageController',
        'iotnsp.view.form.UploadImageModel'
    ],

    controller: 'form-uploadimage',
    viewModel: {
        type: 'form-uploadimage'
    },

    html: 'Hello, World!!'
});
