'use strict';

var rimraf = require('gulp-rimraf');

module.exports = function(gulp, config) {
  
  gulp.task('clean', function() {
    gulp.src(config.get('/clean'), {
      read: false
    })
    .pipe(rimraf());
  });
};

