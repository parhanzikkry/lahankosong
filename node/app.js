var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var Token = require(__dirname + '/controllers/Token.controller');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*Routing*/
var registrasilahan = require(__dirname + '/routes/RegistrasiLahan.route'),
    lahan = require(__dirname + '/routes/Lahan.route'),
    auth = require(__dirname + '/routes/Auth.route');
app.use('/auth', auth);
/*app.use((req, res, next) => {
  if(!req.headers.token) {
    // Cant find token
    res.json({status: false, message: "Sorry we can't find your token, please make new request"});
  } else {
    Token.CheckingToken(req.headers.token, res, next);
    next();
  }
});*/
app.use('/registrasilahan', registrasilahan);
app.use('/lahan', lahan);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
