const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'space_invaders.js'
  },
  resolve: {
    extensions: ['*', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'source-maps'
};
