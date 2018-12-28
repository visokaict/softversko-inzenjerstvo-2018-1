const dbsetup = require('../dbsetup');
const db = dbsetup.db;
const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports.updateUser = function (req, res) {
    let collection = db.getCollection("users");
    let salt = bcrypt.genSaltSync(10);


    let result = Object.assign({}, collection.findOne({"id": req.params.id}));

    if (!result) {
        res.status(404).end();
    }

    let newUser = Object.assign(result, req.body);
    let validation = User.validate(newUser, true, req.body.lozinka || "aaaaaA1");

    if (validation !== true) {
        res.status(404).send(validation)
    } else {
        collection.findAndUpdate({"id": req.params.id}, (result) => {
            if (req.body.lozinka) {
                result.lozinkaHash = bcrypt.hashSync(req.body.lozinka, salt);
            }
            if (req.body.email) {
                result.email = req.body.email;
            }
            if (req.body.ime) {
                result.ime = req.body.ime;
            }
        });
        res.status(200).end();
    }
};
