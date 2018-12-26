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

    validate() {
        const collection = db.getCollection("cars");

        let error = "";
        if (typeof this.tablice !== "string") {
            error += "\nTablice moraju biti string";
        }
        if (typeof this.modelVozila !== "string") {
            error += "\nModel mora biti string";
        }
        if (typeof this.godiste !== "number" || !this.godiste.toString().match(/([0-9]){4}/)) {
            error += "\nGodiste mora biti godina";
        }
        if (typeof this.boja !== "string") {
            error += "\nBoja mora biti string";
        }
        if (typeof this.menjac !== "string" && (this.menjac !== "Automatski" && this.menjac !== "Manuelni")) {
            error += "\nMenjač može biti manuelni ili automatski";
        }
        if (typeof this.sedista !== "number" || !this.sedista.toString().match(/([0-9]){1}/)) {
            error += "\nBroj sedišta mora biti jednocifren broj";
        }
        if (typeof this.kubikaza !== "number") {
            error += "\nKubikaža mora biti broj"
        }
        if (typeof this.dostupnost !== "boolean") {
            error += "\nDostupnost mora biti boolean"
        }
        if (collection.find({tablice: this.tablice}).length !== 0) {
            error += "\nVozilo sa takvom registracijom već postoji"
        }
        if (error === "")
            return true;
        else
            return error;
    }

}

module.exports = Car;