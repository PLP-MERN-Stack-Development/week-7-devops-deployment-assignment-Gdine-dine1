import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // 👈 Proxy /api calls to Express for development
    },
  },
  define: {
    // Make environment variables available to the client
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'https://week-7-devops-deployment-assignment-5d8u.onrender.com'),
  },
});
