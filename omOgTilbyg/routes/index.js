var express = require('express');
var router = express.Router();
var apiModel = require('../model/apiModel');


router.get('/getAllBerths', function(req, res, next) {
  apiModel.all(function(err, data) {
    console.log(data);
    res.json(data);
  })
});

//not testet jet also see coorsponding model in model/model
router.post('/getBerth', function(req, res, next) {
  json = req.body;
  apiModel.get(json._id, function(err, data) {
    console.log(data);
    res.json(data);
  })
});

router.put('/updateBerth', function(req, res, next) {
  json = req.body
  console.log(json)
  apiModel.updateBerth(json, function(err, response) {
    console.log(response)
    res.json(response);
  })
});

router.get('/', function(req, res, next) {
  res.sendFile('./public/index.html');
});


module.exports = router;
