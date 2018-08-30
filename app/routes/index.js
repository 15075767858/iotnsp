var express = require('express');
var router = express.Router();
const DBUtil = require('../util/DBUtil');

/* GET home page. */
router.get('/', function (req, res, next) {

    next()

    //res.render('index', { title: 'Express' });
});
router.get('/test', async function (req, res, next) {



    next()

    //res.render('index', { title: 'Express' });
});


module.exports = router;