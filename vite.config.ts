import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // This is important for client-side routing
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
      avif: { quality: 80 },
    }),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: mode === 'development', // Only enable source maps in development
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: [
            '@radix-ui/react-accordion',
            '@radix-ui/react-dialog',
            '@radix-ui/react-popover',
            'lucide-react',
            'framer-motion'
          ],
          carousel: ['embla-carousel-react'],
          utils: ['tailwind-merge', 'clsx', 'date-fns', 'sonner'],
          vendor: ['leaflet', 'react-leaflet', 'recharts']
        },
      },
    },
  },
}));
