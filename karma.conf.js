//module.exports = function(config) {
//    config.set({
//        browsers: ['PhantomJS'],
//        frameworks: ['jasmine'],
//        files: [
//            'node_modules/requirejs/require.js',
//            'tests/**/*.spec.js',
//            'node_modules/traceur/bin/traceur-runtime.js',
//            'node_modules/systemjs/dist/system.src.js',
//            'node_modules/traceur/bin/traceur.js',
//            { pattern: 'node_modules/angular2/**/*.js', included: false, watched: false },
//            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
//            { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }
//        ],
//        plugins:[
//            'karma-jasmine',
//            'karma-requirejs',
//            'karma-phantomjs-launcher'
//        ]
//    });
//};

var path = require('path');

module.exports = function(config){
  var testWebpackConfig = require('./tests/webpack.test.config');
    config.set({
        basePath:'',
        frameworks:['jasmine'],
        exclude:[],
        files: [{ pattern:'spec-bundle.js',watched:false}],
        //files:['tests/**/*.spec.ts'],
        preprocessors: {'spec-bundle.js':['webpack','sourcemap']},
        webpack:testWebpackConfig,
        webpackServer:{noInfo:true},
        reporters:['progress','coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers:['PhantomJS'],
        singleRun:true
        //,
        //plugins:[
        //    'karma-jasmine',
        //    'karma-webpack',
        //    'karma-coverage',
        //    'karma-phantomjs-launcher',
        //    'karma-sourcemap-loader'
        //]
    });
};