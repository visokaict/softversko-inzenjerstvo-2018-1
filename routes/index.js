var express = require('express');
var router = express.Router();

const db = require('../dbsetup');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
