var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');

// Sass processing
gulp.task('sass', function() {
	return sass('./css/*.scss')
		.pipe(gulp.dest('./css/'));
});

// Watch scss files
gulp.task('watch', function() {
	gulp.watch('./css/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['watch']);
