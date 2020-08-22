var gulp = require('gulp');

gulp.task('watch', function(){
    return gulp.watch('src/**/*', ['build']);
});

gulp.task('html', function(){
    return gulp.src('src/*.html')
    .pipe(gulp.dest('build'));
});

gulp.task('css', function(){
    return gulp.src('src/css/*.css')
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js'));
});

gulp.task('fonts', function(){
    return gulp.src('src/fonts/*')
    .pipe(gulp.dest('build/fonts'));
});

gulp.task('images', function(){
    return gulp.src('src/images/*')
    .pipe(gulp.dest('build/images'));
});


gulp.task('build', ['html', 'css', 'js', 'fonts', 'images']); // بيلد تقوم باستدعاها كلها هي عبارة عن وظيفة تمجع بين الخمس كلها