var express = require('express');
var router = express.Router();
const search = require('../middlewares/search').search;
const reservations = require('../middlewares/reservations');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/search/:searchItem', search);
router.put('/reservations/add', reservations.add);

module.exports = router;