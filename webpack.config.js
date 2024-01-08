/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'bundles'),
        publicPath: 'dist/'
    },
    module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: 'defaults', useBuiltIns: 'usage', corejs: {version: 3} }]
                ]
              }
            }
          }
        ]
      }
};
