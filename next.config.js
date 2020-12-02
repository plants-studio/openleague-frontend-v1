const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['open-league-back.herokuapp.com'],
  },
  reactStrictMode: true,
};
