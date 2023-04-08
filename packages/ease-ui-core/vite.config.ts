import path, { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
    target: 'esnext',
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [
    dts({
      outputDir: 'dist',
      include: ['src/**/*.ts*'],
      exclude: [
        'src/**/*.docs.mdx',
        'src/**/*.snippets.tsx',
        'src/**/*.test.ts*',
        'src/**/*.stories.tsx',
        'src/stories/**',
        'src/**/*.stories.tsx',
        'src/**/*.test.tsx',
        '**/vite.config.ts',
        'node_modules',
        'build',
        'dist',
      ],
      compilerOptions: {
        baseUrl: './src/',
        emitDeclarationOnly: true,
        noEmit: false,
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [],
    },
  },
});
