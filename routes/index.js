var express = require('express');
var router = express.Router();
var auth = require('./auth.js');
var plugins = require('./plugins.js');
var admin = require('./admin.js');
/*
 * Routes that can be accessed by any one
 */
router.post('/login', auth.login);
/*
 * Routes that can be accessed only by authenticated users
 */
router.get('/secured/plugins/getList', plugins.getList);
/*
 * Routes that can be accessed only by authenticated with corresponding access level
 */
router.get('/secured/admin/getStats', admin.getStats);


module.exports = router;



