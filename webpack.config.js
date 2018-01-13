const path = require("path");

module.exports = {
  entry: {
    app: "./lib/index.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node-modules/
      },
      {
        test: /\.(png|woff|eot|ttf|svg|gif)$/,
        use: "url-loader",
        exclude: /node-modules/
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};

// const path = require("path");

// module.exports = {
//   entry: {
//     app: './lib/index.js',
//   },
//   output: {
//     path: path.join(__dirname, 'build'),
//     filename: '[name].bundle.js'
//   },
//    module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//         exclude: /node-modules/,
//       },
//       {
//         test: /\.(png|woff|eot|ttf|svg|gif)$/,
//         use: 'url-loader',
//         exclude: /node-modules/,
//       },
//       {
//         test: /\.(css|scss)$/,
//         use: [
//           {
//             loader: 'style-loader'
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               sourceMap: true
//             }
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: true
//             }
//           }
//         ]
//      }
//     ]
//   },
// };
