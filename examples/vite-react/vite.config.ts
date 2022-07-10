import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginStyleInject from 'vite-plugin-style-inject';

const pathResolve = (url: string) => path.resolve(__dirname, '.', url);

export default defineConfig({
  plugins: [react(), VitePluginStyleInject()],
  build: {
    lib: {
      entry: pathResolve('./src/index.ts'),
      name: 'vite-react',
      fileName: 'index',
      formats: ['umd', 'es'],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
