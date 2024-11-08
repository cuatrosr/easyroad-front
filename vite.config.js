import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: 'dist',
  },
  publicDir: 'public',
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      exclude: '',
    }),
  ],
  preview: {
    port: 5173,
    strictPort: true,
   },
  server: {
    host: true,
    strictPort: true,
    port: 5173,
    origin: "http://0.0.0.0:5173",
  },
});
