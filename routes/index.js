var express = require('express');
var router = express.Router();
const search = require('../middlewares/search').search;
const addReservation = require('../middlewares/addReservation').addReservation;
const getItem = require('../middlewares/getItem').getItem;
const removeItem = require('../middlewares/removeItem').removeItem;
const addCar = require('../middlewares/addCar').addCar;
const update = require('../middlewares/updateCar').update;
const signUp = require('../middlewares/signUp').signUp;
const updateUser = require('../middlewares/updateUser').updateUser;

router.get('/cars/search', search);
router.get('/reservations/search', search);

router.put('/reservations/', addReservation);
router.put(/cars/, addCar);

router.get('/cars/:id', getItem);
router.get('/reservations/:id', getItem);
router.get('/users/:id', getItem);


router.get('/cars/', getItem);
router.get('/reservations/', getItem);
router.get('/users/', getItem);

router.delete('/reservations/:id/', removeItem);
router.delete('/cars/:id/', removeItem);
router.delete('/users/:id', removeItem);

router.patch('/cars/:id', update);
router.patch('/users/:id', updateUser);

router.post('/users/signup', signUp);

module.exports = router;