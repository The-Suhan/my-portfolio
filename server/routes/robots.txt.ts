/**
 * robots.txt, generated so the Sitemap line always points at the origin the
 * build was configured with (NUXT_PUBLIC_SITE_URL).
 */
export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig(event).public

  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    "# Nothing here is worth crawling",
    "Disallow: /_nuxt/",
    "Disallow: /api/",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
    "",
  ].join("\n")

  setHeader(event, "content-type", "text/plain; charset=utf-8")
  setHeader(event, "cache-control", "public, max-age=3600")
  return body
})
