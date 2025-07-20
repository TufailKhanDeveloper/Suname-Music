import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'es2015',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'react-parallax-tilt'],
          'audio-vendor': ['howler', 'tone'],
          'three-vendor': ['three'],
          'seo-vendor': ['react-helmet-async'],
        },
      },
    },
  },
  define: {
    __SITE_URL__: JSON.stringify('https://sunamemusic.com'),
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
