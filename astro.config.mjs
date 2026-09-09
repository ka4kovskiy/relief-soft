import { defineConfig } from 'astro/config';

// GitHub Pages: если репо project-site (username.github.io/repo), раскомментируйте base.
export default defineConfig({
  site: 'https://ka4kovskiy.github.io',
  // base: '/relief-soft',
  trailingSlash: 'ignore',
});
