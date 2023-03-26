//引入插件
// var path = require('path');
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
const template = require('gulp-template');
var useref = require('gulp-useref');
var config = require("./gulp.conf.js");
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var del = require('del');
var moment = require('moment');
var fs = require('fs');

var baseDir = '../../product'; //../build
var staticDir = '/static';
var version = '2.1.0'; // 当前版本

// 使用connect启动一个Web服务器
gulp.task('connect', function () {
    connect.server({
        port: 443,
        root: baseDir,
        livereload: true,
        key: fs.readFileSync('./privatekey.pem'),
        cert: fs.readFileSync('./certificate.pem'),
        https: true
    });
    connect.server({
        port: 80,
        root: baseDir,
        livereload: true
    });
});

gulp.task('html', function () {
    var assets = useref.assets();
    return gulp
        .src(['./rev/**/*.json', './page/*.*'])
        // cdn变量替换
        .pipe(template({ staticServer: config.staticServer, version: version }))
        .pipe(assets)
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(revCollector())
        .pipe(gulp.dest(baseDir + '/page'))
        // .pipe(connect.reload());
});

// css文件合并压缩
gulp.task('css', function () {
    gulp.src('static/css/*.css')
        .pipe(concat('style.css'))
         // cdn变量替换
        .pipe(template({ staticServer: config.staticServer }))
        .pipe(gulp.dest(baseDir + staticDir + '/css/' + version))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(rev())
        .pipe(gulp.dest(baseDir + staticDir + '/css/' + version))
        .pipe(rev.manifest()) //生成版本信息
        .pipe(gulp.dest('./rev/css'));
});

// js文件合并压缩
gulp.task('js', function () {
    gulp.src(config.js)
        // .pipe(sourcemaps.init())
        .pipe(concat('main.js'))
        .pipe(gulp.dest(baseDir + staticDir + '/js/page/' + version))
        .pipe(rename({ suffix: '.min' }))
        .pipe(rev())
        .pipe(uglify())
        // .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest(baseDir + staticDir + '/js/page/' + version))
        .pipe(rev.manifest()) //生成版本信息
        .pipe(gulp.dest('./rev/js'));
});

gulp.task('res', function() {
    gulp.src(['static/res/**/*'])
    // .pipe(uglify())
    .pipe(gulp.dest(baseDir + staticDir + '/res'))
})

gulp.task('minifyjs', function() {
    return gulp.src('test/main.js')
        .pipe(concat('main.js'))    //合并所有js到main.js
        .pipe(gulp.dest('test'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('test'))
        .pipe(rev.manifest()) //生成版本信息
        .pipe(gulp.dest('./rev/js'));;  //输出
});

gulp.task('minifycss', function() {
    return gulp.src('test/style.css')
        .pipe(concat('style.css'))    //合并所有js到main.js
        .pipe(gulp.dest('test'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(minifyCSS())    //压缩
        .pipe(gulp.dest('test'));  //输出
});

gulp.task('watch', function () {

    gulp.watch(['./css/*.css'], ['css']);
    gulp.watch(config.js, ['js']);
    gulp.watch(['./i18n/**/*.html'], ['html']);
    gulp.watch(['./rev/**/*.json'], ['html']); ///*, './i18n/**/*.html'/

});

gulp.task('clean', function () {
    // del(['../../product/v1.7/i18n/css', '../../product/v1.7/i18n/js']);
});

gulp.task('init', ['css','js', 'html']);
gulp.task('default', ['connect', 'watch']);