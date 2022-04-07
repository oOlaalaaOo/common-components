const path = require('path');

module.exports = {
  mode: "none",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'index.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader" }
    ]
  },
  devtool: 'source-map'
}
