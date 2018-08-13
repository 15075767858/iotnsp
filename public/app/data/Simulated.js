Ext.define('iotnsp.data.Simulated', {
        requires: [
            'Ext.ux.ajax.JsonSimlet',
            'Ext.ux.ajax.SimManager'
        ],

        onClassExtended: function (cls, data) {
            //console.log(arguments)
            var url = data.$className.toLowerCase().replace(/\./g, '/').replace(/^iotnsp\/data/, '~api');
            var simlet = {
                type: 'json',
                data: data.data
            };
            var registration = {};

            registration[url] = simlet;


            Ext.ux.ajax.SimManager.register(registration);


            for (var i = 0; i < data.data.length; i++) {
                var key1 = url + "/" + data.data[i].id;
                var d = data.data[i]

                registration[key1] = {
                    type: 'json',
                    data: [d]
                }

            }
            Ext.ux.ajax.SimManager.register(registration);


        }
    },
    function () {
        Ext.ux.ajax.SimManager.init({
            defaultSimlet: null
        });


    });
