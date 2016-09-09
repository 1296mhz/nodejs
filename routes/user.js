var express = require('express');
var router = express.Router();
var log = require('../cshlovjah/libs/log')(module);
var user = require('../controllers/user');
var Utils = require('../cshlovjah/libs/utils');
var utils = new Utils();


router.get('/', utils.isLoggedIn);
router.get('/', user.findUserAll);
router.get('/:id', user.findUserById);
router.post('/', user.addUser);
router.put('/:id', user.updateUser);
router.patch('/:id', user.updateOnePropertyUser);
router.delete('/:id', utils.god);
router.delete('/:id', user.deleteUser);

module.exports = router;