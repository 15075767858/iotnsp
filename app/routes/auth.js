const express = require('express');
const router = express.Router();
const User = require('../model/user').User
const createError = require('http-errors');
const ResultUtil = require("../util/ResultUtil")
var UserService = require('../service/UserService')


// 身份 注册 登录


//注册
router.post('/register', async function (req, res, next) {
    console.log(req.body);
    var result;
    try {
        result = await UserService.userRegister(req.body)
        res.send(ResultUtil.success(result))
    } catch (e) {
        next(e)
    }
})

router.post('/login', async function (req, res, next) {
    var result;
    console.log(req.session)

    try {
        result = await UserService.userLogin(req.body);
        //req.session['uid']=result['id'];
        //req.session['api_token']=result['api_token'];
        //console.log(req.session)

        res.cookie('api_token',result['api_token']);
        res.cookie('id',result['id']);
        console.log(result)
        res.send(ResultUtil.success(result));
    } catch (e) {
        console.log(e)
        next(e)
    }
})


router.get('/info',async function(req,res,next){
    var user =await UserService.userInfo(req.cookies)
    res.send(ResultUtil.success(user));
})

module.exports = router;