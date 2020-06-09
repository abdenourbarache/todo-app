const path = require('path');

module.exports = (env) => {
    const isProduction = env === "production";

    return {
        entry : './src/app.js',
        output : {
            path : path.join(__dirname ,'public','dist'),
            filename : 'bundel.js'
        },
        module: {
            rules :[{
                loader : 'babel-loader',
                test : /\.js$/,
                exclude : /node_modules/
            }]
        },
        devtool : isProduction ? 'source-map' :'inline-source-map',
        devServer : {
            contentBase : path.join(__dirname,'public'),
            publicPath : '/dist/',
            historyApiFallback : true
        } 
    }

}