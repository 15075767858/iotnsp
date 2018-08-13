var mysql = require('mysql');
var config = require('../config/Config')

var  pool = mysql.createPool(config.dbconfig);
//exports.pool = pool;

exports.pool = pool;

function getDataByFiled(table,field, value) {
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
exports.getDataByFiled=getDataByFiled;
function deleteDataByField(table,field,value) {
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
exports.deleteDataByField =deleteDataByField;

function updateDataByField(table,data,field,value) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            connection.query(`UPDATE ${table} SET ? WHERE ${field} = ${pool.escape(value)}`, [data], function (err, results) {
                connection.release();
                console.log(arguments)
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
        })
    })
}
//updateDataByField('users',{id:24},'id',39)
exports.updateDataByField=updateDataByField;

function saveDataByTable(table,data) {

    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err)
                reject(err)
            }
            connection.query(`INSERT INTO ${table} SET ?`, [data], function (err, result) {
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

exports.saveDataByTable=saveDataByTable;
