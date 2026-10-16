// Resolved only through the custom `@lib` vite alias declared in astro.config.mjs.
// If the Webflow Cloud builder clobbers that alias, `import '@lib/greeting'` in
// src/pages/index.astro becomes unresolvable and the deploy build fails.
export const greeting = 'alias-survived';
