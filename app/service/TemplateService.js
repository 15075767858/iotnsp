var TemplateDao = require('../dao/TemplateDao');
const ResultUtil = require("../util/ResultUtil")
const error = ResultUtil.error;
const Template = require('../model/Template')
const DBUtil = require('../util/DBUtil');
const QueryOption = require('../model/QueryOption');
const TABLE_NAME = 'templates';


exports.getTemplateByProductId = TemplateDao.getTemplateByProductId;

exports.getTemplateById = TemplateDao.getTemplateById;

exports.getTemplatesByUserId = TemplateDao.getTemplatesByUserId;

//async function getTemplateBy

//保存模版逻辑
//
var saveTemplate = async function (template) {

    var connection = await DBUtil.getConnection(true);
    var queryOption = new QueryOption({connection: connection});

    var preTemplate = await TemplateDao.getTemplateByProductId(template.product_id);
    if (preTemplate) { //把之前的模版对应的产品id设为null
        preTemplate.product_id = null;
        preTemplate = await updateTemplate(preTemplate, queryOption);
    }
    await  DBUtil.saveDataByTable('templates', template, queryOption);

    getTemplateByProductId(template.id)
    var result = await TemplateDao.saveTemplate(template)

    return result;
}


exports.saveTemplate = saveTemplate;

var updateTemplate = async function (template, queryOption) {
    await DBUtil.updateDataByField(TABLE_NAME, template, 'id', template.id, queryOption);
    return await getTemplateById(template.id);
}

// saveTemplate({
//     data: '123',
//     product_id: '123',
//     user_id: '123',
//     name: '123',
// })

//getTemplateByProductId(2)

// updateTemplate({
//     id: 1,
//     productId: 1,
//     data: '123'
// }).then(d => {
//     console.log(d)
// })
exports.updateTemplate = updateTemplate;