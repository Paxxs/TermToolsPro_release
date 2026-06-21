import { ChevronRight } from "lucide-react"

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider"
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur"
import { Button } from "@/components/ui/button"

type HomeHeroProps = {
  subtitle?: string
  title?: string
  description?: string
  getStarted?: string
  learnMore?: string
  getStartedHref?: string
  learnMoreHref?: string
}

const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"

const highlights = [
  "Production Ready",
  "Intelligent Replay",
  "Privacy Protection",
  "Enterprise Grade",
  "Zero Dependencies",
  "Advanced Export",
  "Professional Quality",
  "Optimized Performance",
]

export function HomeHero({
  subtitle = "Professional Terminal Recording Platform",
  title = "TermTools Pro",
  description = "Enterprise-grade terminal recording, intelligent playback, and privacy protection unified in one production-ready platform",
  getStarted = "Get Started",
  learnMore = "Learn More",
  getStartedHref,
  learnMoreHref,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-x-hidden border-b border-border">
      <div className="relative">
        <div className="relative z-10 flex aspect-2/3 flex-col justify-end px-6 lg:aspect-video lg:px-12">
          <div className="mx-auto w-full max-w-7xl pb-6 lg:pb-32">
            <div className="rise-in max-w-lg">
              <span className="mb-5 inline-flex rounded-full border border-border bg-muted px-4 py-2 text-xs font-semibold text-muted-foreground uppercase">
                {subtitle}
              </span>
              <h1 className="text-5xl leading-none font-black text-balance md:text-6xl xl:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-balance text-muted-foreground sm:text-xl">
                {description}
              </p>

              <div className="mt-8 flex items-center gap-2">
                <Button
                  asChild={Boolean(getStartedHref)}
                  size="lg"
                  className="h-12 rounded-full pr-3 pl-5 text-base"
                >
                  {getStartedHref ? (
                    <a href={getStartedHref}>
                      <span className="text-nowrap">{getStarted}</span>
                      <ChevronRight className="ml-1" />
                    </a>
                  ) : (
                    <>
                      <span className="text-nowrap">{getStarted}</span>
                      <ChevronRight className="ml-1" />
                    </>
                  )}
                </Button>
                <Button
                  asChild={Boolean(learnMoreHref)}
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5"
                >
                  {learnMoreHref ? (
                    <a href={learnMoreHref}>
                      <span className="text-nowrap">{learnMore}</span>
                    </a>
                  ) : (
                    <span className="text-nowrap">{learnMore}</span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-1 aspect-2/3 overflow-hidden rounded-3xl border border-black/10 lg:aspect-video lg:rounded-[3rem] dark:border-white/5">
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            className="not-dark:invert size-full -scale-x-100 object-cover"
            src={HERO_VIDEO_SRC}
          />
        </div>
      </div>

      <section className="bg-background py-6">
        <div className="group relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-sm font-medium text-muted-foreground md:text-end">
                Professional terminal technology
              </p>
            </div>
            <div className="relative py-4 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                {highlights.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-semibold text-foreground/75"
                  >
                    {item}
                  </span>
                ))}
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-background" />
              <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-background" />
              <ProgressiveBlur
                className="pointer-events-none absolute top-0 left-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute top-0 right-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 mx-auto -mt-6 max-w-7xl px-6 pb-12">
        <div className="demo-panel max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-3 rounded-full bg-red-400" />
              <span className="size-3 rounded-full bg-yellow-400" />
              <span className="size-3 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-semibold text-[var(--sea-ink-soft)]">
              terminal ~ bash
            </span>
          </div>
          <div className="demo-code-block font-mono text-sm">
            <div className="text-[var(--lagoon)]">
              $ termtools record my-session
            </div>
            <div className="mt-1 text-[var(--sea-ink-soft)]">
              ● Recording started... Press Ctrl+D to stop
            </div>
            <div className="mt-4">
              <span className="text-[var(--palm)]">
                $ npm install termtools
              </span>
            </div>
            <div className="mt-1 text-[var(--sea-ink-soft)]">
              ✓ Installation complete
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
