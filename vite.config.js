import { resolve } from "node:path";
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "home.html",
          dest: "",
        },
        {
          src: "product.html",
          dest: "",
        },
      ],
    }),
  ],
});
