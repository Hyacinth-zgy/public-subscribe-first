const path = require('path');
const configs = require('./APP.consfig');
const webpack = require('webpack');
const config = {
  resolve: {
    // 在导入语句没带文件后缀时，Webpack 会自动带上后缀后去尝试访问文件是否存在。  resolve.extensions 用于配置在尝试过程中用到的后缀列表，默认是：
    extensions: ['.js', '.ts', '.json'],
  },
  // mode: 'production', 这里不指定mode，通过脚本命令传递参数进来
  entry: './lib/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              configFile: path.resolve(__dirname, './tslint.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              // 指定特定的TS编译配置，为了区分脚本的TS配置
              configFile: path.resolve(__dirname, './tsconfig.json'),
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'thread-loader',
            options: {
              workers: 2, // 开启进程为两个
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',

                    corejs: {
                      version: 3,
                    },
                    targets: {
                      chrome: '60',
                      firefox: '60',
                      ie: '9',
                      safari: '10',
                      edge: '17',
                    },
                  },
                ],
              ],
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};

module.exports = (env, argv) => {
  console.log(env);
  if (env.test) {
    console.log('test');
    const item = new webpack.DefinePlugin({
      'process.env': configs.test,
    });
    config.plugins.push(item);
  }
  if (env.development) {
    console.log('development');
    const item = new webpack.DefinePlugin({
      'process.env': configs.dev,
    });
    config.plugins.push(item);
  }
  if (env.production) {
    const item = new webpack.DefinePlugin({
      'process.env': configs.prod,
    });
    config.plugins.push(item);
  }
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
  }
  return config;
};
