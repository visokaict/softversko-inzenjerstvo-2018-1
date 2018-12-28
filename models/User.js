const uuidv4 = require('uuid/v4');
const dbsetup = require('../dbsetup');
const db = dbsetup.db;
const bcrypt = require('bcryptjs');


class User {
    constructor(korIme, ime, lozinka, email, tipKorisnika) {
        let salt = bcrypt.genSaltSync(10);

        this.lozinkaHash = bcrypt.hashSync(lozinka, salt);
        this.id = uuidv4();
        this.korIme = korIme;
        this.ime = ime;
        this.email = email;
        this.tipKorisnika = tipKorisnika;

    }

    addToDB() {
        const collection = db.getCollection("users");
        collection.insert(this);
    }

    static validate(user, update = false, passwdreset, lozinka = "") {
        const collection = db.getCollection("users");
        let passwordStrength = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}/;
        let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let error = [];
        if ((typeof user.korIme !== "string")) {
            error.push("korIme mora biti string")
        }
        if (typeof user.ime !== "string") {
            error.push("ime mora biti string");
        }
        if (!user.email.match(email)) {
            error.push("email adresa nije validna");
        }
        if (collection.find({korIme: user.korIme}).length !== 0 && !update) {
            error.push("korIme nije jedinstveno");
        }
        if (collection.find({email: user.email, id: {$ne: user.id}}).length !== 0) {
            error.push("email je već u upotrebi");
        }
        if (!lozinka.match(passwordStrength) && passwdreset) {
            error.push("lozinka mora da sadrži minimalno 6 karaktera, broj i veliko slovo");
        }
        if (error.length === 0)
            return true;
        else
            return error;
    }

}

module.exports = User;