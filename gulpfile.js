'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');

const scssSource = 'assets/style/**/*.scss';

gulp.task('css', function () {
    return gulp.src(scssSource, { base: '.' })
        .pipe(plumber())
        .pipe(sass.sync({ outputStyle: 'nested' }))
        .pipe(gulp.dest('.'));
})

gulp.task('css:watch', function() {
    gulp.watch(scssSource, ['css']);
})

gulp.task('watch', ['css', 'css:watch']);

gulp.task('default', ['css']);
