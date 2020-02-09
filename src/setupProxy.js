const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'https://www.flickr.com/services/feeds/photos_public.gne',
            secure: false,
            changeOrigin: true
        })
    )
}



