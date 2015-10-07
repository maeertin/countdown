'use strict';

var config      = require('../config.json').bs;
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var nodemon     = require('gulp-nodemon');

gulp.task('nodemon', function(cb) {
	if (!config.node.start) {
		cb();
		return;
	}

	var started = false;
	
	return nodemon({
			script : config.node.script
		})
		.on('start', function() {
			if (!started) {
				cb(); started = true; 
			} 
		});
});

gulp.task('bs', ['nodemon'], function() {
	browserSync({
		proxy : config.host,
		open  : false
	});
});

gulp.task('bs-reload', function() {
	browserSync.reload({once: true});
});

gulp.task('bs-stream', function() {
	browserSync.stream();
});
