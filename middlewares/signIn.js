const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dbsetup = require('../dbsetup');
const db = dbsetup.db;

module.exports.signIn = function (req, res) {
    let collection = db.getCollection("users");
    let user = collection.findOne({korIme: req.body.korIme});
    console.log(process.env.JWT_KEY);
    if (!user) {
        res.status(401).end();
    }

    if (bcrypt.compareSync(req.body.lozinka, user.lozinkaHash)) {
        let token = jwt.sign({
                email: user.email,
                id: user.id
            },
            process.env.JWT_KEY,
            {
                expiresIn: "2h"
            });
        res.status(200).send(token);
    } else {
        res.status(401).end();
    }

};