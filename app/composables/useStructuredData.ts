// composables/useStructuredData.ts
import { computed, toValue, type MaybeRefOrGetter } from "vue"

/**
 * JSON-LD for the site. One graph, emitted once from `app.vue`, describing the
 * person behind the portfolio, the site itself and its navigation — the shape
 * Google reads for knowledge-panel and sitelinks eligibility.
 *
 * Per-page schema (ProfilePage, ContactPage, the project list) is appended by
 * the pages that own it via `useJsonLd`.
 */

/** Appends one JSON-LD block to the document head. */
export function useJsonLd(node: MaybeRefOrGetter<Record<string, unknown>>) {
  useHead(() => ({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(toValue(node)),
      },
    ],
  }))
}

export function useSiteSchema() {
  const site = useSiteUrl()
  const { t, locale } = useI18n()
  const { projects } = useProjects()

  const personId = `${site}/#person`
  const siteId = `${site}/#website`

  return computed(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: t("home.hero.roles.name"),
        alternateName: ["Suhan Begenjov", "Suhan Begenjow", "Сухан Бегенджов"],
        url: site,
        image: `${site}/avatar.jpg`,
        jobTitle: t("seo.jobTitle"),
        description: t("seo.home.description"),
        email: "mailto:suxanoff07@gmail.com",
        telephone: "+99363846663",
        nationality: { "@type": "Country", name: "Turkmenistan" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ashgabat",
          addressCountry: "TM",
        },
        knowsLanguage: ["en", "ru", "tk", "tr"],
        knowsAbout: [
          "Vue.js",
          "Nuxt.js",
          "TypeScript",
          "Node.js",
          "Laravel",
          "PostgreSQL",
          "Android development",
          "UI/UX design",
        ],
        sameAs: [
          "https://github.com/The-Suhan",
          "https://t.me/B_Suhan",
          "https://www.instagram.com/suhan_09.06",
          "https://www.tiktok.com/@suhan_09.06",
        ],
        worksFor: {
          "@type": "Organization",
          name: "Freelance",
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: site,
        name: t("seo.siteName"),
        description: t("seo.home.description"),
        inLanguage: locale.value,
        publisher: { "@id": personId },
        author: { "@id": personId },
      },
      {
        "@type": "ItemList",
        "@id": `${site}/#projects`,
        name: t("projects.title"),
        itemListElement: projects.value.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: project.title,
            description: project.desc,
            applicationCategory: "WebApplication",
            operatingSystem: "Web",
            url: project.liveUrl ?? project.githubUrl,
            image: project.images?.[0] ? `${site}${project.images[0]}` : undefined,
            author: { "@id": personId },
            keywords: project.techs?.join(", "),
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          },
        })),
      },
    ],
  }))
}
