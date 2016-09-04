/**
 * Created by cshlovjah on 04.09.16.
 */
var log = require('./log');

function AuthPass() {};

AuthPass.prototype.isLoggedIn = function (req, res, next) {
    if (!req.user) {
        res.render('login', {user: req.user, title: "Авторизуйтесь"});        
    } else {
        if (req.user.status == 'true') {
           return next();
        } else {
            //log.info("Пользователь: " + req.user.username + " отключен!");
            res.render('login', {user: req.user, title: "Авторизуйтесь"});
        }
    }
};

module.exports = AuthPass;