var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

//minify css
gulp.task('sass', function () {
	gulp.src('./scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(gulp.dest('./css-min'));
});

//watches for changes in sass or javascript files
gulp.task('sass:watch', function() {
	gulp.watch('./scss/**/*.scss', ['sass']);
	gulp.watch('./scripts/*.js', ['compress']);
});

//minifys js
gulp.task('compress', function() {
  return gulp.src('scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('js-min'));
});


