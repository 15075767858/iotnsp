var mysql = require('mysql');
var config = require('./config/Config')

var  pool = mysql.createPool(config.dbconfig);
//exports.pool = pool;

exports.pool = pool;

