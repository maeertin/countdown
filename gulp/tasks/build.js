'use strict';

var config = require('../config.json').watch;
var gulp   = require('gulp');
var seq    = require('run-sequence');

gulp.task('build', function() {
	seq('less', 'js');
});
