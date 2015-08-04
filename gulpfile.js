// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    serve = require('gulp-serve');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Less
gulp.task('less', function() {
    return gulp.src('src/stylesheets/*.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'))    
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('src/js/*.js')
        // .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        // .pipe(rename('all.min.js'))
        // .pipe(uglify())
        // .pipe(gulp.dest('dist/js'));
});



// Compile Jade templates to html
gulp.task('templates', function() {
  return gulp.src('src/views/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('dist/'))
    .pipe( livereload(4002));
    console.log("hello");
});


gulp.task('copy', function() {
  gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
  gulp.src('./src/lib/**/*.*')
    .pipe(gulp.dest('./dist/js'));
  gulp.src('./src/img/**/*.*')
    .pipe(gulp.dest('./dist/img'));
  gulp.src('./src/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'));
  gulp.src('./bower_components/bootstrap/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts'));  
  gulp.src('./bower_components/fontawesome/fonts/**/*.*')
    .pipe(gulp.dest('./dist/fonts')); 
  gulp.src('./bower_components/fontawesome/css/font-awesome.min.css')
    .pipe(gulp.dest('./dist/css'));
  gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
    .pipe(gulp.dest('./dist/css'));  
  gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./dist/js'));
  gulp.src('./bower_components/jquery/dist/jquery.min.js')
    .pipe(gulp.dest('./dist/js'));
  gulp.src('./bower_components/snap.svg/dist/snap.svg-min.js')
    .pipe(gulp.dest('./dist/js'));
  gulp.src('./bower_components/html5shiv/dist/html5shiv.min.js')
    .pipe(gulp.dest('./dist/js'));
  gulp.src('./bower_components/respond/dest/respond.min.js')
    .pipe(gulp.dest('./dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    livereload.listen(4002);
    gulp.watch('src/js/*.js', ['lint', 'scripts']);
    gulp.watch('src/stylesheets/*.less', ['less']);
    gulp.watch('src/views/*.jade',['templates']);
});
  
gulp.task('serve', serve({ root: ['dist'], port: 8080}));

// Default Task
gulp.task('default', ['copy', 'lint', 'less', 'scripts', 'templates', 'watch', 'serve']);