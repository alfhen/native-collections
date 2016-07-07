var path = require('path');
module.exports = {
    entry: './src/native-collections.js',
    output: {
        path: __dirname + '/dist',
        filename: 'native-collections.common.js'
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