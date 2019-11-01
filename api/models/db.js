var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var gracefulShutdown;
const option = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  reconnectTries: 30000
};
var dbURI = 'mongodb://localhost/mpsdb';
 dbURI = 'mongodb://mpst:HBjgmdT649(T2@10.31.1.143:27017/mpsdb'; // Demo Server
  //dbURI = 'mongodb://mpst:HBjgmdT649(T2@localhost:27017/mpsdb';   // Live Server
// if (process.env.NODE_ENV === 'production') {
//   dbURI = 'mongodb://mpst:HBjgmdT649(T2@10.31.1.143:27017/mpsdb'; //process.env.MONGOLAB_URI;
// }

//mongoose.connect(dbURI);
//mongoose.connect(dbURI+'?connectTimeoutMS=1000&bufferCommands=false');
mongoose.connect(dbURI, option).then(function(){
  //connected successfully
  console.log("db Connected successfully");
}, function(err) {
  //err handle
  console.log("db Connection error :", err)
});
//mongoose.connect('mongodb://mpst:HBjgmdT649(T2@10.31.1.143:27017/mpsdb?connectTimeoutMS=1000&bufferCommands=false');
// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
  console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error', function(err) {
  console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function() {
  console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) {
  mongoose.connection.close(function() {
    console.log('Mongoose disconnected through ' + msg);
    callback();
  });
};
// For nodemon restarts
process.once('SIGUSR2', function() {
  gracefulShutdown('nodemon restart', function() {
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function() {
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function() {
    process.exit(0);
  });
});

// BRING IN YOUR SCHEMAS & MODELS
require('./users');