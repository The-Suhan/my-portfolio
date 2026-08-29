## Setup

```bash
pnpm install
pnpm dev
pnpm build
```

## SEO

Every canonical URL, `og:url`, `hreflang` alternate and the `sitemap.xml` entries
are built from a single origin. Set it per environment — on Vercel add it under
*Project → Settings → Environment Variables*:

```bash
NUXT_PUBLIC_SITE_URL=https://your-domain.com
```

Without it the build falls back to a placeholder, and every absolute URL the
crawler sees will be wrong. Set it before the first deploy.

### What is wired up

| Piece | Where |
| --- | --- |
| Title, description, canonical, robots, Open Graph, Twitter card | `app/composables/useSeo.ts` |
| `hreflang` alternates + `x-default` | `app/composables/useSeo.ts` |
| JSON-LD `Person` / `WebSite` / project `ItemList` | `app/composables/useStructuredData.ts` |
| JSON-LD `ProfilePage`, `ContactPage`, breadcrumbs | the pages that own them |
| `robots.txt`, `sitemap.xml` | `server/routes/` |
| Social share image (1200×630) | `public/og-image.jpg` |
| PWA manifest + icons | `public/site.webmanifest`, `public/icons/` |

i18n runs with `strategy: "prefix_except_default"`, so each language is its own
indexable URL: `/` (en), `/ru`, `/tm`. Adding a page means adding it to the
`PAGES` list in `server/routes/sitemap.xml.ts` and calling `useSeo` in it.

### After deploying

1. Verify the domain in [Google Search Console](https://search.google.com/search-console)
   and submit `https://your-domain.com/sitemap.xml`.
2. Do the same in [Yandex Webmaster](https://webmaster.yandex.com/) — it is the
   engine that matters for the Russian-language pages.
3. Check the share card with the
   [Facebook debugger](https://developers.facebook.com/tools/debug/) and the
   structured data with the
   [Rich Results Test](https://search.google.com/test/rich-results).

## License

MIT
