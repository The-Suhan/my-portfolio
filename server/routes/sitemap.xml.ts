/**
 * sitemap.xml. The site is small and its routes are static, so they are listed
 * by hand rather than crawled — add new pages here when they ship.
 *
 * i18n runs with `strategy: "prefix_except_default"`, so every page exists once
 * per locale ("/contact", "/ru/contact", "/tm/contact"). Each entry carries the
 * full `xhtml:link` alternate set, which is how Google is told the three URLs
 * are translations of one another rather than duplicates.
 */
const PAGES: { path: string; priority: number; changefreq: string }[] = [
  { path: "/", priority: 1.0, changefreq: "monthly" },
  { path: "/contact", priority: 0.8, changefreq: "yearly" },
]

/** Locale code → the hreflang value it is published under. */
const LOCALES: Record<string, string> = {
  en: "en-US",
  ru: "ru-RU",
  tm: "tk-TM",
}

const DEFAULT_LOCALE = "en"

/** "/contact" + "ru" → "/ru/contact"; the default locale stays unprefixed. */
function localized(path: string, code: string) {
  if (code === DEFAULT_LOCALE) return path
  return path === "/" ? `/${code}` : `/${code}${path}`
}

export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public
  const lastmod = new Date().toISOString().split("T")[0]

  const entries = PAGES.flatMap(({ path, priority, changefreq }) => {
    const alternates = [
      ...Object.entries(LOCALES).map(
        ([code, hreflang]) =>
          `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${siteUrl}${localized(path, code)}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${siteUrl}${localized(path, DEFAULT_LOCALE)}"/>`,
    ].join("\n")

    return Object.keys(LOCALES).map(
      (code) => `  <url>
    <loc>${siteUrl}${localized(path, code)}</loc>
${alternates}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`,
    )
  }).join("\n")

  setHeader(event, "content-type", "application/xml; charset=utf-8")
  setHeader(event, "cache-control", "public, max-age=3600")
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`
})
