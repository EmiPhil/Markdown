var gulp        = require('gulp'),
    del         = require('del'),
    run         = require('gulp-run'),
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    jshint      = require('gulp-jshint'),
    browserSync = require('browser-sync'),
    package     = require('./package.json'),
    reload      = browserSync.reload,
    stylish     = require('jshint-stylish');

gulp.task('default', ['serve']);

/**
 * Running Bower
 */
gulp.task('bower', function() {
  run('bower install').exec();
});

/**
 * Cleaning dist/ folder
 */
gulp.task('clean', function(cb) {
  del(['dist/js', 'dist/css'], cb);
});

/**
 * Running livereload server
 */
gulp.task('server', function() {
  browserSync({
    server: {
     baseDir: './public' 
    }
  });
});

gulp.task('jshint', function () {
  return gulp.src(package.paths.js)
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

gulp.task('build-css', function () {
  return gulp.src(package.paths.sass)
  .pipe(sass({ errLogToConsole : true }))
  .pipe(concat(package.dest.style))
  .pipe(cssmin())
  .pipe(gulp.dest(package.dest.distcss));
});

gulp.task('make', function () {
  return gulp.src(package.paths.js)
  .pipe(concat(package.dest.app))
  .pipe(uglify({ mangle : false }))
  .pipe(gulp.dest(package.dest.distjs));
});

/**
 * Compiling resources and serving application
 */
gulp.task('serve', ['bower', 'clean', 'jshint', 'build-css', 'make', 'server'], function() {
  return gulp.watch([
    package.paths.js, package.paths.html, package.paths.sass
  ], [
   'jshint', 'build-css', 'make', browserSync.reload
  ]);
});