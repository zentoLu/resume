
var gulp = require('gulp');
var uglify = require('gulp-uglify');//混淆js
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var path = {
    css: {
        src_scss: 'scss/*.scss',
        src_css: 'src/css',
        dist: 'css'
    }
};

//var reload  = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', ['sass'],function() {
	//gulp.watch(path.css.src_scss, ['sass']);
    browserSync({
        files:'**',
        server: {
            baseDir: './'
        }
    });

    
    //gulp.watch("*.html").on('change', reload);
});

//scss 编译
gulp.task('sass', function(){
    return sass(path.css.src_scss, { style: 'expanded',sourcemap: true})
        //.pipe(gulp.dest(path.css.sassDest))
        //.pipe(rename({ suffix: '.min' }))
        //.pipe(minifycss())
        //.pipe(concat(''))
        // For inline sourcemaps
        //.pipe(sourcemaps.write())

        // For file sourcemaps
        .pipe(sourcemaps.write('maps', {
          includeContent: false,
          sourceRoot: 'scss'
        }))
        .pipe(gulp.dest(path.css.dist))
        .pipe(browserSync.reload({stream:true}))
        .pipe(notify({ message: 'css task complete' }));
});

gulp.task('lib', function() {
    gulp.src(['./bower_components/pagepiling.js/jquery.pagepiling.css'])
        .pipe(gulp.dest('./css'));
    gulp.src(['./bower_components/pagepiling.js/jquery.pagepiling.js'])
        .pipe(gulp.dest('./lib'));
});

gulp.task('minjs', function() {
    gulp.src('js/index.js')
        .pipe(uglify())
        .pipe(rename('index.min.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch(path.css.src_scss, ['sass']);
});

gulp.task('default', ['watch', 'serve']);
