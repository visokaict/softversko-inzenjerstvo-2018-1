const Car = require('../models/Car');

module.exports.search = function search(req, res) {
    let queryEntries = Object.entries(req.query);
    let newQuery = {};

    //query operatori za filtriranje se pretvaraju u objekte
    queryEntries.forEach((entry) => {
        if (entry[1].startsWith("{")) {
            newQuery[entry[0]] = JSON.parse(entry[1]);
        } else {
            newQuery[entry[0]] = entry[1];
        }
    });

    let results = Car.find(newQuery);
    if (results.length === 0)
        res.status(204).end();
    else
        res.send(results);
};
