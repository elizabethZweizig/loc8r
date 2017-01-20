var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var homepageController = function(req, res) {
  res.render('index', { title: 'Express'});
};

/* GET home page. */
router.get('/', ctrlMain.index);
router.get('/', homepageController);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
