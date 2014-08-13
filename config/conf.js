'use strict';

var confidence = require('confidence');
var config     = require('config.json');

module.exports = new confidence.Store(config);
