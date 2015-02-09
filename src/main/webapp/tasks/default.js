'use strict';
var gulp = require('gulp');
var runSequence = require('gulp-run-sequence');
var cliArgs = require("command-line-args");

var cli = cliArgs([
    { name: "veyron", type: Boolean, alias: "y", description: "watch veyron scripts, styles, images, etc." },
    { name: "help", type: Boolean, alias: "h" , description: "Print usage instructions"}
]);

var options = cli.parse();

var usage = cli.getUsage({
    header: "Bugatti Web Application.",
    footer: "For more information, visit README.md file"
});

gulp.task('default', function(callback) {
    if(options.help) {
        console.log(usage);
    } else if(options.veyron) {
        console.log(Object.keys(options)[0]);
        sequenceTask(gulp.opts.veyron, callback);
    }
});

var sequenceTask = function(target, callback) {
    gulp.opts.path = target;
    runSequence(['sass', 'imagemin'], 'browser-sync', 'watch', callback);
};