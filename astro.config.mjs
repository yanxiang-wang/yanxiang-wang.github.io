import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes("/vps"),
		}),
		tailwind(),
		icon(),
	],
	markdown: {
		syntaxHighlight: "shiki",
		shikiConfig: {
			theme: "catppuccin-mocha",
			wrap: true,
		},
	},
	site: "https://yanxiang-wang.github.io",
});
