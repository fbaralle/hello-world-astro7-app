import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // Load-bearing custom alias: src/pages/index.astro imports through '@lib'.
        // The Webflow Cloud builder used to OVERWRITE vite.resolve.alias with its
        // own react-dom/server alias (or `undefined` when none is injected, as in
        // this no-React app), which wiped this entry and made the deploy build
        // fail to resolve '@lib/greeting'. CLOUD-953 merges instead of clobbering,
        // so this alias must survive the build and the page must render the probe.
        '@lib': fileURLToPath(new URL('./src/lib/', import.meta.url)),
      },
    },
  },
});
