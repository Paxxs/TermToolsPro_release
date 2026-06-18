export const defaultLanguage = "en"
export const languagePrefixes = {
  en: "",
  zh: "/zh",
} as const

export type Language = keyof typeof languagePrefixes

export const languages = Object.keys(languagePrefixes) as Array<Language>

export const localizedRoutes = [
  "/",
  "/about",
  "/download",
  "/legal/disclaimer",
  "/legal/license",
  "/legal/privacy",
  "/legal/terms",
] as const

export type LocalizedRoute = (typeof localizedRoutes)[number]
export type LocalizedPathname =
  | LocalizedRoute
  | "/zh"
  | `/zh${Exclude<LocalizedRoute, "/">}`

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language)
}

export function getLanguageFromPathname(pathname: string): Language {
  const [, maybeLanguage] = pathname.split("/")

  return maybeLanguage === "zh" ? "zh" : defaultLanguage
}

export function stripLanguagePrefix(pathname: string): LocalizedRoute {
  const normalized = pathname === "" ? "/" : pathname
  const withoutTrailingSlash =
    normalized.length > 1 ? normalized.replace(/\/+$/, "") : normalized

  if (withoutTrailingSlash === "/zh") {
    return "/"
  }

  const unprefixed = withoutTrailingSlash.startsWith("/zh/")
    ? withoutTrailingSlash.slice(3)
    : withoutTrailingSlash

  return localizedRoutes.includes(unprefixed as LocalizedRoute)
    ? (unprefixed as LocalizedRoute)
    : "/"
}

export function localizePathname(
  pathname: string,
  language: Language
): LocalizedPathname {
  const route = stripLanguagePrefix(pathname)

  if (language === defaultLanguage) {
    return route
  }

  return route === "/" ? "/zh" : `/zh${route}`
}

export function getLocalizedRoute(
  route: LocalizedRoute,
  language: Language
): LocalizedPathname {
  if (language === defaultLanguage) {
    return route
  }

  return route === "/" ? "/zh" : `/zh${route}`
}
