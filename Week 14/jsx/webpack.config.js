module.exports = {
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-react-jsx']
          }
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map',
  watch: true
}