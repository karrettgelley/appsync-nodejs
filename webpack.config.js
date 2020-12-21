const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  target: 'node',
  mode: 'production',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    library: 'appsync-nodejs',
  },
};
