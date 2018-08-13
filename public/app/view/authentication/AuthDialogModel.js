Ext.define('iotnsp.view.authentication.AuthDialogModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.authentication-authdialog',
    data: {
        name: 'iotnsp'
    },
    links:{
        register:{
            type:"User",
            create: {
                email:Math.floor(Math.random() * 1000000)+"@qwe.com",
                password:"Lqqq.123",
                phone:"15075757575",
                true_name:"测试测试",
                region_code:'130101',
                address:"是的发送发顺丰",
                code_i:'01',
                linkman:'短发发',
                license_code:'220104000108236',
                license_url:'asdas',
            },
        },
        login:{
            type:'User',
            create:{
                email:"282137@qwe.com",
                password:"Lqqq.123"
            }
        }
    }

});
