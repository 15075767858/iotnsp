const TemplateService = require('../service/ProductService');
const Template = require('../model/Product');
const ResultUtil = require("../util/ResultUtil")
const ProductService = require('../service/ProductService');
const User = require('../model/User')



var getProducts = async function (req, res, next) {
    var products = null;

    if (req.query.filter) {
        console.log(req.query, req.cookies)
        var filter = JSON.parse(req.query.filter)[0];
        if (filter) {
            products = await ProductService.getProductByUser(new User({id: filter.value}));
        }
    }

    res.send(ResultUtil.success(products))

    //var user = await UserService.userInfo(new User(req.cookies))

    //var products = await ProductService.productAll(user)
}
exports.getProducts = getProducts;

var getProductById = async function (req, res, next) {
    var product = await ProductService.getProductById(req.params.id);

    res.send(ResultUtil.success(product))

}


exports.getProductById = getProductById;


var updateProduct = async function (req, res, next) {


    var product =await ProductService.productUpdate()


}