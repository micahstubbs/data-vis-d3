var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

var buildDir = "C:\\Users\\m\\workspace\\data-journalism-d3-course\\data-vis-d3"

gulp.task('less', function() {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('html', function(){
	gulp.src('module*/*.html')
		.pipe(livereload());
})
 
gulp.task('watch', function() {
  livereload.listen();
  livereload({ start: true })
  // gulp.watch('less/*.less', ['less']);
  // gulp.watch('module*/*.html', ['html']);
  gulp.watch(['**']).on('change', livereload.changed);
});

gulp.task('connect', function() {
    return connect.server({
        root: [buildDir],
        port: 8888, // optional
        livereload: true
    });
});

gulp.task('default', ['watch', 'connect']);