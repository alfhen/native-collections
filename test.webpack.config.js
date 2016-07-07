var path = require('path');
module.exports = {
    entry: './test/main.js',
    output: {
        path: __dirname + '/test',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?presets[]=es2015'
            }
        ]
    }
};