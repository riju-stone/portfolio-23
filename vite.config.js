import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  plugins: [react()]
});

export default viteConfig;
