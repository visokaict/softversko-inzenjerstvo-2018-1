const dbsetup = require('../dbsetup');
const db = dbsetup.db;

module.exports.getItem = function (req, res) {
    let itemType = req.path.split("/")[1];
    let collection = db.getCollection(itemType);

    if (!req.params.id) {
        res.send(collection.find())
    }

    let item = collection.findOne({id: req.params.id});

    if (item) {
        res.send(item).end();
    } else {
        res.status(204).end();
    }
};
