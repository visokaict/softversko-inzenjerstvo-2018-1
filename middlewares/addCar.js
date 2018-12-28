const Car = require('../models/Car');

module.exports.addCar = function (req, res) {
    let carOrder = {
        tablice: "",
        modelVozila: "",
        godiste: "",
        boja: "",
        menjac: "",
        sedista: "",
        kubikaza: "",
        dostupnost: ""
    };

    let car = new Car(
        ...Object.values(
            Object.assign(carOrder, req.body)
        )
    );

    let validation = Car.validate(car, false);

    if (validation !== true) {
        res.status(400).send(validation);
    } else {
        car.addToDB();
        res.status(201).end();
    }
};
