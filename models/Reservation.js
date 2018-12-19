const uuidv4 = require('uuid/v4');
const dbsetup = require('../dbsetup');
const db = dbsetup.db;
const dateOverlap = require('../helpers/dateOverlap');

class Reservation {
    constructor(kupac, idVozila, datumOd, datumDo, cena, valuta, placena) {
        console.log(uuidv4());
        this.idRezervacije = uuidv4();
        this.kupac = kupac;
        this.idVozila = idVozila;
        this.datumOd = datumOd;
        this.datumDo = datumDo;
        this.cena = cena;
        this.valuta = valuta;
        this.placena = placena;
    }

    static checkAvailability(idVozila, datumOd, datumDo) {
        const collectionRes = db.getCollection("reservations");
        const collectionCar = db.getCollection("cars");

        let reservations = collectionRes.find({idVozila: idVozila});
        let car = collectionCar.find({idVozila: idVozila})[0];

        if (!car.dostupnost)
            return false;
        if (reservations.length !== 0) {
            return dateOverlap(reservations, datumOd, datumDo);
        } else return true;
    }

    static addToDB(reservation) {
        const collection = db.getCollection("reservations");
        collection.insert(reservation);
    }

}

module.exports = Reservation;