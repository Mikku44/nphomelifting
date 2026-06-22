import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import netlifyPlugin from "@netlify/vite-plugin"; // Fixed: Removed the curly braces

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter(), 
    netlifyPlugin()
  ],
  resolve: {
    tsconfigPaths: true,
  },
});