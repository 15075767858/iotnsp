const express = require('express');
const router = express.Router();
const User = require('../model/user').User
const createError = require('http-errors');
const ResultUtil = require("../util/ResultUtil")
var UserService = require('../service/UserService')
const fs = require('fs-extra');
const path = require('path');
var multiparty = require('multiparty');


var parseForm = function (req) {
    return new Promise(function (resolve, reject) {
        var form = new multiparty.Form();
        form.parse(req, function (err, field, files) {
            if (err) {
                console.log(err);
                throw ResultUtil.error(ResultUtil.ResultInfo.UPLOAD_ERROR)
                reject(err);
            } else {
                resolve({field, files});
            }
        })
    })

}

//图片上传
router.post('/img', async function (req, res, next) {
    //console.log(req)
    //req.pipe(fs.createWriteStream('./aaa.png'))
    var resObj = await parseForm(req);
    var imgs = resObj.files.img;
    console.log(resObj)
    var d = new Date();
    var dir = `upload/${d.getUTCFullYear()}/${d.getUTCMonth()}/${d.getUTCDay()}/`;
    await fs.ensureDir('./public/' + dir)

    var relationPath = '/'+dir + path.parse(imgs[0].path).base;
    //for (var i = 0; i < imgs.length; i++) {
    var fileName = './public' + relationPath;

    await fs.move(imgs[0].path, fileName);
    //}
    //${d.getTime()}_${imgs[0].originalFilename}
    //./public/
    console.log(resObj, resObj.files.img[0])

    res.send(ResultUtil.success(relationPath))
})


module.exports = router;