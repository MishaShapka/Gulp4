module.exports = function() {
    $.gulp.task('sass', function () {
        return gulp.src('./src/sass/**/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('./css'));
      });
};