module.exports = {
  entry: "./app/src/index.js",
  output: { filename: "bundle.js" },
  resolve: { alias: { 'vue$': 'vue/dist/vue.js' } },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader" },
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.s[a|c]ss$/, loader: "style!css!sass" }
    ]
  },
  devServer: {
    contentBase: './dist/js',
    port: 3000,
    proxy: {
      '**': {
        'target': {
          'protocol': 'http:',
          'host': 'localhost',
          'port': 9000
        }
      }
    }
  }
}
