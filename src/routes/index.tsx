import { createFileRoute } from "@tanstack/react-router"
import { useTranslation } from "react-i18next"
import {
  Video,
  Zap,
  FileImage,
  Palette,
  Terminal,
  Play,
  Settings,
} from "lucide-react"
import { HomeHero } from "@/components/HomeHero"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Route = createFileRoute("/")({ component: App })

function App() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Video,
      title: t("features.record.title"),
      description: t("features.record.description"),
    },
    {
      icon: Play,
      title: t("features.replay.title"),
      description: t("features.replay.description"),
    },
    {
      icon: FileImage,
      title: t("features.export.title"),
      description: t("features.export.description"),
    },
    {
      icon: Palette,
      title: t("features.themes.title"),
      description: t("features.themes.description"),
    },
  ]

  const useCases = [
    {
      title: "Developer Documentation",
      description:
        "Create visual guides for CLI tools and installation processes",
      icon: Terminal,
    },
    {
      title: "Bug Reports",
      description: "Capture and share terminal sessions to demonstrate issues",
      icon: Settings,
    },
    {
      title: "Tutorials & Demos",
      description: "Record step-by-step tutorials for educational content",
      icon: Zap,
    },
  ]

  const testimonials = [
    {
      name: t("testimonials.users.alex.name"),
      role: t("testimonials.users.alex.role"),
      content: t("testimonials.users.alex.content"),
      avatar: "👨‍💻",
    },
    {
      name: t("testimonials.users.sarah.name"),
      role: t("testimonials.users.sarah.role"),
      content: t("testimonials.users.sarah.content"),
      avatar: "👩‍💼",
    },
    {
      name: t("testimonials.users.michael.name"),
      role: t("testimonials.users.michael.role"),
      content: t("testimonials.users.michael.content"),
      avatar: "👨‍🔧",
    },
  ]

  return (
    <div className="min-h-screen">
      <HomeHero
        subtitle={t("hero.subtitle")}
        title={t("hero.title")}
        description={t("hero.description")}
        getStarted={t("hero.getStarted")}
        learnMore={t("hero.learnMore")}
      />

      {/* Features Section */}
      <section className="demo-page demo-page-wide py-20">
        <div className="mb-12 text-center">
          <h2 className="demo-title mb-4">{t("features.title")}</h2>
          <p className="demo-muted text-lg">{t("features.subtitle")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="feature-card border border-[var(--border)] transition-all duration-200"
            >
              <CardHeader>
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-[var(--sea-ink)]">
                  {feature.title}
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
      </section>

      {/* Use Cases Section */}
      <section className="demo-page demo-page-wide py-20">
        <div className="mb-12 text-center">
          <h2 className="demo-title mb-4">Perfect For</h2>
          <p className="demo-muted text-lg">
            Various scenarios where terminal recording shines
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="demo-card text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--lagoon)]/20 to-[var(--palm)]/20">
                <useCase.icon className="h-8 w-8 text-[var(--lagoon-deep)]" />
              </div>
              <h3 className="demo-section-title mb-2">{useCase.title}</h3>
              <p className="demo-muted text-sm">{useCase.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Support Section */}
      <section className="demo-page py-20">
        <div className="demo-panel mx-auto max-w-3xl text-center">
          <h2 className="demo-title mb-4">{t("platform.title")}</h2>
          <p className="demo-muted mb-8 text-lg">
            Available for Linux and macOS
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-6 py-4">
              <Terminal className="h-8 w-8 text-[var(--lagoon-deep)]" />
              <span className="text-lg font-bold text-[var(--sea-ink)]">
                {t("platform.linux")}
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--chip-bg)] px-6 py-4">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill="var(--lagoon-deep)"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                />
              </svg>
              <span className="text-lg font-bold text-[var(--sea-ink)]">
                {t("platform.macos")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="demo-page demo-page-wide py-20">
        <div className="mb-12 text-center">
          <h2 className="demo-title mb-4">{t("testimonials.title")}</h2>
          <p className="demo-muted text-lg">{t("testimonials.subtitle")}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="border border-[var(--border)]">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <CardTitle className="text-base text-[var(--sea-ink)]">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-xs">
                      {testimonial.role}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--sea-ink-soft)]">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
