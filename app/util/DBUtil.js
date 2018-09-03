var mysql = require('mysql');
var config = require('../config/Config')

var pool = mysql.createPool(config.dbconfig);
//exports.pool = pool;

exports.pool = pool;


var getDataByFiled = async function (table, field, value, option) {
    return await query(`SELECT * FROM ${table} WHERE ${field} = ?`, value, option);
}
exports.getDataByFiled = getDataByFiled;

var getOneByProperty = async function (table, property, value, option) {
    var results = await query(`SELECT * FROM ${table} WHERE ${property} = ?`, value, option);
    return results[0] ? results[0] : null;
}
exports.getOneByProperty = getOneByProperty;

var getManyByProperty = async function (table, property, value, option) {
    return await query(`SELECT * FROM ${table} WHERE ${property} = ?`, value, option);
}
exports.getManyByProperty = getManyByProperty;

var saveDataByTable = async function (table, data, option) {
    return await query(`INSERT INTO ${table} SET id=uuid(),?`, [data], option)
}
exports.saveDataByTable = saveDataByTable;
var deleteDataByField = async function (table, field, value, option) {
    return await query(`DELETE FROM ${table} WHERE ${field} = ?`, value, option);
}
exports.deleteDataByField = deleteDataByField;
var updateDataByField = async function (table, data, field, value, option) {
    return await query(`UPDATE ${table} SET ? WHERE ${field} = ${pool.escape(value)}`, [data], option)
}
exports.updateDataByField = updateDataByField;




exports.generalMethods = function (tableName) {
    var DBUtil = require('../util/DBUtil');
    tableName = tableName.toLowerCase()
    var emptyName = tableName;
    console.log(emptyName)
    emptyName[0] = emptyName[0].toUpperCase();

    console.log(emptyName[0])

    var methods = {}
    Object.assign(methods, exports)
    methods[`getByProperty`] = function (property, value, option) {
        return DBUtil.getDataByFiled(tableName, field, value);
        //console.log(this.updateDataByField)
    }

    var methods = [`getManyByProperty`,
        `getOneByProperty`,
        `getManyById`,
        `deleteByProperty`,
        `deleteById`,
        `updateByProperty`,
        `updateById`,
        `saveByProperty`,
        `saveById`]

    var methods = [`get${tableName}sByProperty`,
        `get${tableName}ByProperty`,
        `get${tableName}ById`,
        `delete${tableName}ByProperty`,
        `delete${tableName}ById`,
        `update${tableName}ByProperty`,
        `update${tableName}ById`,
        `save${tableName}ByProperty`,
        `save${tableName}ById`]
    console.log(methods)

    return methods
}


var query = async function (sql, data, option) {
    if (!option) {
        option = {}
    }
    var connection = option.connection ? option.connection : await getConnection();
    return new Promise((resolve, reject) => {
        connection.query(sql, data, function (err, results) {
            if (!option.connection) {
                console.log('使用自创链接，释放了')
                connection.release();
            }
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        });
    })
}

var getConnection = function (transaction) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err)
                reject(err)
            }
            if (transaction) {
                connection.beginTransaction(function (err) {
                    if (err) {
                        console.log(err)
                        reject(err)
                    } else {
                        resolve(connection)
                    }
                })
            } else {
                resolve(connection)
            }
        });
    })
}

exports.getConnection = getConnection;
// var testScope = async function () {
//     console.log(this.connection)
// }
//
// saveDataByTable('templates', {
//     name: "1111111"
// })

//updateDataByField('users',{id:24},'id',39)


//saveDataByTable('products', {name: 'aaa'})

var test = async function () {
    var con = await getConnection(true)
    this.getConnection = 123
    //testScope()
    //testScope()
}
// // exports.testScope=testScope
//  console.log(test())
function getData1(query) {
    var query = {
        table: '',

        filters: [{property: 'id', value: ''}],
        sorters: [
            {property: '', direction: ''}
        ],
        start: null,
        page: null,
        limit: 30,
    }

    var sql = `SELECT * FROM ${query.table} WHERE  `
    if (query.filters != null) {
        if (query.filters instanceof Array) {
            sql += query.filters.map(function (v) {
                return v.property + '=' + v.value + ' '
            }).join(' and ')
        } else {
            sql += query.filters.property + '=' + query.filters.value + ' ';
        }
    } else {
        sql += '1 '
    }
    if (sql.start != null) {

    }


    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err)
                reject(err);
            }
            var sql = connection.query(`SELECT * FROM ${table} WHERE ${field} = ?`, value, (err, rows) => {
                connection.release();
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    //console.log(sql ,rows)
                    resolve(rows)
                }
            })
        })
    })
}
