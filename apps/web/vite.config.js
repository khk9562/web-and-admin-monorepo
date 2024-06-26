import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "@monorepo-test-turbo/shared/styles/main.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@monorepo-test-turbo/shared": path.resolve(
        __dirname,
        "../../packages/shared"
      ),
    },
  },
});
