const uuidv4 = require('uuid/v4');
const dbsetup = require('../dbsetup');
const db = dbsetup.db;
const bcrypt = require('bcryptjs');


class User {
    constructor(korIme, ime, lozinka, email, tipKorisnika) {
        let salt = bcrypt.genSaltSync(10);

        this.lozinkaHash = bcrypt.hash(lozinka, salt);
        this.idKorisnika = uuidv4();
        this.korIme = korIme;
        this.ime = ime;
        this.email = email;
        this.tipKorisnika = tipKorisnika;

    }

    addToDB() {
        const collection = db.getCollection("users");
        collection.insert(this);
    }

    validate(lozinka) {
        const collection = db.getCollection("users");
        let passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/;
        let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let error = "";
        if (typeof this.korIme !== "string") {
            error += "\nkorIme mora biti string";
        }
        if (typeof this.ime !== "string") {
            error += "\nime mora biti string";
        }
        if (!this.email.match(email)) {
            error += "\nemail adresa nije validna";
        }
        if (collection.find({korIme: this.korIme}).length !== 0) {
            error += "\nkorIme nije jedinstveno"
        }
        if (collection.find({email: this.email}).length !== 0) {
            error += "\nemail je već u upotrebi"
        }
        if (!lozinka.match(passwordStrength)) {
            error += "\nlozinka mora da sadrži minimalno 6 karaktera, broj i veliko slovo";
        }
        if (error === "")
            return true;
        else
            return error;
    }

}

module.exports = User;