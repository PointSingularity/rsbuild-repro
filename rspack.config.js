import { defineConfig } from '@rspack/cli';
import { rspack } from '@rspack/core';

export default defineConfig({
  mode: 'development',
  entry: 'src/index',
  resolve: {
    extensions: ['.ts'],
    alias: {
      './example': './example.alias',
    },
    tsConfig: 'tsconfig.json',
  },
  output: {
    filename: 'app.js',
    path: './dist',
  },
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new rspack.SwcJsMinimizerRspackPlugin({
        minimizerOptions: {
          minify: false,
          mangle: false,
          compress: false,
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
});
