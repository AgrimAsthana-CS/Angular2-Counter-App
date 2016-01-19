/**
 * Created by agrimasthana on 1/18/16.
 */
var path= require('path');
var ProvidePlugin = require('webpack/lib/ProvidePlugin');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var ENV = process.env.ENV = process.env.NODE_ENV = 'test';




module.exports={
    resolve: {
        cache:false,
        extensions:['','.ts','.js','.json','.css','.html']
    },
    devtool:'inline-source-map',
    module:{
        loaders:[
            {
                test:/\.ts$/,
                loader: 'ts-loader',
                query: {
                    'compilerOptions':{
                        'removeComments': true,
                        'noEmitHelpers':true
                    },
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375  // 2375 -> Duplicate string index signature
                    ],
                    'configFileName':'webpacktsconfig.json'
                },
                exclude: [ /\.e2e\.ts$/, /node_modules/ ]
            },

            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.css$/,  loader: 'raw-loader' }
        ],
        postLoaders: [
            {
                test: /\.(js|ts)$/,
                loader: 'istanbul-instrumenter-loader',
                exclude: [
                    /\.e2e\.ts$/,
                    /node_modules/
                ]
            }
        ],
        noParse:[/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/]
            },
    stats:{colors:true, reasons:true},
    debug: false,
    plugins:[
        new DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV),
                'NODE_ENV': JSON.stringify(ENV)
            },
            'global': 'window',
            '__metadata': 'Reflect.metadata',
            '__decorate': 'Reflect.decorate'
        }),
        new ProvidePlugin({
            '__awaiter': 'ts-helper/awaiter',
            '__extends': 'ts-helper/extends',
            '__param': 'ts-helper/param',
            'Reflect': 'es7-reflect-metadata/dist/browser'
        })
    ],
    node: {
        global: 'window',
        progress: false,
        crypto: 'empty',
        module: false,
        clearImmediate: false,
        setImmediate: false
    }
};
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return root.apply(path, ['node_modules'].concat(args));
}
