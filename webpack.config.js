const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    watch: true,
    mode:"development",
    entry: {
        shell:"./src/app/shell.js",
        home: "./src/app/home/index.js",
        main: "./src/app/main/main.js",
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/wwwroot",
        
    },
    module: {
        rules: [
           {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    },
                },
           },
            {
                test: /\.(gif|png|jpe?g|svg|)$/i,
                loader: 'url-loader',
                /*use: [
                    'url-loader',
                    {
                        loader: 'image-webpack-loader',
                    },
                ],*/

            },
          /*  {
                test: /\.css$/,
                use: extractCSS.extract([ 'style-loader','css-loader' ])
              },
           
            {
                test:/\.scss$/,
                use: ['css-loader', 'resolve-url-loader', 'sass-loader']
                //use: extractSass.extract['resolve-url-loader', 'sass-loader']
             },*/
             {
                test   : /\.(scss|css)$/,
                resolve: {extensions: [".scss", ".css"],},
                use    : [
                  'style-loader',
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'resolve-url-loader?sourceMap',
                  'sass-loader?sourceMap',
                ]
              },
            {
                test:/\.(.ttf|.woff2|.woff|.eot)$/,
                loader:'url-loader?limit=100000'
            },
         
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: 'all',
                    reuseExistingChunk: true,
                    priority: 1,
                    enforce: true,
                    test(module, chunks) {
                        const name = module.nameForCondition && module.nameForCondition();
                        return chunks.some(chunk => {
                            return chunk.name === 'main' && /[\\/]node_modules[\\/]/.test(name);
                        });
                    }
                },
            }
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: `styles/[name].css`
          }),
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.scss$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: { removeAll: true } },
            canPrint: true
          }),
    ],
}