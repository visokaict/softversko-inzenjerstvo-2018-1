var express = require('express');
var router = express.Router();
const search = require('../middlewares/search').search;
const addReservation = require('../middlewares/reservations').addReservation;
const getItem = require('../middlewares/getItem').getItem;
const removeItem = require('../middlewares/remove').removeItem;
const addCar = require('../middlewares/addCar').addCar;
const update = require('../middlewares/update').update;
const signUp = require('../middlewares/signUp').signUp;


router.get('/cars/search', search);
router.get('/reservations/search', search);

router.put('/reservations/add', addReservation);
router.put(/cars/, addCar);

router.get('/cars/:id', getItem);
router.get('/reservations/:id', getItem);

router.get('/cars/', getItem);
router.get('/reservations/', getItem);

router.delete('/reservations/:id/', removeItem);
router.delete('/cars/:id/', removeItem);

router.patch('/cars/:id', update);

router.post('/users/signup', signUp);

module.exports = router;