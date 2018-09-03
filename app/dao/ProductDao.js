const DaoBase = require('./DaoBase')

class ProductDao extends DaoBase {
    constructor() {
        super('product');
    }

}


module.exports = ProductDao;

/*
exports.getProductByFiled = getProductByFiled;


function getProductByFiled(field, value) {
    return DBUtil.getDataByFiled('products', field, value);
}

function getProductsByFiled(field, value) {

    return DBUtil.getDataByFiled('products', field, value);
}

exports.getProductsByFiled = getProductByFiled;

function updateProduct(products) {
    return DBUtil.updateDataByField('products', products, 'id', products.id);
}


var getProductById = async function (id, option) {
    var results = await getProductsByFiled('id', id, option);

    return results[0] ? results[0] : null;
}

var updateProductById = async function (Product, option) {
    await DBUtil.updateDataByField(TABLE_NAME, Product, 'id', Product.id, option);
    return await getProductById(Product.id);
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
    return DBUtil.deleteDataByField('products', field, value)
}

exports.deleteProductByField = deleteProductByField;
*/

// exports.getUserByField = getUserByFiled;
// exports.updateUser = updateUser;
// exports.deleteUser = deleteUser;
// exports.saveUser = saveUser;
// exports.getUserByEmail = getUserByEmail;
// exports.getUsers = getUsers;



