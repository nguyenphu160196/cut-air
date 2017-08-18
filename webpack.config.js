module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
        },
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      }
    ]
  }
};
