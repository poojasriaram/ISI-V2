import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import compression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

function jiraApiPlugin(): Plugin {
  return {
    name: 'jira-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/jira', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          res.statusCode = 200;
          res.end();
          return;
        }

        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let bodyData = '';
        req.on('data', chunk => { bodyData += chunk; });
        req.on('end', async () => {
          try {
            const body = bodyData ? JSON.parse(bodyData) : {};
            const mockRes = {
              statusCode: 200,
              setHeader(k: string, v: string) {
                res.setHeader(k, v);
                return this;
              },
              status(code: number) {
                res.statusCode = code;
                return this;
              },
              json(data: any) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return this;
              },
              end() {
                res.end();
                return this;
              }
            };
            const handlerModule = await import('./api/jira.js');
            await handlerModule.default({ ...req, body }, mockRes);
          } catch (err: any) {
            console.error('[Vite Dev Jira Middleware Error]', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      });
    }
  };
}

function analyticsApiPlugin(): Plugin {
  return {
    name: 'analytics-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/analytics', async (req, res) => {
        if (req.method === 'OPTIONS') {
          res.setHeader('Access-Control-Allow-Origin', '*');
          res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
          res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
          res.statusCode = 200;
          res.end();
          return;
        }

        let bodyData = '';
        req.on('data', chunk => { bodyData += chunk; });
        req.on('end', async () => {
          try {
            let body: any = {};
            if (bodyData) {
              try { body = JSON.parse(bodyData); } catch { body = bodyData; }
            }
            const mockRes = {
              statusCode: 200,
              setHeader(k: string, v: string) {
                res.setHeader(k, v);
                return this;
              },
              status(code: number) {
                res.statusCode = code;
                return this;
              },
              json(data: any) {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data));
                return this;
              },
              send(data: any) {
                res.end(data);
                return this;
              },
              end(data?: any) {
                res.end(data);
                return this;
              }
            };
            const handlerModule = await import('./api/analytics.js');
            const fullUrl = '/api/analytics' + (req.url || '');
            req.url = fullUrl;
            (req as any).body = body;
            await handlerModule.default(req, mockRes);
          } catch (err: any) {
            console.error('[Vite Dev Analytics Middleware Error]', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, error: err.message }));
          }
        });
      });
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/', // This is important for client-side routing
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    jiraApiPlugin(),
    analyticsApiPlugin(),
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
