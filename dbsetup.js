const loki = require('lokijs');
const sampledata = require('./sampledata');

const db = new loki('database.json', {
    autoload: true,
    autoloadCallback: databaseInitialize,
    serializationMethod: "pretty",
    autosave: true,
    autosaveInterval: 1000
});

function databaseInitialize() {
    sampledata.forEach(
        collection => {
            if (!db.getCollection(collection.name)) {
                const newCollection = db.addCollection(collection.name);

                collection.data.forEach(entry => {
                    newCollection.insert(entry)
                });
            }
        }
    )
}

exports.db = db;