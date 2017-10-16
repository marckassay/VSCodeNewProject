const path = require('path');
const webpack = require('webpack');


module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.ts',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
        use: [{ 
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
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
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          }, {
            // if sourceMap, eg: 'blob:http://localhost:8080/c340184f-5285-4072-9b54-8be639160073'
            loader: "css-loader", options: { sourceMap: true}
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot)$/,
        exclude: /node_modules/,
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