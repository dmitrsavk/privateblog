const gulp = require('gulp');
const path = require('path');

gulp.task('static', () => gulp
    .src(path.join(__dirname, './assets/**/*'))
    .pipe(gulp.dest(path.join(__dirname, './build/static/')))
);