import { defineConfig } from '@rsbuild/core';

export default defineConfig({
  mode: 'development',
  source: {
    entry: {
      index: 'src/index',
    },
    tsconfigPath: 'tsconfig.json',
  },
  resolve: {
    extensions: ['.ts'],
    alias: {
      './example': './example.alias',
    },
  },
  output: {
    cleanDistPath: false,
    distPath: {
      root: `dist/`,
      js: ``,
    },
    filename: {
      js: 'app.js',
    },
    sourceMap: false,
    minify: {
      js: true,
      jsOptions: {
        extractComments: false,
        minimizerOptions: { minify: false, mangle: false, compress: false },
      },
      css: true,
    },
  },
});
