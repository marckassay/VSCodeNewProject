const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};