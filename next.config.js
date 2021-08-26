const path = require('path');

module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  webpack: function(config) {
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers');
    config.resolve.alias['@lib'] = path.join(__dirname, 'lib');
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  }
}
