'use strict';

var modules = require('rind-modules-gulp');

module.exports = function(gulp, config) {

  var opts = {
    anatmoy : config.get('/anatomy'),
    output  : 'public',
    rm      : true
  };

  gulp.task('modules', modules(gulp, opts));
};

