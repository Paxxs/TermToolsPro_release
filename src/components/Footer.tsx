import { Link, useLocation } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import { getLanguageFromPathname, getLocalizedRoute } from "../lib/i18n-routing"

export default function Footer() {
  const year = new Date().getFullYear()
  const { t } = useTranslation()
  const pathname = useLocation({ select: (location) => location.pathname })
  const language = getLanguageFromPathname(pathname)

  return (
    <footer className="site-footer mt-20 border-t border-[var(--border)] px-4 pt-10 pb-14 text-[var(--sea-ink-soft)]">
      <div className="page-wrap">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <p className="m-0 text-sm font-semibold text-[var(--sea-ink)]">
              TermTools Pro
            </p>
            <p className="mt-1 text-xs">
              &copy; {year} TermTools. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              to={getLocalizedRoute("/legal/terms", language)}
              className="text-[var(--sea-ink-soft)] transition hover:text-[var(--sea-ink)]"
            >
              {t("footer.terms")}
            </Link>
            <Link
              to={getLocalizedRoute("/legal/privacy", language)}
              className="text-[var(--sea-ink-soft)] transition hover:text-[var(--sea-ink)]"
            >
              {t("footer.privacy")}
            </Link>
            <Link
              to={getLocalizedRoute("/legal/license", language)}
              className="text-[var(--sea-ink-soft)] transition hover:text-[var(--sea-ink)]"
            >
              {t("footer.license")}
            </Link>
            <Link
              to={getLocalizedRoute("/legal/disclaimer", language)}
              className="text-[var(--sea-ink-soft)] transition hover:text-[var(--sea-ink)]"
            >
              {t("footer.disclaimer")}
            </Link>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://github.com/Paxxs/termtools"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl p-2 text-[var(--sea-ink-soft)] transition hover:bg-[var(--link-bg-hover)] hover:text-[var(--sea-ink)]"
          >
            <span className="sr-only">Go to TermTools GitHub</span>
            <svg viewBox="0 0 16 16" aria-hidden="true" width="24" height="24">
              <path
                fill="currentColor"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
