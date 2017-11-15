'use strict';

const path = require( 'path' );

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.svg$/,
                use: [ 'raw-loader' ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devtool: 'source-map'
};