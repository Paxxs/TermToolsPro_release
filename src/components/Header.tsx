import { Link, useLocation } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { Moon, Sun, Languages } from "lucide-react"
import { useTheme } from "../hooks/use-theme"
import {
  type Language,
  getLanguageFromPathname,
  getLocalizedRoute,
  localizePathname,
} from "../lib/i18n-routing"
import { Button } from "./ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"

export default function Header() {
  const { t } = useTranslation()
  const { theme, toggleTheme } = useTheme()
  const pathname = useLocation({ select: (location) => location.pathname })
  const language = getLanguageFromPathname(pathname)

  const navLink = (route: Parameters<typeof getLocalizedRoute>[0]) => {
    return getLocalizedRoute(route, language)
  }

  const languageLink = (targetLanguage: Language) => {
    return localizePathname(pathname, targetLanguage)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
      <nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
        <h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight sm:flex-1">
          <Link
            to={navLink("/")}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--sea-ink)] no-underline shadow-[0_8px_24px_rgba(30,90,72,0.08)] sm:px-4 sm:py-2"
          >
            <span className="h-2 w-2 rounded-full bg-[linear-gradient(90deg,#56c6be,#7ed3bf)]" />
            TermTools Pro
          </Link>
        </h2>

        <div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 text-sm font-semibold sm:order-none sm:w-auto sm:flex-nowrap sm:justify-center sm:pb-0">
          <Link
            to={navLink("/")}
            className="nav-link"
            activeOptions={{ exact: true }}
            activeProps={{ className: "nav-link is-active" }}
          >
            {t("nav.features")}
          </Link>
          <Link
            to={navLink("/download")}
            className="nav-link"
            activeOptions={{ exact: true }}
            activeProps={{ className: "nav-link is-active" }}
          >
            {t("nav.download")}
          </Link>
          <Link
            to={navLink("/about")}
            className="nav-link"
            activeOptions={{ exact: true }}
            activeProps={{ className: "nav-link is-active" }}
          >
            {t("nav.about")}
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:ml-0 sm:flex-1 sm:justify-end sm:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-xl text-[var(--sea-ink-soft)] hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
              >
                <Languages className="h-5 w-5" />
                <span className="sr-only">Switch language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem render={<Link to={languageLink("en")} />}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link to={languageLink("zh")} />}>
                中文
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-xl text-[var(--sea-ink-soft)] hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          >
            {theme === "light" ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </nav>
    </header>
  )
}
