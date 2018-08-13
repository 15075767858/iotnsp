const DBUtil = require('../util/DBUtil');
const pool = DBUtil.pool;

//var pool = require('../util/DBUtil').pool;


function getUserByEmail(email) {
    return getUserByFiled('email', email);
}

function getUserByFiled(field, value) {
    return DBUtil.getDataByFiled('users', field, value)
}

// getUserByFiled('email', '49464711213@qwe.com').then(function () {
//     console.log(arguments)
// })

function saveUser(user) {
    return DBUtil.saveDataByTable('users', user);
}

function updateUser(user) {
    return DBUtil.updateDataByField('users', user, 'email', user.email);
}


function getUsers() {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err)
                reject(err)
            }
            connection.query(`SELECT * FROM users`, (err, rows) => {
                connection.release();
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    })
}


function deleteUser(user) {
    return DBUtil.deleteDataByField('users', 'id', user.id);
}

// deleteUser({
//     id: 23
// }).then(function () {
//     console.log(arguments)
// })
exports.getUserByField = getUserByFiled;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
exports.saveUser = saveUser;
exports.getUserByEmail = getUserByEmail;
exports.getUsers = getUsers;
