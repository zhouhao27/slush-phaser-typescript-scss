var gulp = require('gulp');

// plug-ins
var jshint 		= require('gulp-jshint');
var changed 	= require('gulp-changed');
var minifyHtml 	= require('gulp-minify-html');
var concat 		= require('gulp-concat');
var stripDebug 	= require('gulp-strip-debug');
var uglify 		= require('gulp-uglify');
var autoprefix 	= require('gulp-autoprefixer');
var minifyCSS 	= require('gulp-minify-css');
var sass		= require('gulp-sass');
var typescript	= require('gulp-typescript');
var browserSync	= require('browser-sync');
var clean 		= require('gulp-clean');
var runSequence = require('run-sequence');

// definition of paths
var scriptsSrc 	= './src/scripts/**/*.ts';
var htmlSrc 	= ['./src/*.html','./src/templates/*.html'];
var stylesSrc 	= './src/styles/**/*.scss';
var phaserSrc	= './src/libs/phaser/build/phaser.min.js';

// browser sychnoization
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: './build'
		}
	});
});

// clean
gulp.task('clean', function() {
	return gulp.src('./build', {read: false})
        .pipe(clean());
});

// copy files needed
gulp.task('copy', function() {
	return gulp.src(phaserSrc)
		.pipe(gulp.dest('./build/libs/'))
		.pipe(browserSync.reload({stream: true}));
});

// JS hint task
gulp.task('jshint', function() {
	return gulp.src(scriptsSrc)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// minify html
gulp.task('html', function() {
	var htmlDest = './build';

	return gulp.src(htmlSrc)
		.pipe(changed(htmlDest))
		.pipe(minifyHtml())
		.pipe(gulp.dest(htmlDest))
		.pipe(browserSync.reload({stream : true}));
});

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
	return gulp.src([scriptsSrc])
		.pipe(typescript({
			declarationFiles: true,
			noExternalResolve: false,
			sortOutput: true
		}))
		.pipe(concat('script.min.js'))
		.pipe(stripDebug())
		.pipe(uglify())		
		.pipe(gulp.dest('./build/scripts'))
		.pipe(browserSync.reload({stream : true}));
});

// CSS concat, auto-prefix and minify
gulp.task('styles', function() {
  	return gulp.src(stylesSrc)
	  	.pipe(sass())
	    .pipe(concat('styles.min.css'))
	    .pipe(autoprefix('last 2 versions'))
	    .pipe(minifyCSS())
	    .pipe(gulp.dest('./build/styles/'))
	    .pipe(browserSync.reload({stream : true}));
});

// build only
gulp.task('build', ['jshint', 'copy','html','scripts','styles','browserSync'], function() {
});

// default task
gulp.task('default', function(done) {
    runSequence('clean', 'build', function() {
		gulp.watch(htmlSrc,['html']);
		gulp.watch(scriptsSrc, ['scripts']);
		gulp.watch(stylesSrc, ['styles']);        
        done();
    });
});


