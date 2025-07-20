import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages'
import sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    pages(), 
    sitemap({
      hostname: 'https://sunamemusic.com',
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion', 'react-parallax-tilt'],
          'audio-vendor': ['howler', 'tone'],
          'three-vendor': ['three'],
        },
      },
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
})
