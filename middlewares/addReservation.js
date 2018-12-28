const Reservation = require('../models/Reservation');

module.exports.addReservation = function (req, res) {
    let {kupac, idVozila, datumOd, datumDo, cena, valuta, placena} = req.body;

    let reservationOrder = {kupac: "", idVozila: "", datumOd: "", datumDo: "", cena: "", valuta: "", placena: ""};
    let reservation = new Reservation(
        ...Object.values(
            Object.assign(reservationOrder, req.body)
        )
    );

    let validation = reservation.validate();

    if (validation !== true) {
        res.status(400).send(validation);
    }
    if (Reservation.checkAvailability(idVozila, datumOd, datumDo)) {
        reservation.addToDB();
        res.status(201).end();
    } else
        res.status(200).end();
};

