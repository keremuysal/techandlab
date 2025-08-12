import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  base: "/",
  resolve: {
    alias: {
      '@': path.dirname(fileURLToPath(import.meta.url)),
    }
  }
});
