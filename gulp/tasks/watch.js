'use strict';

var config = require('../config.json').watch;
var gulp   = require('gulp');
var seq    = require('run-sequence');

gulp.task('watch', function() {
	gulp.watch(config.less, function() { seq('less', 'bs-reload') });
	gulp.watch(config.js, function() { seq('js', 'bs-reload') });
	gulp.watch('**/*.html', function() { seq('bs-reload') });
});
