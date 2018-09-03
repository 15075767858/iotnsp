const TemplateService = require('../service/TemplateService');
const Template = require('../model/Template');
const ResultUtil = require("../util/ResultUtil")


var getTemplates = async function (req, res, next) {
    var templates = null;
    if (req.query.filter) {
        //console.log(req.query, req.cookies)
        var filter = JSON.parse(req.query.filter)[0];
        if (filter.property == 'user_id') {
            templates = await TemplateService.getTemplatesByUserId(filter.value);
            console.log(filter)
        }
    }
    console.log(templates)
    res.send(ResultUtil.success(templates))
    //var user = await UserService.userInfo(new User(req.cookies))

    //var products = await ProductService.productAll(user)
}
exports.getTemplates = getTemplates;


async function getTemplate(productId) {
    var template = await TemplateService.getTemplateByProductId(productId);
    if (template) {
        return template;
    } else {
        throw ResultUtil.error(ResultUtil.ResultInfo.TEMPLATE_EXIST_ERR);
    }
}

exports.getTemplate = getTemplate;

async function saveTemplate(productId, data) {
    var template = await TemplateService.getTemplateByProductId(productId);

    if (template) {
        template.data = data;
        await TemplateService.updateTemplate(template)
    } else {

        var t = new Template({
            productId: productId,
            data: data
        })
        await  TemplateService.saveTemplate(t);
    }


    return await TemplateService.getTemplateByProductId(productId);
}

exports.saveTemplate = saveTemplate;


//
// saveTemplate(2, "[1231231]").then(function () {
//     getTemplate(2).then(function () {
//         console.log(arguments)
//     })
// })
//
