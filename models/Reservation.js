const uuidv4 = require('uuid/v4');
const dbsetup = require('../dbsetup');
const db = dbsetup.db;
const dateOverlap = require('../helpers/dateOverlap');

class Reservation {
    constructor(kupac, idVozila, datumOd, datumDo, cena, valuta, placena) {
        this.id = uuidv4();
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

        let reservations = collectionRes.find({id: idVozila});
        let car = collectionCar.find({id: idVozila})[0];

        if (!car.dostupnost)
            return false;
        if (reservations.length !== 0) {
            return dateOverlap(reservations, datumOd, datumDo);
        } else return true;
    }

    addToDB() {
        const collection = db.getCollection("reservations");
        collection.insert(this);
    }

    validate() {
        let error = "";
        const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
        const alphaCurrency = /([A-Z]){3}/g;
        if (typeof this.kupac !== "string") {
            error += "\nKupac mora biti string"
        }
        if (!this.id.toString().match(uuid) || ((typeof this.id.match) === "string")) {
            error += "\nidVozila mora biti uuidv4"
        }
        if ((!(new Date(this.datumOd).getTime() > 0) || typeof this.datumDo !== "number")) {
            error += "\ndatumOd mora biti unix timestamp"
        }
        if ((!(new Date(this.datumDo).getTime() > 0) || typeof this.datumDo !== "number")) {
            error += "\ndatumDo mora biti unix timestamp"
        }
        if (typeof this.cena !== "number") {
            error += "\ncena mora biti broj"
        }
        if (!this.valuta.match(alphaCurrency) || this.valuta.length !== 3) {
            error += "\nvaluta mora biti slovna oznaka valute"
        }
        if (typeof this.placena !== "boolean") {
            error += "\nplacena mora biti boolean"
        }

        if (error === "")
            return true;
        else
            return error;
    }

}

module.exports = Reservation;