var gulp = require('gulp');
var server = require('gulp-server-livereload');

gulp.task('default', function() {
  gulp.start('server');
});

gulp.task('server', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
