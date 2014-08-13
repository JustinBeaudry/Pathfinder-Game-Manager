'use strict';

var source     = require('vinyl-source-stream');
var browserify = require('browserify');

var deps = [
  { path: '/public/client/vendor/angular/angular.js',         name: 'angular'          },
  { path: '/public/client/vendor/angular/angular-route.js',   name: 'angular-route'    },
  { path: '/public/client/vendor/angular/angular-resouce.js', name: 'angular-resource' },
  { path: '/public/client/vendor/angular/angular-cookies.js', name: 'angular-cookies'  }
];

module.exports = function(gulp) {

  gulp.task('browserify', function(done) {
    var b = browserify();
      
    b.add('./modules/global.mod/lib/main.js');

    deps.forEach(function(dep) {
      b.require(process.cwd() + dep.path, {expose: dep.name});
    });

    b.bundle({
      debug: true
    })
    .pipe(source('main.js'))
    .pipe(gulp.dest('public/client/global'))
    .on('end', done);
  });
};
