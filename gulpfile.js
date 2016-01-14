/**
 * Created by agrimasthana on 1/13/16.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var browsersync = require('browser-sync').create();
//var reload = browsersync.reload;
var PATH = {
    src: './**/*.ts'
};

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean',function(done){
   var del = require('del');
    del(['compiled'],done);
});

gulp.task('ts2js',function(){
   var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(flatten()).pipe(uglify()).pipe(gulp.dest('compiled'));
});

gulp.task('reload',function(){
   browsersync.reload();
});

gulp.task('serve',['ts2js'], function () {
    //var http = require('http');
    //var connect = require('connect');
    //var serveStatic = require('serve-static');
    //var open = require('open');

    //var port = 9000, app;
    browsersync.init({server:{baseDir:"./"}});
    //livereload.listen();
    gulp.watch(PATH.src, ['ts2js']);
    gulp.watch('./**/*.html',['reload']);
    gulp.watch('./**/*.sass',['reload']);

    //app = connect().use(serveStatic(__dirname));
    //http.createServer(app).listen(port, function () {
    //    open('http://localhost:' + port);
    //});
});

gulp.task('default',['serve']);