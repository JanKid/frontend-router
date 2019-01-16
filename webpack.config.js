var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  //entry: './index.js',
  entry:{
    index:'./index.js',
    //test:'./test.js'
  },
  output: {
    filename:'[name].js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({template: './index.html',title:'babel study',filename:'index.html',inject:true})
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3002,
    historyApiFallback:{
      rewrites:[
         {from:/./,to:'/index.html'}
      ]
    }
  }
}