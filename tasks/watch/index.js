'use strict';

var gulp  = require('gulp');

gulp.task('watch', function() {
    gulp.watch(gulp.opts.path.src+'*.scss', ['sass']);
    gulp.watch(gulp.opts.path.src+'images/*', ['imagemin']);
});