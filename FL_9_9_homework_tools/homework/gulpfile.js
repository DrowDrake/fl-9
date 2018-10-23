const gulp = require('gulp'),
    connect = require('gulp-connect'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    watch = require('gulp-watch');

gulp.task('connect', function () {
    connect.server({
        root: 'src',
        livereload: true,
        port: 8080
    });
});

gulp.task('html', function () {
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./src'))
        .pipe(connect.reload());
});

gulp.task('livereload', function() {
    gulp.src(['./src/temp/css/*.css', './src/temp/js/*.js'])
        .pipe(watch(['./src/temp/css/*.css', './src/temp/js/*.js']))
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./src/sass/*.scss', ['css-source-map']);
    gulp.watch('./src/js/*.js', ['js-source-map']);
});

gulp.task('default', function () {
    runSequence('build', 'connect', 'livereload', 'watch');
});

gulp.task('build', function () {
    runSequence('clean', ['js-source-map', 'css-source-map'])
});

gulp.task('copy-html', function () {
    return gulp.src('src/app.html')
        .pipe(rename("index.html"))
        .pipe(gulp.dest("src/temp/"));
});

gulp.task('move-to-dist', function () {
    return gulp.src([
        './src/temp/css/*.css',
        './src/temp/js/*min.js',
        './src/temp/index.html'
    ], { base: './src/temp/' })
        .pipe(gulp.dest('dist'));
});

gulp.task('build-prod', function () {
    runSequence('clean', ['js-prod', 'css-prod', 'copy-html'], 'move-to-dist');
});

gulp.task('lint', function () {
    return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});