import { useTranslation } from "react-i18next"
import { Download, Terminal, Code, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function DownloadPage() {
  const { t } = useTranslation()

  const platforms = [
    {
      name: "Linux",
      icon: Terminal,
      downloads: [
        { label: "Debian/Ubuntu (.deb)", link: "#" },
        { label: "Red Hat/Fedora (.rpm)", link: "#" },
        { label: "Arch Linux (AUR)", link: "#" },
        { label: "AppImage (Universal)", link: "#" },
      ],
    },
    {
      name: "macOS",
      icon: Code,
      downloads: [
        { label: "Homebrew", link: "#" },
        { label: "DMG Installer", link: "#" },
        { label: "PKG Installer", link: "#" },
      ],
    },
  ]

  const installSteps = [
    {
      title: "Download the Package",
      description: "Choose the appropriate package for your operating system",
    },
    {
      title: "Install TermTools",
      description: "Follow the platform-specific installation instructions",
    },
    {
      title: "Verify Installation",
      description:
        "Run `termtools --version` to confirm successful installation",
    },
    {
      title: "Start Recording",
      description:
        "Use `termtools record` to begin your first recording session",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="demo-page demo-page-wide py-20">
        <div className="rise-in mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <span className="island-kicker">{t("download.subtitle")}</span>
          </div>
          <h1 className="demo-title mb-6">{t("download.title")}</h1>
          <p className="demo-muted mx-auto mb-12 max-w-2xl text-lg">
            Choose your platform and start recording terminal sessions
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            {platforms.map((platform, idx) => (
              <Card
                key={idx}
                className="border border-[var(--border)] text-left"
              >
                <CardHeader>
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] text-white">
                    <platform.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl text-[var(--sea-ink)]">
                    {platform.name}
                  </CardTitle>
                  <CardDescription>
                    Latest stable release: v1.0.0
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {platform.downloads.map((download, i) => (
                      <a
                        key={i}
                        href={download.link}
                        className="flex items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--chip-bg)] px-4 py-3 text-sm font-medium text-[var(--sea-ink)] transition hover:bg-[var(--link-bg-hover)]"
                      >
                        <span>{download.label}</span>
                        <Download className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-page demo-page-wide py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="demo-title mb-4">{t("download.install")}</h2>
            <p className="demo-muted text-lg">
              Get started in four simple steps
            </p>
          </div>

          <div className="space-y-6">
            {installSteps.map((step, idx) => (
              <div key={idx} className="demo-card flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] text-lg font-bold text-white">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="demo-section-title mb-1">{step.title}</h3>
                  <p className="demo-muted text-sm">{step.description}</p>
                </div>
                <CheckCircle className="h-6 w-6 flex-shrink-0 text-[var(--lagoon-deep)]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-page py-20">
        <div className="demo-panel mx-auto max-w-3xl">
          <h2 className="demo-section-title mb-4">
            Quick Install via Package Manager
          </h2>
          <div className="space-y-4">
            <div>
              <p className="demo-muted mb-2 text-sm font-semibold">
                Homebrew (macOS)
              </p>
              <div className="demo-code-block font-mono text-sm">
                <code>brew install termtools</code>
              </div>
            </div>
            <div>
              <p className="demo-muted mb-2 text-sm font-semibold">
                APT (Debian/Ubuntu)
              </p>
              <div className="demo-code-block font-mono text-sm">
                <code>sudo apt install termtools</code>
              </div>
            </div>
            <div>
              <p className="demo-muted mb-2 text-sm font-semibold">
                DNF (Fedora)
              </p>
              <div className="demo-code-block font-mono text-sm">
                <code>sudo dnf install termtools</code>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button className="demo-button gap-2">
              <Download className="h-5 w-5" />
              Download Latest Release
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
