var gulp = require('gulp'); 

// plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

// concatenate, minify js
gulp.task('js', function() {
    return gulp.src('js/**/*.js')
        .pipe(concat('bottomDrawer.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('bottomDrawer.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// less compile, autoprefix, minify css
gulp.task('less', function() {
    return gulp.src('css/style.less')
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(rename('bottomDrawer.css'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('bottomDrawer.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('dist'));
});

// watch files for changes
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('css/*.less', ['less']);
});

// default task
gulp.task('default', ['js', 'less']);