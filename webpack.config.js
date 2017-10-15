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
        use: [{ 
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            useRelativePath: true
          } 
        }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            // if sourceMap, eg: 'blob:http://localhost:8080/c340184f-5285-4072-9b54-8be639160073'
            loader: "css-loader", options: { sourceMap: true }
        }, {
            // if sourceMap, eg: 'E:/marckassay/VSCodeNewProject/src/assets/css/src/assets/css/styles.scss'
            loader: "sass-loader", options: { sourceMap: true }
        }]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            // if sourceMap, eg: 'blob:http://localhost:8080/c340184f-5285-4072-9b54-8be639160073'
            loader: "css-loader", options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader'
            }
          }
        ]
      }
    ]
  },
  
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  }
};