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
}

module.exports = Car;