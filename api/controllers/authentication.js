var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
// var cors = require('cors')
// var allowlist = ['*'];



var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.register = function(req, res) {
  var user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);
  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
};

module.exports.login = function(req, res) {

  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  console.log("REQ==>",req.body);
  passport.authenticate('local', function(err, user, info){
    var token;
    if (err) {
      res.status(404).json(err);
      return;
    }
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token,
        "Status": "OK",
        "id":user._id,
        'name': user.name,
        "userGroupName":user.userGroupName,
        'roleName': user.roleName,
      });
    } else {
      res.status(401).json(info);
    }
  })(req, res);

};