import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// In Docker the backend container is reachable by service name "backend".
// Outside Docker (bare npm run dev) use localhost.
const backendUrl = process.env.BACKEND_URL || "http://backend:8000";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      // All /api/* requests forwarded to FastAPI — mirrors CloudFront behaviour in prod
      "/api": {
        target: backendUrl,
        changeOrigin: true,
      },
    },
  },
});
