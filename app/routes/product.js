const express = require('express');
const router = express.Router();
const User = require('../model/user').User
const Product = require('../model/Product').Product
const createError = require('http-errors');
const ResultUtil = require("../util/ResultUtil")
const UserService = require('../service/UserService')
const ProductService = require('../service/ProductService')
const TemplateController = require('../controller/TemplateController')
const ProductController = require('../controller/ProductController')


router.all('/*', function (req, res, next) {
    //console.log(req)
    var token = req.cookies['api_token'];
    if (!token) {
        throw ResultUtil.error(ResultUtil.ResultInfo.NOT_LOGIN);
    }
    next()
})
/* GET users listing. */
// router.get('/', async function (req, res, next) {
//
//     res.send(users);
// });
router.get('/', async function (req, res, next) {

    await ProductController.getProducts(req, res, next)
})

router.get('/:id', async function (req, res, next) {
    console.log(req)
    //var user = await UserService.userInfo(new User(req.cookies))
    //var products = await ProductService.productAll(user)
    ProductController.getProductById(req, res, next);
    //var product = await ProductService.getProductById(req.params.id);
    //product.template_id = "2"
    //res.send(ResultUtil.success(product))
})

//获取
// router.get('/:id', async function (req, res, next) {
//     var user = await UserService.userInfo(new User(req.cookies))
//
//     res.send(ResultUtil.success(user))
// })

//增加
router.post('/:id', async function (req, res, next) {
    var user = await UserService.userInfo(new User(req.cookies));
    var product = new Product(res.body);
    product = await ProductService.productAdd(user, product);
    //console.log(req)
    //console.log(req.body())
    res.send(ResultUtil.success(product))
})

//删除
router.delete('/', function (req, res, next) {
    console.log(req)
    res.send("delete")
})
//更新
router.put('/:id', function (req, res, next) {
    console.log(req)
    var product = new Product(res.body);
    //ProductController.

    ProductService.productUpdate(product);
    res.send("put")
})


router.get('/:id/template', async function (req, res, next) {
    console.log(req)
    var template = await TemplateController.getTemplate(req.params.id);

    res.send(ResultUtil.success(template))
})
router.post('/:id/template', async function (req, res, next) {
    console.log(req)
    req.params.id

    res.send(ResultUtil.success(req.data))
})

router.put('/:id/template', async function (req, res, next) {
    TemplateController
    res.send('')
})


module.exports = router;

