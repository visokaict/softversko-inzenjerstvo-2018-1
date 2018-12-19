var express = require('express');
var router = express.Router();
const cars = require('../middlewares/cars');
const reservations = require('../middlewares/reservations');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/cars/search', cars.search);
router.put('/reservations/add', reservations.add);

module.exports = router;