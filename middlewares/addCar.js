const Car = require('../models/Car');

module.exports.addCar = function search(req, res) {
    let car = new Car(...Object.values(req.body));
    let validation = car.validate();

    if (validation !== true) {
        res.status(400).send(validation);
        return;
    } else
        car.addToDB();
    res.status(200).end();

};
