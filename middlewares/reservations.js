const Reservation = require('../models/Reservation');

module.exports.add = function add(req, res) {
    let {kupac, idVozila, datumOd, datumDo, cena, valuta, placena} = req.body;

    let reservation = new Reservation(...Object.values(req.body));
    let validation = reservation.validate();

    if (validation !== true) {
        res.status(400).send(validation);
        return;
    }
    if (Reservation.checkAvailability(idVozila, datumOd, datumDo)) {
        let reservation = new Reservation(...Object.values(req.body));
        console.log(reservation);
        reservation.addToDB();
        res.status(201).end();
    } else
        res.status(200).end();

};

