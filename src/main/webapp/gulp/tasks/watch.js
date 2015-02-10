'use strict';

var gulp  = require('gulp');

gulp.task('watch', function() {
    watchTask(gulp.opts.path);
});

var watchTask = function(target) {
    gulp.watch(target.src+'/*.scss', ['sass']);
    gulp.watch(target.src+'images/*', ['imagemin']);
};