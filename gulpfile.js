/**
 * Created by agrimasthana on 1/13/16.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var flatten = require('gulp-flatten');

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
    return tsResult.js.pipe(flatten()).pipe(gulp.dest('compiled'));
});

//gulp.task('ts2js',function(done){
//   var typescript = require('gulp-typescript');
//   var tscConfig = require('./tsconfig.json');
//    gulp.src(PATH.src).pipe(typescript(tscConfig.compilerOptions));
//        //.pipe(gulp.dest('built/local'));
//});

gulp.task('serve', ['ts2js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(PATH.src, ['ts2js']);

    app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default',['serve']);