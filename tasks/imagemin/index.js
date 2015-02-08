'use strict';

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var reload = require('browser-sync').reload;

gulp.task('imagemin', function(){
    pipeImage(gulp.opts.path);
});

var pipeImage = function(target) {
    gulp.src(target.src+'images/**/*.{png,jpg,jpeg}')
        .pipe(imagemin())
        .pipe(gulp.dest(target.dest))
        .pipe(reload({stream:true}));
};