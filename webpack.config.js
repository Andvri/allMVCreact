var pkg = require ('./package.json');

module.exports = {
    cache:true,
    resole:{ extension : ['','.jsx','.js'] },
    context: __dirname,
    entry:{ app: ['webpack/hot/dev-server', './app.jsx' ] },
    output:{
        path: './build',
        filename: pkg.name + '.[name].js',
        publicPath: '/build/'
    },
    devServer:{
        host: '0.0.0.0',
        port: 8080,
        inline:true
    },
    module:{
        loaders:[
            {
                test: /(\.js|.jsx)$/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react']}
            }
        ]
    }
};