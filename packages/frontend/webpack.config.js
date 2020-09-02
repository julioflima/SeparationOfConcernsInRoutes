const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const smp = new SpeedMeasurePlugin();
const webpack = require('webpack');

module.exports = (env) => {
  const mode = env.production ? 'production' : 'development';
  const devtool = env.production ? false : 'source-map';
  const hash = env.production ? '.[contenthash:8]' : '';
  const outputDir = env.production ? '../firebase/functions/views' : 'dev';
  const developmentMode = !env.production;
  const clean = env.clean ? new CleanWebpackPlugin() : () => {};
  let stats = env.production ? 'verbose' : 'errors-only';
  stats = env.hide ? 'none' : stats;

  return smp.wrap({
    stats,
    mode,
    devtool,
    target: 'web',
    entry: './src/js/init',
    output: {
      filename: `js/[name]${hash}.js`,
      path: path.resolve(__dirname, outputDir),
    },
    watchOptions: {
      ignored: /node_modules/,
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 0,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `vendor/${packageName.replace('@', '')}`;
            },
          },
        },
      },
      minimize: !developmentMode,
      minimizer: [
        new TerserJSPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
          extractComments: false,
        }),
        new OptimizeCSSAssetsPlugin({}),
      ],
    },
    devServer: {
      hot: developmentMode,
      allowedHosts: ['localhost:8080', 'localhost:5000'],
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      },
    },
    plugins: [
      clean,
      new webpack.HashedModuleIdsPlugin(),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
      }),
      new HtmlWebpackPlugin({
        filename: `./components/statistics${hash}.html`,
        template: './src/components/statistics.hbs',
      }),
      new HtmlWebpackPlugin({
        filename: `./components/tableRanking${hash}.html`,
        template: './src/components/tableRanking.hbs',
      }),
      new HtmlWebpackPlugin({
        filename: `./components/timeline${hash}.html`,
        template: './src/components/timeline.hbs',
      }),
      new MiniCssExtractPlugin({
        filename: `css/[name]${hash}.css`,
        ignoreOrder: true,
      }),
      new webpack.ProvidePlugin({
        // jQuery: 'jquery',
        // $: 'jquery',
        // 'window.jQuery': 'jquery',
        // 'window.$': 'jquery',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.hbs$/i,
          use: [
            {
              loader: 'html-loader',
              options: {
                minimize: true,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: developmentMode,
                reloadAll: true,
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['thread-loader', 'cache-loader'],
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.(jpg?g|png|gif|svg)$/i,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/',
          },
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',
              },
            },
          ],
        },
      ],
    },
  });
};
