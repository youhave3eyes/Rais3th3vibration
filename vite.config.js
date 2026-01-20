import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allow access from network (mobile testing)
    port: 4747,
    open: false, // Don't auto-open browser
    strictPort: false
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          animations: ['framer-motion']
        }
      }
    }
  }
})
