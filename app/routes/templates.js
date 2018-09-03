const express = require('express');
const router = express.Router();
const User = require('../model/user').User
const createError = require('http-errors');
const ResultUtil = require("../util/ResultUtil")
const TemplateController = require('../controller/TemplateController');
var UserService = require('../service/UserService')


router.all('/*', function (req, res, next) {
    //console.log(req)
    var token = req.cookies['api_token'];
    if (!token) {
        throw ResultUtil.error(ResultUtil.ResultInfo.NOT_LOGIN);
    }
    next()
})
/* GET users listing. */
router.get('/', async function (req, res, next) {



    await TemplateController.getTemplates(req, res, next)
});


//获取
router.get('/:id', async function (req, res, next) {
    //var user = await UserService.userInfo(new User(req.cookies));
    //TemplateController.getTemplate(res.params.id)
    res.send(ResultUtil.success({id: '123', data: 'ad', productId: "123", 'user_id': 24}));
})
// router.get('/',async function (req, res, next) {
//     var user = await UserService.userInfo(new User(req.cookies))
//
//     res.send(ResultUtil.success(user))
// })
//修改
router.post('/', function (req, res, next) {
    TemplateController.saveTemplate()
    //console.log(req)
    //console.log(req.body())
    res.send("post")
})

//删除
// router.delete('/', function (req, res, next) {
//     console.log(req)
//     res.send("delete")
// })
// //更新
// router.put('/', function (req, res, next) {
//     console.log(req)
//     res.send("put")
// })


router.all('/test', function (req, res) {
    console.log("test")
    //console.log(req)
    res.send("aaaa")
})


module.exports = router;

