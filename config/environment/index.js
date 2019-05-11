var path = require('path');
var _ = require('lodash');
// All configurations will extend these options
var all = {
    env: process.env.NODE_ENV,
    // Root path of server
    root: path.normalize(__dirname + '/../../'),
    // Server port
    port: process.env.PORT || 3000
};
// Export the config object based on the NODE_ENV
// Individual overwrites global.
module.exports = _.merge(
    all,
    require('./' + process.env.NODE_ENV + '.js') || {});