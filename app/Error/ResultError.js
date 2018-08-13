//const ResultInfo = require("../config/ResultInfo")
//exports.ResultInfo = ResultInfo;
class ResultError extends Error {
    constructor(ResultInfo) {
        super();
        this.message = ResultInfo.message;
        this.code = ResultInfo.code;
        this.status = ResultInfo.status;
    }
}



exports.ResultError = ResultError;
