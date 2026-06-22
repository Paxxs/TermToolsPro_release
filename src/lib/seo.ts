import {
  defaultLanguage,
  getLocalizedRoute,
  localizedRoutes,
} from "./i18n-routing"
import type { Language, LocalizedRoute } from "./i18n-routing"

export const SITE_URL = "https://termtools.apppro.dev"
export const siteName = "TermTools Pro"
export const OG_IMAGE_PATH = "/og-image.png"
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`

const seoLanguages = ["en", "zh"] as const satisfies ReadonlyArray<Language>

const hrefLangByLanguage = {
  en: "en",
  zh: "zh-CN",
} as const satisfies Record<Language, string>

const openGraphLocaleByLanguage = {
  en: "en_US",
  zh: "zh_CN",
} as const satisfies Record<Language, string>

const schemaLanguageByLanguage = {
  en: "en",
  zh: "zh-CN",
} as const satisfies Record<Language, string>

export type SeoRouteContent = {
  title: string
  description: string
  keywords?: Array<string>
}

export type MetaDescriptor = {
  title?: string
  name?: string
  property?: string
  content?: string
}

export type LinkDescriptor = {
  rel: "canonical" | "alternate"
  href: string
  hrefLang?: string
}

export type ScriptDescriptor = {
  type: "application/ld+json"
  children: string
}

export type SeoHead = {
  meta: Array<MetaDescriptor>
  links: Array<LinkDescriptor>
  scripts: Array<ScriptDescriptor>
}

export type SitemapEntry = {
  loc: string
  changefreq: "weekly" | "monthly"
  priority: string
}

export const seoRoutes = {
  "/": {
    en: {
      title: "TermTools Pro - Integrated Terminal Recording and Replay Suite",
      description:
        "TermTools Pro unifies terminal recording, precise replay, privacy masking, SSH session capture, and JSON review in one production-ready developer tool.",
      keywords: [
        "terminal recorder",
        "terminal replay",
        "terminal privacy masking",
        "SSH session recording",
        "developer documentation",
        "CLI demos",
      ],
    },
    zh: {
      title: "TermTools Pro - 一体化终端录制、回放与隐私保护套件",
      description:
        "TermTools Pro 将终端录制、精准回放、隐私替换、SSH 会话捕获与 JSON 审阅整合为一个生产级开发者工具。",
      keywords: [
        "终端录制",
        "终端回放",
        "终端隐私保护",
        "SSH 会话录制",
        "开发文档",
        "命令行演示",
      ],
    },
  },
  "/about": {
    en: {
      title: "About TermTools Pro",
      description:
        "Learn about TermTools Pro, a terminal recording and replay tool for documenting command-line workflows with privacy masking and export support.",
      keywords: [
        "TermTools Pro",
        "terminal recording workflow",
        "terminal privacy masking",
      ],
    },
    zh: {
      title: "关于 TermTools Pro",
      description:
        "了解 TermTools Pro，一个用于记录、回放和整理命令行工作流的终端工具，支持隐私替换与导出。",
      keywords: ["TermTools Pro", "终端录制工作流", "终端隐私替换"],
    },
  },
  "/download": {
    en: {
      title: "Download TermTools Pro v1.0.2",
      description:
        "Download TermTools Pro v1.0.2 from GitHub Releases and get terminal recording, replay, privacy masking, SSH capture, and JSON review in one integrated tool.",
      keywords: [
        "download TermTools",
        "TermTools Pro release",
        "terminal recording suite",
        "SSH session recorder",
      ],
    },
    zh: {
      title: "下载 TermTools Pro v1.0.2",
      description:
        "从 GitHub Release 下载 TermTools Pro v1.0.2，在一个一体化工具中获得终端录制、回放、隐私替换、SSH 捕获与 JSON 审阅能力。",
      keywords: [
        "下载 TermTools",
        "TermTools Pro 发布页",
        "终端录制套件",
        "SSH 会话录制",
      ],
    },
  },
  "/legal/disclaimer": {
    en: {
      title: "Disclaimer - TermTools Pro",
      description:
        "Read the TermTools Pro disclaimer covering software warranty, user responsibility, external links, security, and liability limitations.",
    },
    zh: {
      title: "免责声明 - TermTools Pro",
      description:
        "阅读 TermTools Pro 关于软件担保、用户责任、外部链接、安全性和责任限制的免责声明。",
    },
  },
  "/legal/license": {
    en: {
      title: "Open Source License - TermTools Pro",
      description:
        "Review the TermTools Pro open source license, third-party notices, attribution guidance, and source code information.",
    },
    zh: {
      title: "开源许可协议 - TermTools Pro",
      description:
        "查看 TermTools Pro 的开源许可、第三方声明、署名说明和源代码信息。",
    },
  },
  "/legal/privacy": {
    en: {
      title: "Privacy Policy - TermTools Pro",
      description:
        "Review how TermTools Pro keeps terminal recordings local and avoids analytics, telemetry, and unnecessary data collection.",
    },
    zh: {
      title: "隐私政策 - TermTools Pro",
      description:
        "了解 TermTools Pro 如何将终端录制保留在本地，并避免分析、遥测和不必要的数据收集。",
    },
  },
  "/legal/terms": {
    en: {
      title: "Terms of Service - TermTools Pro",
      description:
        "Read the TermTools Pro terms of service for using the open source terminal recording and playback software.",
    },
    zh: {
      title: "用户服务协议 - TermTools Pro",
      description:
        "阅读 TermTools Pro 用户服务协议，了解开源终端录制与回放软件的使用条款。",
    },
  },
} as const satisfies Record<LocalizedRoute, Record<Language, SeoRouteContent>>

export function getCanonicalUrl(
  route: LocalizedRoute,
  language: Language
): string {
  const pathname = getLocalizedRoute(route, language)

  return pathname === "/" ? `${SITE_URL}/` : `${SITE_URL}${pathname}`
}

export function getAlternateLinks(
  route: LocalizedRoute
): Array<LinkDescriptor> {
  const languageLinks = seoLanguages.map((language) => ({
    rel: "alternate" as const,
    hrefLang: hrefLangByLanguage[language],
    href: getCanonicalUrl(route, language),
  }))

  return [
    ...languageLinks,
    {
      rel: "alternate",
      hrefLang: "x-default",
      href: getCanonicalUrl(route, defaultLanguage),
    },
  ]
}

export function getSeoHead(route: LocalizedRoute, language: Language): SeoHead {
  const content: SeoRouteContent = seoRoutes[route][language]
  const canonicalUrl = getCanonicalUrl(route, language)
  const alternateLanguage = language === "en" ? "zh" : "en"
  const keywordMeta = content.keywords
    ? [
        {
          name: "keywords",
          content: content.keywords.join(", "),
        },
      ]
    : []

  return {
    meta: [
      { title: content.title },
      {
        name: "description",
        content: content.description,
      },
      {
        name: "robots",
        content: "index,follow",
      },
      {
        name: "application-name",
        content: siteName,
      },
      ...keywordMeta,
      {
        property: "og:title",
        content: content.title,
      },
      {
        property: "og:description",
        content: content.description,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: canonicalUrl,
      },
      {
        property: "og:image",
        content: OG_IMAGE_URL,
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: `${siteName} terminal recording preview`,
      },
      {
        property: "og:site_name",
        content: siteName,
      },
      {
        property: "og:locale",
        content: openGraphLocaleByLanguage[language],
      },
      {
        property: "og:locale:alternate",
        content: openGraphLocaleByLanguage[alternateLanguage],
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: content.title,
      },
      {
        name: "twitter:description",
        content: content.description,
      },
      {
        name: "twitter:image",
        content: OG_IMAGE_URL,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
      ...getAlternateLinks(route),
    ],
    scripts: getStructuredData(route, language, content, canonicalUrl).map(
      toJsonLdScript
    ),
  }
}

export function getSitemapEntries(): Array<SitemapEntry> {
  return localizedRoutes.flatMap((route) =>
    seoLanguages.map((language) => ({
      loc: getCanonicalUrl(route, language),
      changefreq: route.startsWith("/legal/") ? "monthly" : "weekly",
      priority: getSitemapPriority(route),
    }))
  )
}

function getSitemapPriority(route: LocalizedRoute): string {
  if (route === "/") {
    return "1.0"
  }

  if (route === "/download") {
    return "0.9"
  }

  if (route === "/about") {
    return "0.7"
  }

  return "0.3"
}

function toJsonLdScript(data: Record<string, unknown>): ScriptDescriptor {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data),
  }
}

function getStructuredData(
  route: LocalizedRoute,
  language: Language,
  content: SeoRouteContent,
  canonicalUrl: string
): Array<Record<string, unknown>> {
  if (route === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: siteName,
        url: `${SITE_URL}/`,
        inLanguage: schemaLanguageByLanguage[language],
        description: content.description,
      },
      getSoftwareApplicationData(content, canonicalUrl),
    ]
  }

  if (route === "/download") {
    return [
      {
        ...getSoftwareApplicationData(content, canonicalUrl),
        downloadUrl: canonicalUrl,
      },
    ]
  }

  if (route === "/about") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "TermTools",
        url: `${SITE_URL}/`,
        description: content.description,
        sameAs: ["https://github.com/Paxxs/termtools_web"],
      },
    ]
  }

  return []
}

function getSoftwareApplicationData(
  content: SeoRouteContent,
  canonicalUrl: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteName,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "macOS, Linux",
    url: canonicalUrl,
    description: content.description,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }
}
