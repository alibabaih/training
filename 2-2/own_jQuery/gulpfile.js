var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
    gulp.run('steam');
});

gulp.task('css', function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./js'));
});

gulp.task('steam', function () {
    return gulp.src().
        pipe(watch('js/*.js'));
});