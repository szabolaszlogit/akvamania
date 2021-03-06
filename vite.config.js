import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// @
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  /* Amplify vite config */
  resolve: {
    alias: [
      {
        find: "./runtimeConfig",
        replacement: "./runtimeConfig.browser",
      },
      { find: "@", replacement: path.resolve(__dirname, "./src") }, // @
    ],
  },
});
