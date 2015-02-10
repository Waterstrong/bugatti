'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
    pipeClean(gulp.opts.path);
});

var pipeClean = function(target) {
    //gulp.src(target.dest, {read: false})
    //    .pipe(clean());
};