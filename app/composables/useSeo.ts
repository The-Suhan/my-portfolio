// composables/useSeo.ts
import { computed, toValue, type MaybeRefOrGetter } from "vue"

/**
 * One place that knows how a page describes itself to crawlers and social
 * cards: title, description, canonical, Open Graph, Twitter and robots.
 *
 * i18n runs with `strategy: "prefix_except_default"`, so each language has its
 * own URL ("/", "/ru", "/tm"). Canonical points at the URL being viewed and
 * every page advertises the full set of `hreflang` alternates, including
 * `x-default` for the English original.
 */

export interface SeoOptions {
  /** Page title, without the site-name suffix. */
  title: string
  description: string
  /**
   * Unlocalized route path, e.g. "/contact". Defaults to the current route,
   * which is already prefixed with the active locale.
   */
  path?: string
  /** Absolute or root-relative image path. Defaults to the site OG image. */
  image?: string
  /** Open Graph type. "profile" for the homepage, "website" elsewhere. */
  type?: "website" | "profile" | "article"
  /** Keep the page out of the index (error pages, private routes). */
  noindex?: boolean
}

const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  ru: "ru_RU",
  tm: "tk_TM",
}

export function useSiteUrl() {
  return useRuntimeConfig().public.siteUrl as string
}

/**
 * Turns a root-relative path into an absolute URL on the canonical origin.
 *
 * `site` is passed in rather than read here: head entries are resolved lazily,
 * outside the Nuxt instance, so `useRuntimeConfig()` is not available by then.
 */
export function absoluteUrl(site: string, path: string) {
  if (/^https?:\/\//.test(path)) return path
  return `${site}${path.startsWith("/") ? path : `/${path}`}`
}

export function useSeo(options: MaybeRefOrGetter<SeoOptions>) {
  const route = useRoute()
  const site = useSiteUrl()
  const { t, locale, locales } = useI18n()
  const localePath = useLocalePath()
  const switchLocalePath = useSwitchLocalePath()

  const resolved = computed(() => toValue(options))
  const url = computed(() =>
    absoluteUrl(site, resolved.value.path ? localePath(resolved.value.path) : route.path),
  )

  /** hreflang set: one entry per locale plus x-default on the English URL. */
  const alternates = computed(() => {
    const links = (locales.value as { code: string; language?: string }[]).map((l) => ({
      rel: "alternate",
      hreflang: l.language ?? l.code,
      href: absoluteUrl(site, switchLocalePath(l.code) || "/"),
    }))
    return [
      ...links,
      {
        rel: "alternate",
        hreflang: "x-default",
        href: absoluteUrl(site, switchLocalePath("en") || "/"),
      },
    ]
  })
  const image = computed(() => absoluteUrl(site, resolved.value.image ?? "/og-image.jpg"))
  const htmlLang = computed(
    () =>
      (locales.value as { code: string; language?: string }[]).find(
        (l) => l.code === locale.value,
      )?.language ?? locale.value,
  )

  useHead(() => ({
    htmlAttrs: { lang: htmlLang.value },
    link: [{ rel: "canonical", href: url.value }, ...(resolved.value.noindex ? [] : alternates.value)],
  }))

  useSeoMeta({
    title: () => resolved.value.title,
    titleTemplate: (title) => (title ? `${title} — ${t("seo.siteName")}` : t("seo.siteName")),
    description: () => resolved.value.description,
    keywords: () => t("seo.keywords"),
    robots: () =>
      resolved.value.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",

    ogType: () => resolved.value.type ?? "website",
    ogSiteName: () => t("seo.siteName"),
    ogTitle: () => resolved.value.title,
    ogDescription: () => resolved.value.description,
    ogUrl: () => url.value,
    ogImage: () => image.value,
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageType: "image/jpeg",
    ogImageAlt: () => t("seo.imageAlt"),
    ogLocale: () => OG_LOCALE[locale.value] ?? "en_US",
    ogLocaleAlternate: () =>
      Object.entries(OG_LOCALE)
        .filter(([code]) => code !== locale.value)
        .map(([, og]) => og),

    twitterCard: "summary_large_image",
    twitterTitle: () => resolved.value.title,
    twitterDescription: () => resolved.value.description,
    twitterImage: () => image.value,
    twitterImageAlt: () => t("seo.imageAlt"),
  })
}
