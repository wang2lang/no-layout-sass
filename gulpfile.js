#!/usr/bin/env node

'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    connect    = require('gulp-connect'),
    open       = require('gulp-open'),
    config     = {
      server: '0.0.0.0',
      port:   1818
    };

/* connect */
gulp.task('connect', function() {
  connect.server({
    port: config.port,
    livereload: true
  });
});

/* htmls */
gulp.task('htmls', function() {
  return gulp.src('**/*.html')
  .pipe(connect.reload());
});

/* styles */
gulp.task('styles', function() {
  return gulp.src('assets/css/main.sass')
  .pipe(sass())
  .pipe(gulp.dest('assets/css'))
  .pipe(connect.reload());
});

/* scripts */
gulp.task('scripts', function() {
  return gulp.src('assets/js/**/*.js')
  .pipe(connect.reload());
});

gulp.task('watch', function() {
  /* watch .html files */
  gulp.watch('**/*.html', ['htmls']);
  /* watch .sass|.scss files */
  gulp.watch('assets/css/**/*+(.sass|.scss|.css)', ['styles']);
  /* watch .js files */
  gulp.watch('assets/js/**/*.js', ['scripts']);
});

gulp.task('open', function() {
  var option = {
    url: 'http://localhost:' + config.port
  };
  gulp.src('index.html')
  .pipe(open('', option));
});

gulp.task('default', ['connect', 'styles', 'scripts', 'htmls', 'watch', 'open']);
