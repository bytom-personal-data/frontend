'use strict';

const
    gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browsersync = require('browser-sync'),
    streamqueue = require('streamqueue'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin');


const folder = {
    src: './assets/',
    dist: './prod/'
};

const server = browsersync.create();

gulp.task('html', function(){
    return gulp.src([
            folder.src + '*.html',
            folder.src + '*.ico',
            folder.src + '*.png'
        ])
        .pipe(gulp.dest(folder.dist));
});

gulp.task('fonts', function(){
    return gulp.src([
        folder.src + 'fonts/**/*'
    ])
        .pipe(gulp.dest(folder.dist + 'fonts/'));
});

gulp.task('imageMin', function() {
    return gulp.src('img/**/*.{jpg,png,gif}', {cwd: folder.src})
        .pipe(imagemin())
        .pipe(gulp.dest(folder.dist + '/images'));
});

gulp.task('svgstore', function () {
    return gulp
        .src(folder.src + '/icons/*.svg')
        .pipe(svgmin())
        .pipe(svgstore())
        .pipe(gulp.dest(folder.dist + '/images'));
});

gulp.task('styles', function () {
    return streamqueue({ objectMode: true },
        gulp.src([folder.src + 'css/*.css',
            folder.src + 'sass/light-bootstrap-dashboard.scss'
        ]).pipe(sass())
    )
        .pipe(autoprefixer('last 5 version'))
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(folder.dist + 'css'));
});

gulp.task('jscore', function(){
    return gulp.src([
        folder.src + 'js/core/jquery.3.2.1.min.js',
        folder.src + 'js/core/popper.min.js',
        folder.src + 'js/core/bootstrap.min.js'
    ])
        .pipe(gulp.dest(folder.dist + 'js'));
});

gulp.task('js', function () {
    return streamqueue({ objectMode: true },
        gulp.src([
            folder.src + 'js/plugins/bootstrap-datepicker.js',
            folder.src + 'js/plugins/bootstrap-notify.js',
            folder.src + 'js/plugins/bootstrap-switch.js',
            folder.src + 'js/plugins/chartist.min.js',
            folder.src + 'js/plugins/nouislider.min.js',
            folder.src + 'js/light-bootstrap-dashboard.js'
        ])
    )
        .pipe(concat('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(folder.dist + 'js'));
});

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
        browser: 'firefox',
        server: {
            baseDir: folder.dist
        }
    });
    done();
}

gulp.task('watch', function () {
    gulp.watch(folder.src + '*.html', gulp.series('html', reload));
    gulp.watch(folder.src + 'images/**/*', gulp.series('imageMin', reload));
    gulp.watch(folder.src + 'icons/**/*', gulp.series('svgstore', reload));
    gulp.watch(folder.src + 'fonts/**/*', gulp.series('fonts', reload));
    gulp.watch(folder.src + 'styles/**/*', gulp.series('styles', reload));
    gulp.watch(folder.src + 'scripts/**/*', gulp.series('js', reload));
    gulp.watch(folder.src + 'libs/**/*', gulp.series('js', 'styles', reload));
});

gulp.task('build', gulp.series('fonts', 'styles', 'jscore', 'js', 'imageMin', 'svgstore', 'html'));

gulp.task('default', gulp.parallel('build', 'watch', serve));