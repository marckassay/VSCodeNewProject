const path = require('path');
const webpack = require('webpack');

module.exports = {
  //context: path.resolve(__dirname, "src"),
  entry: './src/index.ts',
  output: {
    //path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //publicPath: "http://localhost:8080/dist/"
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 
          'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
    ]
  },
  
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  }
};