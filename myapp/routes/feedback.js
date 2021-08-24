var express = require('express');
var router = express.Router();


var feedbackModel = require('../modules/feedbackschema');
/* GET home page. */
router.get('/', function(req, res, next) {


    res.render('feedback', { title: 'Niket Paultry', msg: '' });
  });

  router.get('/feedback', function(req, res, next) {


    res.render('index', { title: 'Niket Paultry', msg: '' });
  });

  //Feedbacks Post
router.post('/', function(req, res, next) {

    var feedbackDetails = new feedbackModel({
      FullName: req.body.fullname,
      MobileNumber: req.body.mobilenumber,
      Email: req.body.email,
      BusinessImprovingFeedback: req.body.businessimprovingfeedback,
      SalesImprovingFeedback: req.body.salesimprovingfeedback,
      OtherFeedback: req.body.otherfeedback
    });
    feedbackDetails.save((err) => {
      if(err) {
        res.render('index', { title: 'Niket Paultry', msg: 'Error Occurred, Please Try again...' });
      }
      res.render('index', { title: 'Niket Paultry', msg: 'Thanks! We Appreciate you Feedback' });
  
    });
    });

  module.exports = router;