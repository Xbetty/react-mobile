const path = require('path');
const {
  override,
  addLessLoader,
  fixBabelImports,
  addWebpackAlias,
} = require('customize-cra');

module.exports = override(
  addLessLoader(),
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  //   引入别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  })
);
