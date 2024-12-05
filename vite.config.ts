import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      "@icon": path.resolve(__dirname, "./src/assets/icon"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  server: {
    host: true,
    port: 5173,
  },
});
