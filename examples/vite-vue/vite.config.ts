import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginStyleInject from 'vite-plugin-style-inject';

const pathResolve = (url: string) => path.resolve(__dirname, '.', url);

export default defineConfig({
  plugins: [vue(), VitePluginStyleInject()],
  build: {
    lib: {
      name: 'vite-vue',
      entry: pathResolve('src/main.ts'),
      formats: ['es', 'umd'],
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
