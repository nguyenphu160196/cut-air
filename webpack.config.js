const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')
const path = require('path');
module.exports = {
  entry: './src/index.js', 
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,   
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i, 
        use: [
          'url-loader',
          'img-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,  
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
