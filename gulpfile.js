const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const notify = require('gulp-notify');
const imagemin = require("gulp-imagemin");
const babel = require("gulp-babel");

'use strict';

//bs-reload
gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: './app/dist/'
        }
    });
});
gulp.task('bs-reload', () => {
    browserSync.reload();
});

//sass
var options = {
    outputStyle: 'compressed',
    sourceMap: true,
    sourceComments: false
};
var autoprefixerOptions = {
    browsers: ['last 3 version', 'ie >= 10', 'Android 4.4']
};
gulp.task('sass', () => {
    gulp.src(['./app/src/sass/*.css', './app/src/sass/*.scss'])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cleancss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./app/dist/css/'));
});

//js
gulp.task('js', () => {
    gulp.src(['./app/src/js/*.js'])
        .pipe(babel())
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./app/dist/js/'));
});

//bundle
gulp.task('bundle', () => {
    gulp.src(['./app/src/index.js', './app/src/App.vue', './app/src/components/**/*.vue'])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest('./app/dist/bundle/'));
});

//image
gulp.task('image', () => {
    gulp.src(['./app/src/images/*.jpg', './app/src/images/*.jpeg', './app/src/images/*.png'])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(imagemin())
        .pipe(gulp.dest('./app/dist/images/'));
    gulp.src(['./app/src/images/middle/*.jpg', './app/src/images/middle/*.jpeg', './app/src/images/middle/*.png'])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(imagemin())
        .pipe(gulp.dest('./app/dist/images/middle/'));
    gulp.src(['./app/src/images/large/*.jpg', './app/src/images/large/*.jpeg', './app/src/images/large/*.png'])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(imagemin())
        .pipe(gulp.dest('./app/dist/images/large/'));
    gulp.src(['./app/src/images/hero/*.jpg', './app/src/images/hero/*.jpeg', './app/src/images/hero/*.png'])
        .pipe(plumber({ errorHandler: notify.onError('<%= error.message %>') }))
        .pipe(imagemin())
        .pipe(gulp.dest('./app/dist/images/hero/'));
});

//watch
gulp.task('watch', () => {
    gulp.watch(['./app/src/sass/*.css', './app/src/sass/*.scss', './app/src/sass/**/*.scss'], ['sass']);
    gulp.watch(['./app/src/js/*.js'], ['js']);
    gulp.watch(['./app/src/index.js', './app/src/App.vue', './app/src/components/**/*.vue'], ['bundle']);
    gulp.watch(['./app/src/images/*.jpg', './app/src/images/*.jpeg', './app/src/images/*.png'], ['image']);
    gulp.watch(['./app/src/images/middle/*.jpg', './app/src/images/middle/*.jpeg', './app/src/images/middle/*.png'], ['image']);
    gulp.watch(['./app/src/images/large/*.jpg', './app/src/images/large/*.jpeg', './app/src/images/large/*.png'], ['image']);
    gulp.watch(['./app/src/images/hero/*.jpg', './app/src/images/hero/*.jpeg', './app/src/images/hero/*.png'], ['image']);
    gulp.watch(['./app/dist/*.html', './app/dist/**/*.pde', './app/dist/**/*.css', './app/dist/**/*.js'], ['bs-reload']);
});

//default
gulp.task('default', ['watch', 'browser-sync'], () => {});