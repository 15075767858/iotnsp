const DBUtil = require('../util/DBUtil');
const pool = DBUtil.pool;

function getProductByFiled(field, value) {

    return DBUtil.getDataByFiled('products', field, value);
}

exports.getProductByFiled = getProductByFiled;

function updateProduct(products) {
    return DBUtil.updateDataByField('products', products,'id',products.id);
}

exports.updateProduct = updateProduct;

function getProducts() {
    return DBUtil.getDataByFiled('products', field, value)
}

exports.getProducts = getProducts;

function saveProduct(product) {
    return DBUtil.saveDataByTable('products', product);
}


exports.saveProduct = saveProduct;


function deleteProductByField(field, value) {
    return DBUtil.deleteDataByField('products',field,value)
}

exports.deleteProductByField = deleteProductByField;

// exports.getUserByField = getUserByFiled;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;
// exports.saveUser = saveUser;
// exports.getUserByEmail = getUserByEmail;
// exports.getUsers = getUsers;



