
/**
 * Module Dependencies
 */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

/**
 * Gulp Tasks
 */

gulp.task('nodemon', () => {
  var called = false;
  return nodemon({
    script: 'server/app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  });
});

gulp.task('default', ['nodemon']);