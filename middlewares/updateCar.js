const dbsetup = require('../dbsetup');
const db = dbsetup.db;
const Car = require('../models/Car');

module.exports.update = function (req, res) {
    let id = req.params.id;
    let itemType = req.path.split("/")[1];
    let collection = db.getCollection(itemType);

    let result = collection.findOne({"id": id});
    let resultValidation = Object.assign({}, result);

    if (!result) {
        res.status(404).end();
    }

    this.validate = Car.validate(Object.assign(resultValidation, req.body), true);

    if (validate !== true) {
        res.status(400).send(validate)
    } else {
        collection.findAndUpdate({"id": id}, (result) => {
            Object.assign(result, req.body);
        });
        res.status(200).end();
    }
};
