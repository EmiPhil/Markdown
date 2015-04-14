var gulp        = require('gulp'),

/**
 * Js gulp helpers
 */
    uglify      = require('gulp-uglify'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),

/**
 * SCSS gulp helpers
 */
    sass        = require('gulp-sass'),
    cssmin      = require('gulp-minify-css'),
    concat      = require('gulp-concat'),

/**
 * Other
 */
    package     = require('./package.json'),
    del         = require('del'),
    run         = require('gulp-run'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

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
    del([package.dest.distjs, package.dest.distcss], cb);
});

/**
 * Linting the app
 */
gulp.task('jshint', function () {
return gulp.src(package.paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

/**
 * Compile the css
 */
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
 * Running livereload server
 */
gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: './public' 
        }
    });
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