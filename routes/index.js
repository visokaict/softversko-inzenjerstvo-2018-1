var express = require('express');
var router = express.Router();
const cars = require('../middlewares/cars');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/cars/search', cars.search);

module.exports = router;
