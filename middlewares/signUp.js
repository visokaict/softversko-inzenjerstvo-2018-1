const dbsetup = require('../dbsetup');
const User = require('../models/User');

module.exports.signUp = function signUp(req, res) {
    console.log(req.body);
    let newUser = new User(...Object.values(req.body));
    let validation = newUser.validate(req.body.lozinka);
    if (validation !== true) {
        res.status(400).send(validation);
        return;
    } else
        newUser.addToDB();
    res.status(201).end();

};