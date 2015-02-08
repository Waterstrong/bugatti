'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssshrink = require('gulp-cssshrink');

gulp.task('compress', function () {
    compressAll(gulp.opts.path);
});

var compressAll = function(target) {
    gulp.src(target.dest + '*.js')
        .pipe(uglify())
        .pipe(gulp.dest(target.dest));
    gulp.src(target.dest + '*.css')
        .pipe(cssshrink())
        .pipe(gulp.dest(target.dest));
};