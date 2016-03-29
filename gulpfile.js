

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var sourcemap = require('gulp-sourcemaps');

gulp.task('default', ['dist'], function(){

});

gulp.task('dist', [
	'copy-html',
	//'copy-images',
	'styles',
	'server'
]);

gulp.task('copy-html', function(){
	gulp.src('./index.html')
	.pipe(gulp.dest('./dist'))
	.pipe(reload({stream: true}));	
});

//gulp.task('copy-images', function(){
//	gulp.src('images/**/*')
//	.pipe(gulp.dest('dist/images'));
//});

gulp.task('styles', function () {
	gulp.src('styles/**/*.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', sass.logError))
	.pipe(autoprefixer({
		browser: ['last 2 versions']
	}))
	.pipe(minifyCSS())
	.pipe(gulp.dest('dist/styles'))
	.pipe(reload({stream: true}));

	gulp.src('styles/**/*.css')
	.pipe(gulp.dest('dist/styles'));
});

gulp.task('server', function(){
	browserSync.init({
		server: {
			baseDir: './dist/'				
		},
		port: 8080,
		ui: {
    		port: 8000
		}
	});
	gulp.watch('./Styles/**/*.scss',['styles']);
	//gulp.watch('./index.html', ['copy-html']);
});