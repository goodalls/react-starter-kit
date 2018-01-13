const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "main.bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  }
   module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react'],
        },
      },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader'
      },
    ]
  }

};
