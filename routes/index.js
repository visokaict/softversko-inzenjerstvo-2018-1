var express = require('express');
var router = express.Router();
const search = require('../middlewares/search').search;
const addReservation = require('../middlewares/reservations').addReservation;
const getItem = require('../middlewares/getItem').getItem;
const removeItem = require('../middlewares/remove').removeItem;
const addCar = require('../middlewares/addCar').addCar;

router.get('/cars/search', search);
router.get('/reservations/search', search);

router.put('/reservations/add', addReservation);
router.put(/cars/, addCar);

router.get('/cars/:id', getItem);
router.get('/reservations/:id', getItem);

router.delete('/reservations/:id/', removeItem);


module.exports = router;