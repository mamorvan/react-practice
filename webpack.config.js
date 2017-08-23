
module.exports = {
    //tells webpack where to get js from
    entry: [
        './src/index.jsx'
    ],
    //where webpack should output bundled file
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }    
};