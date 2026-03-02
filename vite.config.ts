import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Chunk splitting untuk optimasi
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Pisahkan vendor dan assets
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('assets/images')) {
            return 'images'
          }
        }
      }
    },
    // Compress assets
    assetsInlineLimit: 4096, // 4KB - inline small images
  }
})