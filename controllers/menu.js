/**
 * Created by cshlovjah on 04.09.16.
 */
var log = require('../cshlovjah/libs/log')(module);

exports.findMenuAdministrationAll = function (req, res) {
    log.info('Retrieving All items menu\'s:');
    var menuItems = [
        {
            nameItem: "Пользователи",
            classItem: "user-control",
            hrefItem: "users"
        }, {
            nameItem: "Ремонтные-боксы",
            classItem: "boxes-control",
            hrefItem: "boxes"
        }, {
            nameItem: "Ремонтные-посты",
            classItem: "posts-control",
            hrefItem: "posts"
        }, {
            nameItem: "Типы работ",
            classItem: "typeOfWork-control",
            hrefItem: "typeOfWork"
        }, {
            nameItem: "Клиенты",
            classItem: "customer-control",
            hrefItem: "customers"
        }, {
            nameItem: "Журнал",
            classItem: "log-control",
            hrefItem: "log"
        }

    ];
    res.json(menuItems);
};