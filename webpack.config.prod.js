/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: '[contenthash].js',
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