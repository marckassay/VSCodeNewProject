const path = require('path');
const webpack = require('webpack');

module.exports = {
  //entry: './src/index.ts',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
        filename: '[name].js.map',
        exclude: ['vendor.js']
      })
  ],
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};