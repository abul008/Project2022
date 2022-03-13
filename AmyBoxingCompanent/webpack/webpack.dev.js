const webpack = require('webpack')

module.exports = {
    mode:'development',
    devtool:"cheap-module-source-map",
    devServer: {
        hot: true,
        open: true,
        static: './src',
        port:3000,
        historyApiFallback: true,
      },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name' : JSON.stringify('Vishwas')
        })
    ]
}