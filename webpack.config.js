var webpack = require('webpack');
module.exports = {
    devtool: 'eval',
    entry: ['babel-polyfill','./src/index.js'],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
            {
                test: /\.less/,
                loader: 'style!css!less'
            }
            , { test: /.css$/, loader: "style-loader!css-loader" }
            ]
    },

    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"development"'
            }
        })
    ]
};
