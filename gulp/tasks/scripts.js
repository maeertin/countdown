'use strict';

var config     = require('../config.json').js;
var onError    = require('../lib/onError');
var gulp       = require('gulp');
var uglify     = require('gulp-uglify');
var rename     = require('gulp-rename');
var jshint     = require('gulp-jshint');
var plumber    = require('gulp-plumber');
var stylish    = require('jshint-stylish');

gulp.task('js-lint', function() {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler : onError}))
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('js', ['js-lint'], function () {
	return gulp.src(config.src)
		.pipe(plumber({errorHandler : onError}))
		.pipe(rename(config.id + '.js'))
		.pipe(gulp.dest(config.dist))
		.pipe(uglify())
		.pipe(rename(config.id + '.min.js'))
		.pipe(gulp.dest(config.dist));
});
