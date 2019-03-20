module.exports = {
  // change to .tsx if necessary
  // entry: './src/app.jsx',
<<<<<<< HEAD
  entry: './src/App.tsx',
=======
  entry: './src/app.tsx',
>>>>>>> 4dde761bb957c643aa5454c9e1227fd988e29396
  output: {
    filename: './dist/bundle.js'
  },
  resolve: {
    // changed from extensions: [".js", ".jsx"]
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  module: {
    rules: [
      // changed from { test: /\.jsx?$/, use: { loader: 'babel-loader' } },
<<<<<<< HEAD
      { test: /\.tsx?$/, use: { loader: 'awesome-typescript-loader' } },
=======
      { test: /\.(t|j)sx?$/, use: { loader: 'awesome-typescript-loader' } },
>>>>>>> 4dde761bb957c643aa5454c9e1227fd988e29396
      // addition - add source-map support
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  // addition - add source-map support
  devtool: "source-map"
}
