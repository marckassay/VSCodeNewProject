'use strict';
var gulp = require('gulp');
var del = require('del');
var webserver = require('gulp-webserver');

var paths = {
    html: './src/*.html',
    scripts: ['./src/js/**/*.js'],
    styles: './src/css/**/*',
    images: './src/img/**/*'
};

gulp.task('clean', function() {
    return del(['build']);
});

gulp.task("update-html", ['clean'], function () {
    return gulp.src(paths.html, { base: './src' })
        .pipe(gulp.dest("./dist"));
});

gulp.task("update-scripts", ['clean'], function () {
    return gulp.src(paths.scripts, { base: './src' })
        .pipe(gulp.dest('./dist'));
});

gulp.task("update-styles", ['clean'], function () {
    return gulp.src(paths.styles, { base: './src' })
        .pipe(gulp.dest('./dist'));
});

gulp.task('update-images', ['clean'], function() {
    return gulp.src(paths.images, { base: './src' })
        .pipe(gulp.dest('./dist'));
});

gulp.task('startserver', function() {
    return gulp.src('./dist')
        .pipe(webserver({
        host: 'localhost',
        port: 8000,
        livereload: true,
        directoryListing: false,
        open: false
    }));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.html, ['update-html']);
    gulp.watch(paths.scripts, ['update-scripts']);
    gulp.watch(paths.styles, ['update-styles']);
    gulp.watch(paths.images, ['update-images']);
});

gulp.task('default', ['watch',
                      'update-html',
                      'update-scripts',
                      'update-styles',
                      'update-images',
                      'startserver']);

