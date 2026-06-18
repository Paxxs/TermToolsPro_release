import {
  Archive,
  Code,
  Download,
  EyeOff,
  FileJson,
  FileText,
  Play,
  Server,
  ShieldCheck,
  Terminal,
  Video,
  Zap,
} from "lucide-react"
import { useTranslation } from "react-i18next"

import { HomeHero } from "@/components/HomeHero"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const RELEASE_URL = "https://github.com/Paxxs/TermToolsPro_release/releases/"
const LATEST_RELEASE_URL =
  "https://github.com/Paxxs/TermToolsPro_release/releases/tag/v1.0.2"
const CONTACT_URL = "mailto:me@vip.morfans.cn"

const coreFeatures = [
  {
    icon: Video,
    title: "Terminal tutorial recording",
    description:
      "Create a visual record of terminal lessons and workflows that is clearer than shell history.",
  },
  {
    icon: Play,
    title: "Recording playback",
    description:
      "Replay captured sessions and restore the terminal scene as it happened.",
  },
  {
    icon: EyeOff,
    title: "Live text replacement",
    description:
      "Replace sensitive terminal output in real time to avoid exposing secrets or private text.",
  },
  {
    icon: Server,
    title: "Server operation recording",
    description:
      "Configure Linux servers to automatically record SSH sessions by user and timestamp.",
  },
  {
    icon: FileText,
    title: "Readable YAML config",
    description:
      "Use concise, human-readable YAML configuration instead of brittle setup steps.",
  },
  {
    icon: FileJson,
    title: "Shareable JSON recordings",
    description:
      "Keep recordings as text-friendly JSON files that are easy to inspect and share.",
  },
  {
    icon: Archive,
    title: "Automatic replay compression",
    description:
      "Compress replay files automatically so captured sessions stay small and portable.",
  },
  {
    icon: ShieldCheck,
    title: "Single binary file",
    description:
      "Ship with its own runtime in one binary, reducing environment and dependency issues.",
  },
]

const useCases = [
  {
    title: "Developer documentation",
    description:
      "Record installs, CLI walkthroughs, and troubleshooting flows as reusable visual guides.",
    icon: Terminal,
  },
  {
    title: "Bug reports",
    description:
      "Capture terminal sessions so maintainers can see the exact commands and output.",
    icon: Code,
  },
  {
    title: "Tutorials and demos",
    description:
      "Show command-line workflows step by step with replayable, shareable recordings.",
    icon: Zap,
  },
]

const legacyTools = [
  {
    name: "TermRecord",
    description:
      "Records every SSH session on a configured Linux server, saving each capture by username and time.",
    action: "Download TermRecord",
  },
  {
    name: "ReplayTheTerm",
    description:
      "The best way to demonstrate a command-line terminal when you only need focused playback.",
    action: "Download ReplayTheTerm",
  },
  {
    name: "FakeTerm",
    description:
      "Changes terminal display text in real time to hide confidential information during demos.",
    action: "Download FakeTerm",
  },
]

export function HomePage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen">
      <HomeHero
        subtitle={t("hero.subtitle")}
        title={t("hero.title")}
        description={t("hero.description")}
        getStarted={t("hero.getStarted")}
        learnMore={t("hero.learnMore")}
        getStartedHref={LATEST_RELEASE_URL}
        learnMoreHref="#features"
      />

      <section id="features" className="demo-page demo-page-wide py-20">
        <div className="mb-12 text-center">
          <span className="island-kicker">Features</span>
          <h2 className="demo-title mt-3 mb-4">
            Core capabilities at a glance
          </h2>
          <p className="demo-muted mx-auto max-w-3xl text-lg">
            TermRecord, ReplayTheTerm, and FakeTerm have merged into TermTools
            Pro. The new app brings recording, playback, and replacement
            together so the old single-purpose tools can work as one stable
            workflow.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="feature-card border border-[var(--border)] transition-all duration-200"
            >
              <CardHeader>
                <div className="mb-3 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <feature.icon aria-hidden="true" />
                </div>
                <CardTitle className="text-[var(--sea-ink)]">
                  <h3>{feature.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[var(--sea-ink-soft)]">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full">
            <a href={RELEASE_URL}>
              <Download data-icon="inline-start" />
              Download TermTools Pro
            </a>
          </Button>
        </div>
      </section>

      <section className="demo-page demo-page-wide py-20">
        <div className="mb-12 text-center">
          <h2 className="demo-title mb-4">Perfect for terminal work</h2>
          <p className="demo-muted mx-auto max-w-2xl text-lg">
            Practical workflows where recording, replay, and privacy-aware
            replacement help more than a plain text log.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="demo-card text-center">
              <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-secondary">
                <useCase.icon
                  aria-hidden="true"
                  className="text-[var(--lagoon-deep)]"
                />
              </div>
              <h3 className="demo-section-title mb-2">{useCase.title}</h3>
              <p className="demo-muted text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="demo-page py-20">
        <div className="demo-panel mx-auto max-w-3xl text-center">
          <h2 className="demo-title mb-4">{t("platform.title")}</h2>
          <p className="demo-muted mb-8 text-lg">
            Available for Linux and macOS as a portable, single-binary release.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-6 py-4">
              <Terminal
                aria-hidden="true"
                className="text-[var(--lagoon-deep)]"
              />
              <span className="text-lg font-bold text-[var(--sea-ink)]">
                {t("platform.linux")}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-6 py-4">
              <Code aria-hidden="true" className="text-[var(--lagoon-deep)]" />
              <span className="text-lg font-bold text-[var(--sea-ink)]">
                {t("platform.macos")}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="legacy-tools-heading"
        className="demo-page demo-page-wide py-20"
      >
        <div className="mb-12 text-center">
          <span className="island-kicker">Legacy tools</span>
          <h2 id="legacy-tools-heading" className="demo-title mt-3 mb-4">
            Still want the single-purpose versions?
          </h2>
          <p className="demo-muted mx-auto max-w-3xl text-lg">
            We still keep them available for focused use. TermTools Pro is the
            recommended version because it combines multiple functions into one
            more stable workflow.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {legacyTools.map((tool) => (
            <Card key={tool.name} className="border border-[var(--border)]">
              <CardHeader>
                <CardTitle className="text-[var(--sea-ink)]">
                  <h3>{tool.name}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-5">
                <CardDescription className="text-[var(--sea-ink-soft)]">
                  {tool.description}
                </CardDescription>
                <Button asChild variant="secondary" className="mt-auto">
                  <a href={RELEASE_URL}>
                    {tool.action}
                    <Download data-icon="inline-end" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="demo-page py-20">
        <div className="demo-panel mx-auto max-w-3xl text-center">
          <span className="island-kicker">Release</span>
          <h2 className="demo-title mt-3 mb-4">Try version 1.0.2</h2>
          <p className="demo-muted mx-auto mb-8 max-w-2xl text-lg">
            Start with the latest TermTools Pro release, or contact the author
            if you need help choosing between the combined app and a
            single-purpose edition.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full">
              <a href={LATEST_RELEASE_URL}>
                <Download data-icon="inline-start" />
                Download v1.0.2
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={CONTACT_URL}>Contact author</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
