module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename:'bundle.js'
    },
    devServer: {
        contentBase: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
