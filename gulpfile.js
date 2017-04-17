var gulp = require('gulp'),
server = require('gulp-server-livereload'),
sass = require('gulp-sass'),
prefix = require('gulp-autoprefixer'),
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-csso');

//server
gulp.task('serv', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      port: 4200,
      open: true,
    }));
});

 //styles 
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 15 versions']
    }))
    .pipe(gulp.dest('app/css'));
});

//build
gulp.task('build', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
  gulp.watch('app/sass/**/*.sass', ['style']);
})

gulp.task('default', ['serv', 'watch'])