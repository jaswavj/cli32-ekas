import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Local Vite stays under /billing/. Tomcat serves this client as /ekas/.
  base: process.env.NODE_ENV === 'production' ? '/ekas/' : '/billing/',
  envPrefix: 'VITE_',
  server: {
    port: 5174,
    host: true,
    open: '/billing/',
  },
  preview: {
    port: 5174,
    host: true,
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    emptyOutDir: true,
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
      '@reduxjs/toolkit',
      'axios',
      'bootstrap',
    ],
  },
});
