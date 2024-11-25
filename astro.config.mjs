import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";
import vercelServerless from '@astrojs/vercel/serverless';
// https://astro.build/config
export default defineConfig({
  site: 'https://haopeng138.github.io', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
  base: '/astro-gym',
  sitemap: true, // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx(), lit(), icon()], // Add renderers to the config
  output: 'server',
  adapter: vercelServerless(),
});