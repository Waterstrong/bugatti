'use strict';
var gulp = require('gulp');
var requirDir = require('require-dir');

gulp.opts = {};
gulp.opts.path = {
    src : './src/main/webapp/veyron/**/',
    dest: './src/main/webapp/.tmp/'
};

requirDir('./tasks', {recurse: true});