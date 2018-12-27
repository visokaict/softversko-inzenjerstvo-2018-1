const dbsetup = require('../dbsetup');
const db = dbsetup.db;

module.exports.getItem = function search(req, res) {
    let itemType = req.path.split("/")[1];

    const collection = db.getCollection(itemType);

    if (!req.params.id) {
        res.send(collection.find())
    }

    const item = collection.findOne({id: req.params.id});
    if (item) {
        res.send(item);
    } else {
        res.status(204).end();
    }
};
