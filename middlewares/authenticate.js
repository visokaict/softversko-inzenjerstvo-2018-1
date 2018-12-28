const jwt = require('jsonwebtoken');

module.exports.authenticate = function (req, res, next) {
    if (!req.body.token) {
        res.send(401).end()
    }

    try {
        req.user = jwt.verify(req.body.token, process.env.JWT_KEY);
        next();
    } catch (err) {
        res.send(401).end();
    }
};