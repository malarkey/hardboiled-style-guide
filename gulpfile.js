var gulp = require('gulp')
var kit = require('gulp-kit')

gulp.task('compile', function(){
    return gulp.src('index.kit')
    .pipe(kit())
    .pipe(gulp.dest('./'));
});
