var path = require('path')
var webpack = require('webpack')
var webpackLinkPlugin = require('webpack-link')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, ''),
    filename: 'dev.js'
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  resolveLoader: {
    modules: [__dirname, 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpackLinkPlugin({
      loadlModule: path.resolve(__dirname, '../@edge_blade/vue-materialize')
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      'Vel': "materialize-css/js/velocity.min.js"
    }),
  ],

  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 8082
  },
  devtool: 'eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.output = {
    path: path.resolve(__dirname, './dist'),
    filename: 'build.js'
  }
  module.exports.devtool = 'source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
}
