
const DaoBase = require('./DaoBase')

const DBUtil = require('../util/DBUtil');
const Template = require('../model/Template')
const pool = DBUtil.pool;
const TABLE_NAME = 'templates';



//Object.assign(exports,DBUtil.generalMethods('Template'))
//console.log(exports.getaaaByProperty())

console.log(exports)
var getTemplatesByFiled = async function (field, value, option) {
    var result = await DBUtil.getDataByFiled(TABLE_NAME, field, value);
    var templates = [];
    for (var i = 0; i < result.length; i++) {
        templates.push(new Template(result[i]));
    }
    return templates;
}

exports.getTemplatesByFiled = getTemplatesByFiled;

var getTemplateById = async function (id, option) {
    var results = await getTemplatesByFiled('id', id, option);

    return results[0] ? results[0] : null;
}

exports.getTemplateById = getTemplateById;

var getTemplateByProductId = async function (productId, option) {
    var results = await getTemplatesByFiled('product_id', productId, option);
    return results[0] ? results[0] : null;
}

exports.getTemplateByProductId = getTemplateByProductId;

var getTemplatesByUserId = async function (userId, option) {
    console.log(arguments)
    return await getTemplatesByFiled('user_id', userId, option);
}

exports.getTemplatesByUserId = getTemplatesByUserId;

var updateTemplateById = async function (template, option) {
    await DBUtil.updateDataByField(TABLE_NAME, template, 'id', template.id, option);
    return await getTemplateById(template.id);
}

exports.updateTemplateById = updateTemplateById;

function getTemplates(option) {
    return DBUtil.getDataByFiled(TABLE_NAME, field, value)
}

exports.getTemplates = getTemplates;

function saveTemplate(Template, option) {
    return DBUtil.saveDataByTable(TABLE_NAME, Template);
}

exports.saveTemplate = saveTemplate;

function deleteTemplateByField(field, value, option) {
    return DBUtil.deleteDataByField(TABLE_NAME, field, value)
}

exports.deleteTemplateByField = deleteTemplateByField;

// exports.getUserByField = getUserByFiled;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;
// exports.saveUser = saveUser;
// exports.getUserByEmail = getUserByEmail;
// exports.getUsers = getUsers;



