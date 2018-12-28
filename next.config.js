const withLess = require('@zeit/next-less');
module.exports = withLess({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        modules: true,
        localIdentName: '[folder]-[local]-[hash:base64:5]',
    },
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/work': { page: '/work' },
            '/about': { page: '/about' },
        };
    },
});
