#!/usr/bin/env node

'use strict';

var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    connect    = require('gulp-connect'),
    open       = require('gulp-open'),
    plumber    = require('gulp-plumber'),
    config     = {
      server: '0.0.0.0',
      port:   3000
    };

/* connect */
gulp.task('connect', function() {
  connect.server({
    port: config.port,
    livereload: true,
    root: 'example'
  });
});

/* htmls */
gulp.task('htmls', function() {
  return gulp.src('**/*.html')
  .pipe(connect.reload());
});

/* styles */
gulp.task('styles', function() {
  return gulp.src('example/css/main.sass')
  .pipe(plumber())
  .pipe(sass())
  .pipe(plumber.stop())
  .pipe(gulp.dest('example/css'))
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
  gulp.watch('example/css/**/*+(.sass|.scss|.css)', ['styles']);
  /* watch .js files */
  gulp.watch('assets/js/**/*.js', ['scripts']);
});

gulp.task('open', function() {
  var option = {
    url: 'http://localhost:' + config.port
  };
  gulp.src('example/index.html')
  .pipe(open('', option));
});

gulp.task('default', ['connect', 'styles', 'scripts', 'htmls', 'watch', 'open']);
