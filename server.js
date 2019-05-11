var express = require('express');
var app = express();
require('./config/express')(app, express);
// Start the server

app.listen(app.get('config').port, function () {
    console.log('Express server listening on %d, in %s mode', app.get('config').port, app.get('env'));
});
