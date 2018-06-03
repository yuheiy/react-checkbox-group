const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    example: path.join(__dirname, './example.js'),
  },
  output: {
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devtool: 'source-map',
}
