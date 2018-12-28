const uuidv4 = require('uuid/v4');
const dbsetup = require('../dbsetup');
const db = dbsetup.db;


class Car {
    constructor(tablice, modelVozila, godiste, boja, menjac, sedista, kubikaza, dostupnost) {
        this.id = uuidv4();
        this.tablice = tablice;
        this.modelVozila = modelVozila;
        this.godiste = godiste;
        this.boja = boja;
        this.menjac = menjac;
        this.sedista = sedista;
        this.kubikaza = kubikaza;
        this.dostupnost = dostupnost;
    }

    addToDB() {
        const collection = db.getCollection("cars");
        collection.insert(this);
    }

    static validate(car, update) {
        const collection = db.getCollection("cars");

        let error = [];
        if (typeof car.tablice !== "string") {
            error.push("Tablice moraju biti string");
        }
        if (typeof car.modelVozila !== "string") {
            error.push("Model mora biti string");
        }
        if (typeof car.godiste !== "number" || !car.godiste.toString().match(/[1-9][0-9]{3}/)) {
            error.push("Godiste mora biti godina");
        }
        if (typeof car.boja !== "string") {
            error.push("Boja mora biti string");
        }
        if (typeof car.menjac !== "string" && (car.menjac !== "Automatski" && car.menjac !== "Manuelni")) {
            error.push("Menjač može biti manuelni ili automatski");
        }
        if (typeof car.sedista !== "number" || !car.sedista.toString().match(/([0-9])/)) {
            error.push("Broj sedišta mora biti jednocifren broj");
        }
        if (typeof car.kubikaza !== "number") {
            error.push("Kubikaža mora biti broj");
        }
        if (typeof car.dostupnost !== "boolean") {
            error.push("Dostupnost mora biti boolean");
        }
        if ((collection.find({tablice: car.tablice}).length !== 0) && !update) {
            error.push("Vozilo sa takvom registracijom već postoji");
        }
        if (error.length === 0)
            return true;
        else
            return error;
    }

}

module.exports = Car;