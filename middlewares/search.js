const dbsetup = require('../dbsetup');
const db = dbsetup.db;

module.exports.search = function search(req, res) {
    let queryEntries = Object.entries(req.query);
    let newQuery = {};
    let searchItem = req.path.split("/")[1];

    //obrada query stringova
    queryEntries.forEach((entry) => {

        if (entry[1].startsWith("{")) {
            newQuery[entry[0]] = JSON.parse(entry[1]);
        } else {
            if ((entry[1] === "true") || (entry[1] === "false")) {
                newQuery[entry[0]] = (entry[1] === "true");
            } else if (typeof parseInt(entry[1]) === "number") {
                newQuery[entry[0]] = parseInt(entry[1]);
            } else newQuery[entry[0]] = entry[1];
        }
    });

    let collection = db.getCollection(searchItem);
    let results = collection.find(newQuery);
    if (results.length === 0)
        res.status(204).end();
    else
        res.send(results);
};
