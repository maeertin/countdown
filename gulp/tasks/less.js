'use strict';

var config     = require('../config.json').less;
var onError    = require('../lib/onError');
var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var rename     = require('gulp-rename');
var less       = require('gulp-less');
var minifycss  = require('gulp-minify-css');

gulp.task('less', function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler: onError}))
		.pipe(less())
		.pipe(rename(config.id + '.css'))
		.pipe(gulp.dest(config.dist))
		.pipe(minifycss({noAdvanced: true}))
		.pipe(rename(config.id + '.min.css'))
		.pipe(gulp.dest(config.dist));
});
