var express = require('express');
var router = express.Router();
var AuthPass = require('../cshlovjah/libs/authPass');
var authPass = new AuthPass();

//router.get('/', authPass.isLoggedIn);

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {user: req.user, title: "Панель управления"});
});

module.exports = router;
