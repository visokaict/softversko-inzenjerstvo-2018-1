const Car = require('../models/Car');

module.exports.addCar = function addCar(req, res) {
    let car = new Car(...Object.values(req.body));
    let validation = Car.validate(car);

    if (validation !== true) {
        res.status(400).send(validation);
        return;
    } else
        car.addToDB();
    res.status(201).end();

};
