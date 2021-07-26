const express = require('express')
const path = require('path')
const fs = require('fs')
const util = require('util')
const favicon = require('serve-favicon')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const responseTime = require('response-time')
const StatsD = require('node-statsd')
const bodyParser = require('body-parser')
const cors = require('cors')
const url = require('url')
const passport = require('passport')

// [SH] Bring in the data model
require('./api/models/db')
// [SH] Bring in the Passport config after model is defined
require('./api/config/passport')
require('log-timestamp')

// [SH] Bring in the routes for the API (delete the default routes)
const poRoutes1 = require('./api/routes/postapis.route');
const routesApi = require('./api/routes/index');
const syncAssetBank = require('./api/routes/data.syncAssetBank');
const routessmartsheetApi = require('./api/routes/smartsheet');
const routesApiData = require('./api/routes/data.services');
const rndRoute = require('./api/routes/rndRoure');
const app = express()
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


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ parameterLimit: 100000, limit: '50mb', extended: false }));
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
app.use('/rnd', rndRoute);
/*
app.get("/*", (request, res, next) => {
  let refUrl=request.headers.referer || request.url;
  var url = require('url');
  var url_parts = url.parse(refUrl, true);
  var query = url_parts.query;
  if(query.jssonId){
    console.log("ses:==>", query.jssonId);
    res.cookie('jssonId',query.jssonId, { maxAge: 90000000, httpOnly: true });
  }
  res.sendFile("index.html", { root: publicRoot });
});
*/
app.use((req, res, next) => {
  let error = new Error("Invalid RestAPI call!")
  error.status = 404;
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status|| 500);
  res.json( { message : error.message })
})
app.use( (err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message})
  }
})

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
process.on('uncaughtException',  (exception) => {
  console.log("AppErr:", exception);
})
module.exports = app;
