const DBUtil = require('../util/DBUtil');
const pool = DBUtil.pool;

function getTemplateByFiled(field, value) {

    return DBUtil.getDataByFiled('templates', field, value);
}

exports.getTemplateByFiled = getTemplateByFiled;

function updateTemplate(Templates) {
    return DBUtil.updateDataByField('templates', Templates,'id',Templates.id);
}

exports.updateTemplate = updateTemplate;

function getTemplates() {
    return DBUtil.getDataByFiled('templates', field, value)
}

exports.getTemplates = getTemplates;

function saveTemplate(Template) {
    return DBUtil.saveDataByTable('templates', Template);
}


exports.saveTemplate = saveTemplate;

function deleteTemplateByField(field, value) {
    return DBUtil.deleteDataByField('templates',field,value)
}

exports.deleteTemplateByField = deleteTemplateByField;



// exports.getUserByField = getUserByFiled;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;
// exports.saveUser = saveUser;
// exports.getUserByEmail = getUserByEmail;
// exports.getUsers = getUsers;



