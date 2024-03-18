const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://ccskaist.site/api/v1',
            changeOrigin: true,
        })
    );
};
