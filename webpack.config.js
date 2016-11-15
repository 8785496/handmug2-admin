module.exports = {
    entry: __dirname + "/src/js/index.js",
    devtool: 'sourcemaps',
    cache: true,
    debug: true,
    output: {
        path: __dirname + "/js",
        filename: "bundle.js",
        publicPath: "/js/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-decorators-legacy']
                }
            }
        ]
    },
    devServer: {
        port: 9000,
        contentBase: __dirname,
        proxy: {
            '/api**': {
                target: 'http://localhost:8080/',
                secure: false
            }
        }
    }
};