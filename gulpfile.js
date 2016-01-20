/**
 * Created by agrimasthana on 1/13/16.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var gulpif=require('gulp-if');
var browsersync = require('browser-sync').create();
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var Server = require('karma').Server;
var minimist = require('minimist');
var PATH = {
    src: '../app/*.ts'
};

//we specify the known command line arguments that we are aware of
var knownOptions = { string:'env', default:{ env: process.env.NODE_ENV || 'prod'}};

//Getting the options from the command line
var options = minimist(process.argv.slice(2),knownOptions);

//We load the configuration for the Typescript compiler
var tsProject = ts.createProject('tsconfig.json');

//the clean task is to clean out the folder that is served on the website.
gulp.task('clean',function(done){
   var del = require('del');
    del(['compiled'],done);
});

//the ts2js task transpiles code from typescript to browser friendly javascript
gulp.task('ts2js',function(){
   var tsResult = tsProject.src().pipe(ts(tsProject));
    return tsResult.js.pipe(sourcemaps.init()).pipe(flatten()).pipe(gulpif(options.env === 'prod',uglify())).pipe(sourcemaps.write('./')).pipe(gulp.dest('compiled'));
});

// retranspiles the typescript and then reloads the page.
gulp.task('reload',['ts2js'],function(){
   browsersync.reload();
});


//the serve task serves the app using browsersync and the watches for changes to reload the page.
gulp.task('serve',['ts2js'], function () {
    browsersync.init({server:{baseDir:"./"}});
    gulp.watch('./app/*.ts',['reload']);
    gulp.watch('./**/*.html',['reload']);
    gulp.watch('./**/*.sass',['reload']);

});

//the default task of gulp is to serve the page.
gulp.task('default',['serve']);