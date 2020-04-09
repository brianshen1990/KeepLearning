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
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
        react_assist: {
          test: /[\\/]node_modules[\\/](react-toastify|react-paginate|react-dropzone)[\\/]/,
          name: 'react_assist',
          chunks: 'all',
        },
        css_bootstrap: {
          test: /[\\/]node_modules[\\/](bootstrap|reactstrap|@fortawesome\/fontawesome-free)[\\/]/,
          name: 'css_bootstrap',
          chunks: 'all',
        },
        tools: {
          test: /[\\/]node_modules[\\/](axios|moment)[\\/]/,
          name: 'tools',
          chunks: 'all',
        },
      }
    }
  }
});