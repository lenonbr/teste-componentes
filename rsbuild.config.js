import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    target: 'node',
    format: 'esm',
    distPath: {
      root: 'dist',
    },
  },
  source: {
    entry: {
      index: './src/index.ts',
    },
  },
  tools: {
    postcss: {
      postcssOptions: {
        plugins: ['@tailwindcss/postcss', 'autoprefixer'],
      },
    },
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'onda-types': 'onda-types',
    'onda-utils': 'onda-utils',
  },
});