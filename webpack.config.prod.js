/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/scripts/app.js',
    output: {
        filename: '[contenthash].js',
        path: path.resolve(__dirname, 'bundles'),
        publicPath: 'dist/'
    }
};