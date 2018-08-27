var UserDao = require('../dao/UserDao');
var TemplateDao = require('../dao/TemplateDao');
var HecnniotService = require('./HecnniotService');
const ResultUtil = require("../util/ResultUtil")
const error = ResultUtil.error;
const Template = require('../model/Template')

async function getTemplateByProductId(productId) {
    var result = await TemplateDao.getTemplateByFiled('productId', productId);

    return result[0];
}

exports.getTemplateByProductId = getTemplateByProductId;

async function saveTemplate(template) {
    var result = await TemplateDao.saveTemplate(template)
    console.log(result)
    return result;
}

exports.saveTemplate = saveTemplate;

async function updateTemplate(template) {
    await TemplateDao.updateTemplate(template);
    var result = await getTemplateByProductId(template.productId);
    return new Template(result);
}

//getTemplateByProductId(2)

// updateTemplate({
//     id: 1,
//     productId: 1,
//     data: '123'
// }).then(d => {
//     console.log(d)
// })
exports.updateTemplate = updateTemplate;