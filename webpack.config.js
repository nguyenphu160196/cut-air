const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
module.exports = {
  entry: './app/main.js', 
  output: {
    path: __dirname,
    filename: './build/bundle.js',
    chunkFilename: "[id].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ], 
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        exclude: [
          path.resolve(__dirname, "node_modules")
        ],
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
          query: {
            presets: ['es2015', 'stage-0', 'react']
          }
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("./build/styles.css"),
  ]
};
