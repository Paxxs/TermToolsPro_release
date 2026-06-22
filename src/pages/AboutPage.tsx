import { useTranslation } from "react-i18next"
import { Heart, Users, Target, Calendar } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function AboutPage() {
  const { t } = useTranslation()

  const timeline = [
    {
      year: "2023",
      title: t("about.timeline.events.2023.title"),
      description: t("about.timeline.events.2023.description"),
    },
    {
      year: "2024",
      title: t("about.timeline.events.2024.title"),
      description: t("about.timeline.events.2024.description"),
    },
    {
      year: "2025",
      title: t("about.timeline.events.2025.title"),
      description: t("about.timeline.events.2025.description"),
    },
    {
      year: "2026",
      title: t("about.timeline.events.2026.title"),
      description: t("about.timeline.events.2026.description"),
    },
  ]

  const team = [
    {
      name: t("about.team.members.creator.name"),
      role: t("about.team.members.creator.role"),
      avatar: "👨‍💻",
      description: t("about.team.members.creator.description"),
    },
    {
      name: t("about.team.members.productFocus.name"),
      role: t("about.team.members.productFocus.role"),
      avatar: "🌟",
      description: t("about.team.members.productFocus.description"),
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="demo-page demo-page-wide py-20">
        <div className="rise-in mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <span className="island-kicker">{t("about.subtitle")}</span>
          </div>
          <h1 className="demo-title mb-6">{t("about.title")}</h1>
          <p className="demo-muted mx-auto max-w-2xl text-lg">
            {t("about.intro")}
          </p>
        </div>
      </section>

      <section className="demo-page demo-page-wide py-20">
        <div className="mx-auto max-w-4xl">
          <Card className="border border-[var(--border)]">
            <CardHeader>
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] text-white">
                <Target className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl text-[var(--sea-ink)]">
                {t("about.mission.title")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-[var(--sea-ink-soft)]">
                {t("about.mission.description")}
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="demo-card text-center">
                  <Heart className="mx-auto mb-3 h-8 w-8 text-[var(--lagoon-deep)]" />
                  <h3 className="demo-section-title mb-1">
                    {t("about.values.developerFirst.title")}
                  </h3>
                  <p className="demo-muted text-xs">
                    {t("about.values.developerFirst.description")}
                  </p>
                </div>
                <div className="demo-card text-center">
                  <Users className="mx-auto mb-3 h-8 w-8 text-[var(--lagoon-deep)]" />
                  <h3 className="demo-section-title mb-1">
                    {t("about.values.practicalWorkflow.title")}
                  </h3>
                  <p className="demo-muted text-xs">
                    {t("about.values.practicalWorkflow.description")}
                  </p>
                </div>
                <div className="demo-card text-center">
                  <Target className="mx-auto mb-3 h-8 w-8 text-[var(--lagoon-deep)]" />
                  <h3 className="demo-section-title mb-1">
                    {t("about.values.qualityFocus.title")}
                  </h3>
                  <p className="demo-muted text-xs">
                    {t("about.values.qualityFocus.description")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="demo-page demo-page-wide py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="demo-title mb-4">{t("about.team.title")}</h2>
            <p className="demo-muted text-lg">{t("about.team.description")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map((member, idx) => (
              <Card key={idx} className="border border-[var(--border)]">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{member.avatar}</div>
                    <div>
                      <CardTitle className="text-xl text-[var(--sea-ink)]">
                        {member.name}
                      </CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--sea-ink-soft)]">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="demo-page demo-page-wide py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="demo-title mb-4">{t("about.timeline.title")}</h2>
            <p className="demo-muted text-lg">
              {t("about.timeline.subtitle")}
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--lagoon)] to-[var(--palm)]" />

            <div className="space-y-12">
              {timeline.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-8 ${
                    idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${idx % 2 === 0 ? "text-right" : "text-left"}`}
                  >
                    <Card className="border border-[var(--border)]">
                      <CardHeader>
                        <CardTitle className="text-lg text-[var(--sea-ink)]">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {event.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-[var(--sea-ink-soft)]">
                          {event.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] text-white shadow-lg">
                    <Calendar className="h-6 w-6" />
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
