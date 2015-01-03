var gulp   = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compress', function() {
  gulp.src(['lib/json5.js', 'lib/hash.js'])
    .pipe(uglify())
    .pipe(concat('hash.min.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['compress']);
