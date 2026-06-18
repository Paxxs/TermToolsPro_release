# TermTools multilingual SEO design

## Status

Approved for design by the user on 2026-06-19.

## Context

TermTools is a TanStack Start React site deployed to GitHub Pages at
`https://termtools.apppro.dev`. The app already prerenders the English routes
and their `/zh` Chinese counterparts:

- `/`, `/about`, `/download`
- `/legal/terms`, `/legal/privacy`, `/legal/license`, `/legal/disclaimer`
- `/zh`, `/zh/about`, `/zh/download`
- `/zh/legal/terms`, `/zh/legal/privacy`, `/zh/legal/license`,
  `/zh/legal/disclaimer`

The current root route only provides a global title and description. Individual
routes do not provide route-specific titles, descriptions, canonical URLs,
alternate language links, Open Graph tags, Twitter card tags, or structured
data. `robots.txt` exists but does not reference a sitemap. The web manifest
still contains template branding.

The user asked for complete SEO coverage for all language versions and asked
that the implementation follow the TanStack Start SEO guide:
https://raw.githubusercontent.com/tanstack/router/main/docs/start/framework/react/guide/seo.md

Relevant TanStack guidance from that document:

- Route `head` is the primary SEO entry point.
- SSR is enabled by default and should remain enabled for indexable pages.
- Static prerendering improves crawlability for stable content.
- TanStack Start can generate a sitemap when prerendering crawls links, and a
  static sitemap is also acceptable for simple known route sets.
- `robots.txt` should allow crawling and reference the sitemap.

## Goals

- Add page-specific SEO metadata for every English and Chinese route.
- Keep English canonical URLs unprefixed and Chinese canonical URLs under
  `/zh`.
- Add reciprocal alternate language links for every localized route.
- Add Open Graph and Twitter metadata for share previews.
- Add structured data that describes TermTools as a software application and
  the website as a bilingual site.
- Ensure crawlers can discover all prerendered pages through sitemap and
  robots configuration.
- Keep implementation centralized enough that adding a new localized route is
  low-risk.
- Add tests around URL, metadata, and language-link generation.

## Non-goals

- Do not add analytics, tracking pixels, or paid SEO integrations.
- Do not rewrite visible page copy except where metadata requires concise,
  route-specific summaries.
- Do not migrate routing or i18n libraries.
- Do not add dynamic server routes unless static generation cannot satisfy the
  requirement.

## Recommended architecture

Create a small SEO module that owns site constants, route metadata, and helper
functions:

- `SITE_URL = "https://termtools.apppro.dev"`
- route metadata keyed by canonical localized route, using the existing
  `LocalizedRoute` and `Language` concepts
- helpers for canonical URLs, alternate language links, Open Graph tags,
  Twitter tags, and JSON-LD scripts

Each route file should call a shared helper from its `head` option instead of
duplicating metadata arrays. English and Chinese versions of the same route
should reference the same canonical route key and pass the route language.

The root route should keep global document defaults only, such as charset,
viewport, stylesheet link, theme initialization, and any site-wide metadata that
is not page-specific. Page titles and descriptions should move to route-level
head definitions so prerendered HTML is precise for each page.

## Proposed helper API

Create `src/lib/seo.ts` with these exported pieces:

- `SITE_URL`: the normalized production origin, without a trailing slash.
- `siteName`: `TermTools Pro`.
- `seoRoutes`: route metadata keyed by `LocalizedRoute`.
- `getCanonicalUrl(route, language)`: returns the absolute canonical URL.
- `getAlternateLinks(route)`: returns `rel="alternate"` links for `en`,
  `zh-CN`, and `x-default`.
- `getSeoHead(route, language)`: returns TanStack route `head` output with
  `meta`, `links`, and optional `scripts`.
- `getSitemapEntries()`: returns the full static sitemap route list if a
  static sitemap fallback is used.

The helper should avoid reading browser globals so it works during prerender,
SSR, and tests.

## Route wiring map

Every route file should declare a `head` function next to its component:

| Route file | Canonical route | Language |
| --- | --- | --- |
| `src/routes/index.tsx` | `/` | `en` |
| `src/routes/about.tsx` | `/about` | `en` |
| `src/routes/download.tsx` | `/download` | `en` |
| `src/routes/legal/terms.tsx` | `/legal/terms` | `en` |
| `src/routes/legal/privacy.tsx` | `/legal/privacy` | `en` |
| `src/routes/legal/license.tsx` | `/legal/license` | `en` |
| `src/routes/legal/disclaimer.tsx` | `/legal/disclaimer` | `en` |
| `src/routes/zh.index.tsx` | `/` | `zh` |
| `src/routes/zh.about.tsx` | `/about` | `zh` |
| `src/routes/zh.download.tsx` | `/download` | `zh` |
| `src/routes/zh.legal.terms.tsx` | `/legal/terms` | `zh` |
| `src/routes/zh.legal.privacy.tsx` | `/legal/privacy` | `zh` |
| `src/routes/zh.legal.license.tsx` | `/legal/license` | `zh` |
| `src/routes/zh.legal.disclaimer.tsx` | `/legal/disclaimer` | `zh` |

## Metadata coverage

For every route and language:

- `title`
- `description`
- optional `keywords`
- `og:title`
- `og:description`
- `og:type`
- `og:url`
- `og:site_name`
- `og:locale`
- `og:locale:alternate`
- `twitter:card`
- `twitter:title`
- `twitter:description`
- `canonical`
- `alternate` links for `en`, `zh-CN`, and `x-default`

Home and download pages should be treated as primary commercial/product pages.
About and legal pages should receive concise, accurate page-specific metadata
without over-optimizing legal content.

## Route metadata matrix

The implementation should use metadata close to the following copy. Minor copy
edits are allowed during implementation if tests and route coverage stay intact.

| Canonical route | English title | English description |
| --- | --- | --- |
| `/` | `TermTools Pro - Terminal Recording, Replay, and Demo Automation` | `Record, replay, and polish terminal workflows with TermTools Pro, a developer tool for high-quality terminal demos, documentation, and tutorials.` |
| `/download` | `Download TermTools Pro for macOS and Linux` | `Download TermTools Pro for macOS and Linux, then start recording terminal sessions, replaying workflows, and exporting developer-ready demos.` |
| `/about` | `About TermTools Pro` | `Learn about TermTools Pro, the open source terminal recording toolkit built for developers, technical writers, and teams that document command-line workflows.` |
| `/legal/terms` | `Terms of Service - TermTools Pro` | `Read the TermTools Pro terms of service for using the open source terminal recording and playback software.` |
| `/legal/privacy` | `Privacy Policy - TermTools Pro` | `Review how TermTools Pro keeps terminal recordings local and avoids analytics, telemetry, and unnecessary data collection.` |
| `/legal/license` | `Open Source License - TermTools Pro` | `Review the TermTools Pro open source license, third-party notices, attribution guidance, and source code information.` |
| `/legal/disclaimer` | `Disclaimer - TermTools Pro` | `Read the TermTools Pro disclaimer covering software warranty, user responsibility, external links, security, and liability limitations.` |

| Canonical route | Chinese title | Chinese description |
| --- | --- | --- |
| `/` | `TermTools Pro - 终端录制、回放与演示自动化工具` | `使用 TermTools Pro 录制、回放并优化终端工作流，为开发文档、教程和产品演示生成高质量终端内容。` |
| `/download` | `下载适用于 macOS 和 Linux 的 TermTools Pro` | `下载适用于 macOS 和 Linux 的 TermTools Pro，开始录制终端会话、回放工作流，并导出适合开发者文档的演示内容。` |
| `/about` | `关于 TermTools Pro` | `了解 TermTools Pro，这是一套为开发者、技术写作者和团队打造的开源终端录制工具。` |
| `/legal/terms` | `用户服务协议 - TermTools Pro` | `阅读 TermTools Pro 用户服务协议，了解开源终端录制与回放软件的使用条款。` |
| `/legal/privacy` | `隐私政策 - TermTools Pro` | `了解 TermTools Pro 如何将终端录制保留在本地，并避免分析、遥测和不必要的数据收集。` |
| `/legal/license` | `开源许可协议 - TermTools Pro` | `查看 TermTools Pro 的开源许可、第三方声明、署名说明和源代码信息。` |
| `/legal/disclaimer` | `免责声明 - TermTools Pro` | `阅读 TermTools Pro 关于软件担保、用户责任、外部链接、安全性和责任限制的免责声明。` |

## URL and hreflang rules

For every canonical route, generate these URL pairs:

| Canonical route | English URL | Chinese URL |
| --- | --- | --- |
| `/` | `https://termtools.apppro.dev/` | `https://termtools.apppro.dev/zh` |
| `/about` | `https://termtools.apppro.dev/about` | `https://termtools.apppro.dev/zh/about` |
| `/download` | `https://termtools.apppro.dev/download` | `https://termtools.apppro.dev/zh/download` |
| `/legal/terms` | `https://termtools.apppro.dev/legal/terms` | `https://termtools.apppro.dev/zh/legal/terms` |
| `/legal/privacy` | `https://termtools.apppro.dev/legal/privacy` | `https://termtools.apppro.dev/zh/legal/privacy` |
| `/legal/license` | `https://termtools.apppro.dev/legal/license` | `https://termtools.apppro.dev/zh/legal/license` |
| `/legal/disclaimer` | `https://termtools.apppro.dev/legal/disclaimer` | `https://termtools.apppro.dev/zh/legal/disclaimer` |

Each page should include:

- `rel="canonical"` pointing to the current language version.
- `rel="alternate" hreflang="en"` pointing to the English URL.
- `rel="alternate" hreflang="zh-CN"` pointing to the Chinese URL.
- `rel="alternate" hreflang="x-default"` pointing to the English URL.

The English home page canonical should include the trailing slash because it is
the origin URL. Other paths should not include trailing slashes.

## Structured data

Add JSON-LD through TanStack route `head` scripts where appropriate:

- Home page: `SoftwareApplication` plus `WebSite`
- Download page: `SoftwareApplication` with operating system and offer/download
  intent information
- About page: `Organization`
- Legal pages: omit route-specific JSON-LD unless there is a precise schema
  type worth adding

JSON-LD should be generated from plain objects and serialized with
`JSON.stringify` to avoid invalid script content.

Expected structured data fields:

- `SoftwareApplication`
  - `name`: `TermTools Pro`
  - `applicationCategory`: `DeveloperApplication`
  - `operatingSystem`: `macOS, Linux`
  - `url`: current canonical URL
  - `description`: localized page description
  - `offers`: free/open-source offer when no commercial price is present
- `WebSite`
  - `name`: `TermTools Pro`
  - `url`: `https://termtools.apppro.dev/`
  - `inLanguage`: `en` and `zh-CN` variants where appropriate
- `Organization`
  - `name`: `TermTools`
  - `url`: `https://termtools.apppro.dev/`
  - `sameAs`: source repository URL if the canonical repository URL is stable

## Sitemap and robots

Prefer TanStack Start's build-time sitemap support if it works cleanly with the
current Vite plugin version:

```ts
tanstackStart({
  prerender: {
    enabled: true,
    crawlLinks: true,
  },
  sitemap: {
    enabled: true,
    host: "https://termtools.apppro.dev",
  },
})
```

If the installed plugin version does not support this API or build output is
not reliable, use a static `public/sitemap.xml` generated from the same route
list. In either case, `robots.txt` should be:

```txt
User-agent: *
Allow: /

Sitemap: https://termtools.apppro.dev/sitemap.xml
```

The sitemap must include every URL from the URL matrix. If using a static
sitemap, use the standard sitemap namespace and include conservative priorities:

- Home pages: `1.0`
- Download pages: `0.9`
- About page: `0.7`
- Legal pages: `0.3`

Do not include fake `lastmod` dates unless they come from a real source.

## Manifest

Update `public/manifest.json` from template branding to TermTools branding:

- `short_name`: `TermTools`
- `name`: `TermTools Pro`
- `start_url`: `/`
- theme/background colors aligned with the app palette

Only reference icon files that actually exist unless new icons are added in the
same implementation slice.

Because the current manifest references `logo192.png` and `logo512.png`, the
implementation must either add those assets or remove those icon entries. The
smaller, safer SEO slice is to keep only `favicon.ico` until dedicated app
icons are available.

## Testing and verification

Add focused unit tests for the SEO helper module:

- canonical URL generation for English and Chinese routes
- alternate language links for matching route pairs
- route metadata exists for every localized route in `localizedRoutes`
- JSON-LD scripts serialize valid JSON
- sitemap entries include every English and Chinese route if using a static
  sitemap fallback
- route-level head output includes exactly one canonical link
- route-level head output includes all required alternate links

Run:

- `bun run test`
- `bun run typecheck`
- `bun run build`

After build, inspect prerendered HTML or generated output for at least `/`,
`/download`, `/zh`, and `/zh/download` to confirm title, description,
canonical, and alternate links are present in the HTML.

## Acceptance criteria

- All 14 currently prerendered localized pages have route-specific titles and
  descriptions.
- All 14 pages have canonical URLs under `https://termtools.apppro.dev`.
- All localized route pairs have reciprocal `en`, `zh-CN`, and `x-default`
  alternate links.
- Home, download, and about pages include valid JSON-LD scripts.
- `robots.txt` allows crawling and references the production sitemap.
- The sitemap contains every English and Chinese SEO page.
- The manifest no longer exposes template app names or missing icon references.
- `bun run test`, `bun run typecheck`, and `bun run build` pass.
- Build output for representative English and Chinese pages contains the
  expected meta and link tags.

## Rollout

Implement in small commits:

1. Add SEO metadata/helpers and tests.
2. Wire route-level `head` metadata across English routes.
3. Wire route-level `head` metadata across Chinese routes.
4. Add sitemap/robots/manifest updates and build verification.

Each slice should be validated with the narrowest relevant tests before commit.

## Self-review notes

- Scope is limited to technical SEO and metadata.
- The design covers all currently prerendered routes in both languages.
- The site URL is explicit and does not depend on environment-specific guessing.
- The sitemap path has a fallback if plugin support differs from the referenced
  documentation.
