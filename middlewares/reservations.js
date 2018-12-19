const Reservation = require('../models/Reservation');

module.exports.add = function add(req, res) {
    let {kupac, idVozila, datumOd, datumDo, cena, valuta, placena} = req.body;
    if (Reservation.checkAvailability(idVozila, datumOd, datumDo)) {
        let reservation = new Reservation(...Object.values(req.body));
        Reservation.addToDB(reservation);
        res.status(201).end();
    } else
        res.status(200).send("Not created");

};

