var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});


var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');

// profile


// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// }) 



router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);

var corsOptions = {
  origin: 'https://gmartlogautomationuat.mpstechnologies.com',
  methods: "GET, PUT, POST",
  optionsSuccessStatus: 200 // For legacy browser support
}
 const cors   = require('cors');
 //app.use(cors(corsOptions));
router.post('/login',cors(corsOptions), ctrlAuth.login);

module.exports = router;
