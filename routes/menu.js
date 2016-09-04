/**
 * Created by cshlovjah on 04.09.16.
 */
var express = require('express');
var router = express.Router();
var menu = require('../controllers/menu');
var AuthPass = require('../cshlovjah/libs/authPass');
var authPass = new AuthPass();

router.get('/', authPass.isLoggedIn);

router.get('/administration', menu.findMenuAdministrationAll);

module.exports = router;