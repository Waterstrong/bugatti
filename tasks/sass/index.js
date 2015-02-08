'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var reload = require('browser-sync').reload;

gulp.task('sass',function(){
    pipeSass(gulp.opts.path);
});
var pipeSass = function(target) {
    gulp.src(target.src+'*.scss')
        .pipe(sass())
        .pipe(gulp.dest(target.dest))
        .pipe(reload({stream:true}));
};