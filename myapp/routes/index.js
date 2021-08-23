var express = require('express');
var router = express.Router();

var contactModel = require('../modules/contactschema');
var subscribeModel = require('../modules/subscribeschema');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Niket Paultry', msg: '' });
});


// GET home page. */ // exactly correct one

router.get('/contact', function(req, res, next) {
  
  res.render('index', { title: 'Niket Paultry', msg: ''});
});

// GET home page. */ // exactly correct one

router.get('/subscribe', function(req, res, next) {
  
  res.render('index', { title: 'Niket Paultry', msg: ''});
});

// Contact Post
router.post('/contact', function(req, res, next) {

  var contactDetails = new contactModel({
    Firstname: req.body.firstname,
    Lastname: req.body.lastname,
    Mobilenumber: req.body.mobilenumber,
    Email: req.body.email,
    WriteMessage: req.body.writemessage
  });
  contactDetails.save((err) => {
    if(err) {
      res.render('index', { title: 'Niket Paultry', msg: 'Submit Error Occurred, Please Try again...' });
    }
    res.render('index', { title: 'Niket Paultry', msg: 'Message Submitted Successfully, We will contact you soon!' });

  });
  });

  //Subscribe Post
router.post('/subscribe', function(req, res, next) {

  var subscribeDetails = new subscribeModel({
    Email: req.body.email
  });
  subscribeDetails.save((err) => {
    if(err) {
      res.render('index', { title: 'Niket Paultry', msg: 'Subscription Error Occurred, Please Try again...' });
    }
    res.render('index', { title: 'Niket Paultry', msg: 'Subscribed Successfully, Now you will get frequent email notifications' });

  });
  });
/*
router.post('/contact', function(req, res, next) {
  var contactDetail = new contactModel({
    Firstname: req.body.firstname,
    Lastname: req.body.lastname,
    Mobilenumber: req.body.mobilenumber,
    Email: req.body.email,
    WriteMessage: req.body.writemessage
  });
  contactDetail.save((err) => {
    
    if(err) {
      res.render('index', { title: 'Niket Paultry', msg:'Error Occurred, Please Try again...'});
    }
    
    res.render('index', { title: 'Niket Paultry', msg:'Message Submited Successfully, You will be contacted soon'});
  });  
});


/*
router.post('/subscribe', function(req, res, next) {
  var subscribeDetail = new contactModel({   
    Email: req.body.email    
  });
  subscribeDetail.save((err) => {
    
    if(err) {
      res.render('index', { title: 'Niket Paultry', msg:'Error Occurred, Please Try again...'});
    }
    
    res.render('index', { title: 'Niket Paultry', msg:'Subscribed Successfully, You will get frquent email notifications'});
  });  
});
*/

module.exports = router;
