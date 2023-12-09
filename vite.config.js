import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

const KobertUrl = "http://19ee-35-221-241-224.ngrok.io";
const RecommendUrl = "http://918c-34-173-23-197.ngrok.io";
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@emotion/styled"],
  },
  // server: {
  //   proxy: {
  //     "/model": {
  //       target: KobertUrl,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       secure: false,
  //       ws: true,
  //     },
  //     "/perfume-survey": {
  //       target: RecommendUrl,
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //       secure: false,
  //       ws: true,
  //     },
  //   },
  // },
});
