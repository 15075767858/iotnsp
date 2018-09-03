const DBUtil = require('../util/DBUtil');
var pool = DBUtil.pool;


class DaoBase {

    constructor(tableName) {
        if (!tableName) {
            throw new Error('tablename null')
        }
        this.tableName = tableName;
    }

    async getManyByProperty(property, value) {
        return await this.query(`SELECT * FROM ${this.tableName} WHERE ${property} = ?`, value);
    }

    async getOneByProperty(property, value) {
        var results = await this.query(`SELECT * FROM ${this.tableName} WHERE ${property} = ?`, value);
        return results[0] ? results[0] : null;
    }

    async getOneById(id) {
        return await this.getManyByProperty('id', id)
    }

    async deleteByProperty(property, value) {
        return await this.query(`DELETE FROM ${this.tableName} WHERE ${property} = ?`, value);
    }

    async deleteById(id) {
        return this.deleteByProperty('id', id)
    }

    async updateByProperty(data, property, value) {
        return await this.query(`UPDATE ${this.tableName} SET ? WHERE ${property} = ${pool.escape(value)}`, [data])
    }

    async updateByDataId(data) {
        return await  this.updateByProperty(data, 'id', data.id);
    }

    async save(data) {

        return await query(`INSERT INTO ${this.tableName} SET id=uuid(),?`, [data])
    }

    async beginTransaction() {
        this.transaction = true;
        if (this.connection) {
            this.release();
        }
        this.connection = await DBUtil.getConnection(true)
    }

    async commit() {
        this.connection.commit();
        this.release()
    }

    async rollback() {
        this.connection.rollback();
        this.release()
    }

    async release() {
        this.connection.release();
        delete this.connection;
    }

    async query(sql, data) {
        var me = this;
        if (!me.connection) {
            me.connection = await DBUtil.getConnection();
        }

        return new Promise((resolve, reject) => {
            me.connection.query(sql, data, function (err, results) {
                if (!me.transaction) {
                    console.log('非事务释放')
                    me.release();
                }
                if (err) {
                    reject(err)
                } else {
                    resolve(results)
                }
            });
        })
    }

    async setConnection(connection) {
        this.connection = connection;
    }

    async getConnection() {
        return this.connection;
    }
}


module.exports = DaoBase;

