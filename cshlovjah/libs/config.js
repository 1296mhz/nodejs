/**
 * Created by cshlovjah on 04.09.16.
 */
var fs    = require('fs');
var nconf = require('nconf');

nconf.argv()
    .env()
    .file({ file: './config.json' });

module.exports = nconf;
