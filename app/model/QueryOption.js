var DBUtil = require('../util/DBUtil')


class QueryOption {

    constructor(obj) {

        this.transactions = false;
        this.autoRelease = true;
        this.connection = null;
        this.page = null;
        this.start = null;
        this.limit = null;
        if (obj.connection) {
            this.autoRelease = false;
            this.transactions = true;
        }

        for (var pro in obj) {
            this[pro] = obj[pro]
        }


        Object.preventExtensions(this)
    }

    setConnection(connection) {
        this.connection = connection;
    }

    getConnection() {
        return this.connection;
    }
}

module.exports = QueryOption;