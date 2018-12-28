const User = require('../models/User');

module.exports.signUp = function (req, res) {
    let userOrder = {korIme: "", ime: "", lozinka: "", email: "", tipKorisnika: ""};

    let newUser = new User(
        ...Object.values(
            Object.assign(userOrder, req.body)
        )
    );

    let validation = User.validate(newUser, false, req.body.lozinka);

    if (validation !== true) {
        res.status(400).send(validation);
    } else {
        newUser.addToDB();
        res.status(201).end();
    }
};