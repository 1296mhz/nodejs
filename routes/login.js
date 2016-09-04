var express = require('express');
var passport = require('passport');
var log = require('../cshlovjah/libs/log');
var router = express.Router();

router.get('/', function (req, res) {
    if (!req.user) {
        var answer = {
            user: req.user,
            loggedIn: false,
            title: "Авторизуйтесь!"
        };

        //res.json(answer)
        log.info("Попытка входа: Авторизуйтесь!");
        res.render('login', {user: req.user, title: "Авторизуйтесь"});

    }
    else {
        if (req.user.status == 'true') {
            var answer = {
                user: req.user,
                loggedIn: true,
                title: "Панель управления"
            };
            res.json(answer)
        } else {
            res.render('login', {user: req.user, title: "Авторизуйтесь"});
        }
    }
});


router.post('/', passport.authenticate('local'), function (req, res) {
    console.log("Пользователь: : " + req.user.username + " вошел.");
   
    if (!req.user) {
        res.render('login', {user: req.user, title: "Авторизуйтесь"});
    } else {

        if (req.user.status == 'true') {
            var role;

            req.session.save(function (err) {
                if (err) {
                }
                return;
            });
            role = req.user.role;
            res.redirect('/');
        } else {
          
            console.log("Пользователь: " + req.user.username + " отключен!");
            res.render('login', {user: req.user, title: "Авторизуйтесь"});
        }
    }
});

module.exports = router;