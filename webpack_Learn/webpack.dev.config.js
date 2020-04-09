const _ = require('lodash');
const commonConfig  =  require('./webpack.common.config');

const copyConfig = _.cloneDeep(commonConfig);

module.exports = Object.assign( {}, copyConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
});