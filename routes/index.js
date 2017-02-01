var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // view then variable and title
  res.render('index', { title: 'Lesson 4', message: 'Node home page' });
});

/*get Register */
router.get('/register',function(reg,res,next){
  res.render('register');
});

/*get login */
router.get('/login',function(reg,res,next){
  res.render('login');
});

module.exports = router;
