/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'bundles'),
        publicPath: 'dist/'
    }
};
