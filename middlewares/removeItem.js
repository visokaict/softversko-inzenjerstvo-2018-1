const dbsetup = require('../dbsetup');
const db = dbsetup.db;

module.exports.removeItem = function (req, res) {
    let id = req.params.id;
    let itemType = req.path.split("/")[1];
    let collection = db.getCollection(itemType);
    let result = collection.findOne({"id": id});

    if (!result)
        res.status(404).end();
    else {
        collection.remove(result);
        res.status(204).end();
    }

};