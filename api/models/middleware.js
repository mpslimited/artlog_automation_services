let jwt = require('jsonwebtoken');
const config = require('./config.js');

let checkToken = (req, res, next) => {
  console.log("----------checkToken-------");
  var allowedOrigins = [ "https://gmartlogautomationuat.mpstechnologies.com"];
let origin = req.headers.origin;
if (allowedOrigins.includes(origin)) {
    console.log("orgin allowd ",origin)
    res.header("Access-Control-Allow-Origin", origin); // restrict it to the required domain
    
}


  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length);
  }
  console.log("Checking Tocked data");
  if (token) {
    jwt.verify(token, "MY_SECRET", (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};

module.exports = {
  checkToken: checkToken
}