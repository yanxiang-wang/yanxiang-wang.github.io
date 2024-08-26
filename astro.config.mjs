import { defineConfig, passthroughImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [mdx(), tailwind(), sitemap(), icon()],
	image: {
		service: passthroughImageService(),
	},
	site: "https://yanxiang-wang.github.io",
});
