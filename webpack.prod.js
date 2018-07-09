const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var OfflinePlugin = require('offline-plugin');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['docs']),
    new OfflinePlugin()
  ],
});