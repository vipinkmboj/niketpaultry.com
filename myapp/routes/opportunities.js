var express = require('express');
var router = express.Router();

var opportunitiesModel = require('../modules/opportunitiesschema');
/* GET home page. */
router.get('/', function(req, res, next) {


    res.render('opportunities', { title: 'Niket Paultry', msg: '' });
  });

  //
  router.get('/opportunities', function(req, res, next) {


    res.render('index', { title: 'Niket Paultry', msg: '' });
  });

//Opportunities Post
router.post('/', function(req, res, next) {

    var opportunitiesDetails = new opportunitiesModel({
      FullName: req.body.fullname,
      MobileNumber: req.body.mobilenumber,
      Email: req.body.email,
      Opportunities: req.body.opportunities
    });
    opportunitiesDetails.save((err) => {
      if(err) {
        res.render('index', { title: 'Niket Paultry', msg: 'Error Occurred, Please Try again...' });
      }
      res.render('index', { title: 'Niket Paultry', msg: 'Query Submitted Successfully, You will be contacted soon!' });
  
    });
    });
  
  module.exports = router;