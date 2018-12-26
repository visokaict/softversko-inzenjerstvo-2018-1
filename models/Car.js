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

        let error = "";
        if (typeof car.tablice !== "string") {
            error += "\nTablice moraju biti string";
        }
        if (typeof car.modelVozila !== "string") {
            error += "\nModel mora biti string";
        }
        if (typeof car.godiste !== "number" || !car.godiste.toString().match(/([0-9]){4}/)) {
            error += "\nGodiste mora biti godina";
        }
        if (typeof car.boja !== "string") {
            error += "\nBoja mora biti string";
        }
        if (typeof car.menjac !== "string" && (car.menjac !== "Automatski" && car.menjac !== "Manuelni")) {
            error += "\nMenjač može biti manuelni ili automatski";
        }
        if (typeof car.sedista !== "number" || !car.sedista.toString().match(/([0-9]){1}/)) {
            error += "\nBroj sedišta mora biti jednocifren broj";
        }
        if (typeof car.kubikaza !== "number") {
            error += "\nKubikaža mora biti broj"
        }
        if (typeof car.dostupnost !== "boolean") {
            error += "\nDostupnost mora biti boolean"
        }
        if ((collection.find({tablice: car.tablice}).length !== 0) && update === undefined) {
            error += "\nVozilo sa takvom registracijom već postoji"
        }
        if (error === "")
            return true;
        else
            return error;
    }

}

module.exports = Car;