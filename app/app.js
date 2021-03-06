var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var productRouter = require('./routes/product');
var uploadRouter = require('./routes/upload');
var templatesRouter = require('./routes/templates');
var app = express();

// app.use(session({
//     name: 'iotnsp_app',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
//     //cookie: {maxAge: 80000},  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
//     secret: '12345',
//     resave: false,
//     saveUninitialized: true,
// }))
// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/v1/', indexRouter);
app.use('/v1/users', usersRouter);
app.use('/v1/auth', authRouter);
app.use('/v1/products', productRouter);
app.use('/v1/templates', templatesRouter);
app.use('/v1/upload', uploadRouter);
app.use(sassMiddleware({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));
app.use(express.static(path.join(__dirname, '../public')));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {

    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);

    res.send({
        success: false,
        code: err.code,
        message: err.message,
        data: err.data
    })
    //res.render('error');
});

module.exports = app;
