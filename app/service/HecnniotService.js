const request = require('request');
const HecnniotUrl = require('../config/Config').HecnniotUrl;


function doGet(url) {
    url = encodeURI(url)
    return new Promise((resolve, reject) => {
        var req = request.get(url, function (err, response, body) {

            if (err) {
                console.log(err);
                reject(err);
            } else {
                //console.log(req.uri.href)
                //console.log(body)
                resolve(body)
            }
        })
    })

}

function userLogin(user) {
    var url = HecnniotUrl.apiLogin + `?email=${user.email}&password=${user.password}`
    console.log(url)
    return doGet(url)
}


function userRegister(user) {
    var url =HecnniotUrl.register+ `?email=${user.email}&password=${user.password}&phone=${user.phone}&true_name=${user.true_name}&region_code=${user.region_code}&address=${user.address}&code_i=${user.code_i}&linkman=${user.linkman}&license_code=${user.license_code}`;
    //
    return doGet(url);
}

// userRegister({ email: '188401@qwe.com',
//     password: 'Lqqq.123',
//     true_name: '测试测试',
//     region_code: '130101',
//     address: '是的发送发顺丰',
//     code_i: '01',
//     linkman: '短发发',
//     phone: '15075757575',
//     license_code: '220104000108236' })


exports.userLogin = userLogin;
exports.userRegister = userRegister;

// userLogin(
//     {email: "1078900559@qq.com", password: "Lzc.123"}
// )
