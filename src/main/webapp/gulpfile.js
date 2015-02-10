'use strict';
var gulp = require('gulp');
var requirDir = require('require-dir');

gulp.opts = {};
gulp.opts.veyron = {
    src : 'veyron/components/**/',
    dest: '.tmp/'
};
gulp.opts.path = {};

requirDir('gulp/tasks/', {recurse: true});