/**
 * Created by cshlovjah on 04.09.16.
 */
var mongoose    = require('mongoose');
var log         = require('./log')(module);
var config      = require('./config');


log.info(config.get('mongoose:uri'));

mongoose.connect(config.get('mongoose:uri'));


mongoose.connection;

module.exports = mongoose;
