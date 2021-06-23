const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'https://1gc5j0px.api.sanity.io',
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
    secure: false,
  },
];

module.exports = PROXY_CONFIG;