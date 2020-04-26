const _ = require('lodash');
const commonConfig  =  require('./webpack.common.config');

const copyConfig = _.cloneDeep(commonConfig);

module.exports = Object.assign( {}, copyConfig, {
  mode: 'production',
  /** optimization for chunks */
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react_dropzone: {
          test: /[\\/]node_modules[\\/](react-dropzone)[\\/]/,
          name: 'react_dropzone',
          chunks: 'all',
        },
        react_lib: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react_lib',
          chunks: 'all',
        },
        css_bootstrap: {
          test: /[\\/]node_modules[\\/](bootstrap|reactstrap|@fortawesome\/fontawesome-free)[\\/]/,
          name: 'css_bootstrap',
          chunks: 'all',
        }
      }
    }
  }
});