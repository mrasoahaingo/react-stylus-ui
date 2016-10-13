var nib = require('nib');
var jeet = require('jeet');

module.exports = function sassPlugin (context, operations) {

  operations.commands.modify('build')
    .before((context, args) => {

      var ExtractTextPlugin = operations.dependencies.resolve('extract-text-webpack-plugin');

      context.webpackConfig.module.loaders.push({
        test: /\.styl/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!stylus' })
      });

      context.webpackConfig.stylus = {
        use: [jeet(), nib()]
      };
    });

  operations.commands.modify('start')
    .before((context, args) => {

      context.webpackConfig.module.loaders.push({
        test: /\.styl/,
        loaders: ['style', 'css?sourceMap', 'stylus']
      });

      context.webpackConfig.stylus = {
        use: [jeet(), nib()]
      };
    });
};