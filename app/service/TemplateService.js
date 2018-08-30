var TemplateDao = require('../dao/TemplateDao');
var HecnniotService = require('./HecnniotService');
const ResultUtil = require("../util/ResultUtil")
const error = ResultUtil.error;
const Template = require('../model/Template')
const DBUtil = require('../util/DBUtil');
const QueryOption = require('../model/QueryOption');
const TABLE_NAME = 'templates';


var getTemplateByProductId = async function (productId) {
    var result = await TemplateDao.getTemplateByFiled('product_id', productId);
    if (result[0]) {
        return new Template(result[0]);
    } else {
        return null;
    }
}

exports.getTemplateByProductId = getTemplateByProductId;

var getTemplateById = async function (id) {
    var result = await TemplateDao.getTemplateByFiled('id', id);

    return new Template(result[0]);
}

var getTemplatesByUserId = async function (userId) {

}

//async function getTemplateBy

var saveTemplate = async function (template) {
    var connection = await DBUtil.getConnection(true);

    var preTemplate = await getTemplateByProductId(template.product_id);
    if (preTemplate) { //把之前的模版对应的产品id设为null
        preTemplate.product_id = null;
        preTemplate = await updateTemplate(preTemplate);
    }

    await  DBUtil.saveDataByTable('templates', template, new QueryOption({connection: connection}));

    //var result = await TemplateDao.saveTemplate(template)
    return result;
}


exports.saveTemplate = saveTemplate;

var updateTemplate = async function (template) {
    await TemplateDao.updateTemplate(template);
    var result = await getTemplateById(template.id);
    return new Template(result[0]);
}

saveTemplate({
    data: '123',
    product_id: '123',
    user_id: '123',
    name: '123',
})

//getTemplateByProductId(2)

// updateTemplate({
//     id: 1,
//     productId: 1,
//     data: '123'
// }).then(d => {
//     console.log(d)
// })
exports.updateTemplate = updateTemplate;