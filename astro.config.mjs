import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astro-blog-tutorial-mxcixs.netlify.app/",
  integrations: [preact()],
});