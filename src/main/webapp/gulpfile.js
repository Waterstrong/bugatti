'use strict';
var gulp = require('gulp');
var requirDir = require('require-dir');

gulp.opts = {};
gulp.opts.veyron = {
    src : 'veyron/**/',
    dest: '.tmp/'
};
gulp.opts.path = {};

requirDir('tasks/', {recurse: true});