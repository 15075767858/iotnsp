const ResultInfo = require('../config/ResultInfo')
const ResultError = require("../Error/ResultError").ResultError





exports.success=function(data){
    return {
        success:true,
        code:ResultInfo.SUCCESS.code,
        message:ResultInfo.SUCCESS.message,
        data:data
    }
}

exports.error=function(ResultInfo){

    return new ResultError(ResultInfo)
}

exports.ResultError=ResultError;
exports.ResultInfo=ResultInfo;