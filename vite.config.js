import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ডেভেলপমেন্টে /api/... অনুরোধ Laravel (পোর্ট 8000)-এ পাঠায়, তাই CORS এরর আসে না
  server: { proxy: { '/api': 'http://localhost:8000' } },
});
