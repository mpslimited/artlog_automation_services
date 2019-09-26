var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
// [SH] Require Passport
var passport = require('passport');

// [SH] Bring in the data model
require('./api/models/db');
// [SH] Bring in the Passport config after model is defined
require('./api/config/passport');


// [SH] Bring in the routes for the API (delete the default routes)
var routesApi = require('./api/routes/index');
var routessmartsheetApi = require('./api/routes/smartsheet');
var routesApiData = require('./api/routes/data.services');
var app = express();
const publicRoot = 'dist';
app.use(express.static(publicRoot));
// app.use('/static', express.static(path.join(__dirname,"/public/dist/static/")));
// app.get("/*", (req, res, next) => {
//   res.sendFile("index.html", { root: publicRoot });
// });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// [SH] Initialise Passport before using the route middleware
app.use(passport.initialize());

// [SH] Use the API routes when path starts with /api
app.use('/api', routesApi);
app.use('/api', routessmartsheetApi);
app.use('/apiData', routesApiData);


// app.listen(3000, function(){
//   console.log('Server is running on Port:',3000);
// });

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     console.log(err)
//     // err.status = 404;
//     // next(err);
// });

// error handlers

// [SH] Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});


// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// production error handler
// no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });
process.on('uncaughtException', function (exception) {
  console.log("AppErr:", exception);
});

module.exports = app;
