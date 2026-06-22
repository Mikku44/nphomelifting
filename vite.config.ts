import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { netlifyPlugin } from "@netlify/vite-plugin"; // 1. Import the plugin

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter(), 
    netlifyPlugin() // 2. Add it here
  ],
  resolve: {
    tsconfigPaths: true,
  },
});