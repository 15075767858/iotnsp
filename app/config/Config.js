var dbconfig = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'iotnsp'
}


var service = {
    port: 3000
}

var HecnniotUrl = {};
HecnniotUrl.url = "http://www.heniot.cn/";
HecnniotUrl.apiLogin = HecnniotUrl.url + "apiLogin";//登录
HecnniotUrl.register = HecnniotUrl.url + "api/registerFromAPI";//注册
HecnniotUrl.getCategory = HecnniotUrl.url + "api/category";//获取分类
HecnniotUrl.addCategory = HecnniotUrl.url + "api/category/store";//增加分类
HecnniotUrl.addBrands = HecnniotUrl.url + "api/brands/store";//获取产品品牌列表
HecnniotUrl.getBrands = HecnniotUrl.url + "api/brands";//获取产品品牌列表
HecnniotUrl.getUserQRCodeList = HecnniotUrl.url + "api/userQRCodeList";//获取用户标识列表
HecnniotUrl.addUserQrcodeList = HecnniotUrl.url + "api/userQrcodeList/store";//增加用户标识


exports.dbconfig = dbconfig;
exports.HecnniotUrl=HecnniotUrl;
