var UserDao = require('../dao/UserDao');
var HecnniotService = require('./HecnniotService');
const ResultError = require("../Error/ResultError").ResultError
const ResultInfo = require("../config/ResultInfo")
const ResultUtil = require("../util/ResultUtil")
async function userRegister(user) {
    var insert = await UserDao.saveUser(user);
    //return insert;
    var result = null;
    try {
        result = await HecnniotService.userRegister(user);
        result = JSON.parse(result)
    } catch (e) {
        console.log(result, e)
        await UserDao.deleteUser(user);
        throw new ResultError(ResultInfo.REMOVE_SERVER_RESULT_ERROR);
    }
    var errorCode = result["error_code"];
    if (errorCode != 0) {
        await UserDao.deleteUser(user);
    }
    switch (errorCode) {
        case 0:
            var u = await UserDao.getUserByEmail(user.email);
            console.log(u)
            return u
            break;
        case 2:
            throw new ResultError(ResultInfo.REGISTER_INTERFACE_ERROR);
        case 3:
            throw new ResultError(ResultInfo.REGIONCODE_ERROR);
        case 4:
            throw new ResultError(ResultInfo.REGISTER_ERROR);
        case 5:
            throw new ResultError(ResultInfo.CODEI_ERROR);
        default:
            throw new ResultError(ResultInfo.REMOVE_SERVER_UNKNOW_ERROR);
    }


    //var u = await UserDao.saveUser(user);
    //return u;
}

async function userInfo(user) {
    user = await UserDao.getUserByField('api_token', user.api_token);

    if (user[0]) {
        return user[0];
    } else {
        throw ResultUtil.error(ResultUtil.ResultInfo.NOT_LOGIN)
    }
}



async function userLogin(user) {
    var result = {"error_code":0,"data":{"Info":"\u767b\u5f55\u6210\u529f","Id":103,"UserName":"282137@qwe.com","api_token":"laV0kJfK3RffyuIEnmUwAcFxVp4v50iJTZ4xezA84T3RQhIzkHIQ6ztrLHxF"}}

    // var result = await HecnniotService.userLogin(user);
    // try {
    //     result = JSON.parse(result)
    //
    // } catch (e) {
    //     throw new ResultError(ResultInfo.REMOVE_SERVER_RESULT_ERROR);
    // }
    var errorCode = result["error_code"];
    switch (errorCode) {
        case 0:
            var data = result["data"];
            user.api_token = data['api_token'];

            await UserDao.updateUser(user)
            user = await UserDao.getUserByEmail(user.email);
            user=user[0];
            return user;
            //return user;
            break;
        case 1:
            throw new ResultError(ResultInfo.PASSWORD_ERROR);
        case 2:
            throw new ResultError(ResultInfo.USERNAME_ERROR);
        default:
            throw new ResultError(ResultInfo.REMOVE_SERVER_UNKNOW_ERROR);
    }
    // var u = await UserDao.saveUser(user);
    //
    // return u;

    return user;
}


exports.userInfo = userInfo;
exports.userLogin = userLogin;
exports.userRegister = userRegister;
// userRegister().then((a)=>{
//     console.log(a)
// }).catch(function(){
//     console.log(arguments)
// })