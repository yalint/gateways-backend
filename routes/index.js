var express = require('express');
var router = express.Router();
require('../components/Gateway/routes')(router);
require('../components/Device/routes')(router);
module.exports = router;