var config = require('./environment');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var config_DB = require('./database.js');
var conf = function (app, express) {
    app.set('config', config);
    app.use(logger('combined'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({extended: false}));
    // parse application/json
    app.use(bodyParser.json());
    // Auth Middleware - This will check if the token is valid
    // Only the requests that start with /secured/ will be checked for the token.
    // Any URL's that do not follow the below pattern should be avoided unless you
    // are sure that authentication is not needed
    app.all('/secured/*', [require('../middlewares/validateRequest')]);

    // If no route is matched by now, it must be a 404
    app.use('/', [require('../routes')]);
    app.use(function (req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });




};
module.exports = conf;