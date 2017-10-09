var gulp = require("gulp");
var gutil = require("gulp-util");
var paths = {
    pages: ['src/**']
};

gulp.task("src", function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest("dist"));
});

gulp.task("default", ["src"]);