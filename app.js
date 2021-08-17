var express = require('express');
var path = require('path');
var fs = require('fs');
var util = require('util');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var responseTime = require('response-time')
var StatsD = require('node-statsd')

require('log-timestamp');
var bodyParser = require('body-parser');
var cors = require('cors');
// [SH] Require Passport
var url = require('url');
var passport = require('passport');

// [SH] Bring in the data model
require('./api/models/db');
// [SH] Bring in the Passport config after model is defined
require('./api/config/passport');


// [SH] Bring in the routes for the API (delete the default routes)
var poRoutes1 = require('./api/routes/postapis.route');
var routesApi = require('./api/routes/index');
var syncAssetBank = require('./api/routes/data.syncAssetBank');
var routessmartsheetApi = require('./api/routes/smartsheet');
var routesApiData = require('./api/routes/data.services');

var app = express();
var stats = new StatsD()
stats.socket.on('error', function (error) {
  console.error(error.stack)
})
 // catch 404 and forward to error handler

 var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // For legacy browser support
}
 const cors       = require('cors');
 app.use(cors(corsOptions));


//  app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// }) 



app.use(responseTime(function (req, res, time) {
  var stat = (req.method + req.url).toLowerCase()
    .replace(/[:\.]/g, '')
    .replace(/\//g, '_')
  stats.timing(stat, time)
}));


const publicRoot = 'dist';
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), 
{ flags: 'a' }) , error = fs.createWriteStream(path.join(__dirname, 'logs/error.log'), { flags: 'a' });


var logStdout = process.stdout;

console.log = function () {
  accessLogStream.write(util.format.apply(null, arguments) + '\n');
  logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;
app.use(morgan('combined', { stream: accessLogStream }))


app.use(express.static(publicRoot));
app.use('/static', express.static(path.join(__dirname,"/public/dist/static/")));
// app.get('/', function (request, res) {
//   console.log("requesting data for ==>",req.query);
//   res.send('Wiki home page');
// });

app.get("/*", (request, res, next) => {
  let refUrl=request.headers.referer || request.url;
  var url = require('url');
  var url_parts = url.parse(refUrl, true);
  var query = url_parts.query;
  if(query.jssonId){
   // let user=checkUserInfo(query.jssonId);
   console.log("ses:==>", query.jssonId);
    res.cookie('jssonId',query.jssonId, { maxAge: 90000000, httpOnly: true });
  }
  res.sendFile("index.html", { root: publicRoot });
});

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
app.use('/dataApi', poRoutes1);
app.use('/api', routessmartsheetApi);
app.use('/apiData', routesApiData);
app.use('/sync', syncAssetBank);

// app.listen(3000, function(){
//   console.log('Server is running on Port:',3000);
// });

// catch 404 and forward to error handler
 app.use(function(req, res, next) {
     var err = new Error('Action Not Found');
     console.log(err)
     // err.status = 404;
     // next(err);
 });

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
 app.use(function(err, req, res, next) {
     res.status(err.status || 500);
     res.render('error', {
         message: err.message,
         error: {}
     });
 });
process.on('uncaughtException', function (exception) {
  console.log("AppErr:", exception);
});

module.exports = app;
