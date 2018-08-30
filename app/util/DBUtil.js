var mysql = require('mysql');
var config = require('../config/Config')

var pool = mysql.createPool(config.dbconfig);
//exports.pool = pool;

exports.pool = pool;


function getDataByFiled(table, field, value) {
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

exports.getDataByFiled = getDataByFiled;

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

exports.getDataByFiled = getDataByFiled;


function deleteDataByField(table, field, value) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err)
                reject(err);
            }
            connection.query(`DELETE FROM ${table} WHERE ${field} = ?`, value, (err, rows) => {
                connection.release();
                //console.log(arguments)
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    })
}

exports.deleteDataByField = deleteDataByField;

function updateDataByField(table, data, field, value) {
    return new Promise((resolve, reject) => {

        pool.getConnection(function (err, connection) {
            connection.query(`UPDATE ${table} SET ? WHERE ${field} = ${pool.escape(value)}`, [data], function (err, results) {
                connection.release();
                //console.log(arguments)
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
        })
    })
}

var updateDataByField = async function (table, data, field, value) {
    return await query(`UPDATE ${table} SET ? WHERE ${field} = ${pool.escape(value)}`, [data])
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

//updateDataByField('users',{id:24},'id',39)
exports.updateDataByField = updateDataByField;
var saveDataByTable = async function (table, data) {
    var connection = this.connection ? this.connection : await getConnection();


    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err)
                reject(err)
            }
            connection.query(`INSERT INTO ${table} SET id=uuid(),?`, [data], function (err, result) {
                connection.release();
                if (err) {
                    console.log(err)
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        });
    })
}

var saveDataByTable = async function (table, data, option) {

    return await query(`INSERT INTO ${table} SET id=uuid(),?`, [data], option)
}


exports.saveDataByTable = saveDataByTable;


//saveDataByTable('products', {name: 'aaa'})

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
var test = async function () {
    var con = await getConnection(true)
    this.getConnection = 123
    //testScope()
    //testScope()
}
// // exports.testScope=testScope
//  console.log(test())
