// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://nutricionistaenleganes.com',
  build: {
    inlineStylesheets: 'always'
  },
  integrations: [
    compress({
      CSS: true,
      HTML: {
        removeAttributeQuotes: false,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true
      },
      Image: false,
      JavaScript: true,
      SVG: false
    })
  ]
});
