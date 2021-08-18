var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');


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

// let allowedOrigins = ["https://gmartlogautomationuat.mpstechnologies.com", "localhost:4200"]


module.exports.login = function(req, res) {
  console.log("REQ==1111 11----->",req.body);
  let allowedOrigins = [ 
  "https://gmartlogautomationdemo.mpstechnologies.com"]
let origin = req.headers.origin;
if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
}
  
  
  console.log("REQ==2222 22-------->",req.body);
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