import { ChevronRight, Download } from "lucide-react"

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
  "Record",
  "Replay",
  "Export",
  "Themes",
  "Docs",
  "Bug reports",
  "Tutorials",
  "Demos",
]

export function HomeHero({
  subtitle = "Powerful Terminal Recorder",
  title = "TermTools Pro",
  description = "Professional terminal recording and playback tool for developers",
  getStarted = "Get Started",
  learnMore = "Learn More",
  getStartedHref,
  learnMoreHref,
}: HomeHeroProps) {
  return (
    <section className="relative overflow-x-hidden border-b border-border">
      <div className="relative">
        <div className="relative z-10 flex min-h-[calc(100svh-4rem)] flex-col justify-end px-6 pt-24 pb-8 sm:min-h-[660px] lg:aspect-video lg:min-h-[720px] lg:px-12 lg:pb-24">
          <div className="mx-auto w-full max-w-7xl">
            <div className="rise-in max-w-2xl">
              <span className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 uppercase backdrop-blur-md">
                {subtitle}
              </span>
              <h1 className="text-5xl leading-none font-black text-balance text-white sm:text-6xl xl:text-7xl">
                {title}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-balance text-white/76 sm:text-xl">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button
                  asChild={Boolean(getStartedHref)}
                  size="lg"
                  className="h-12 rounded-full px-5 text-base"
                >
                  {getStartedHref ? (
                    <a href={getStartedHref}>
                      <Download data-icon="inline-start" />
                      <span className="text-nowrap">{getStarted}</span>
                    </a>
                  ) : (
                    <>
                      <Download data-icon="inline-start" />
                      <span className="text-nowrap">{getStarted}</span>
                    </>
                  )}
                </Button>
                <Button
                  asChild={Boolean(learnMoreHref)}
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full border border-white/18 bg-black/18 px-5 text-base text-white shadow-sm backdrop-blur-sm hover:bg-black/28 hover:text-white"
                >
                  {learnMoreHref ? (
                    <a href={learnMoreHref}>
                      <span className="text-nowrap">{learnMore}</span>
                      <ChevronRight data-icon="inline-end" />
                    </a>
                  ) : (
                    <>
                      <span className="text-nowrap">{learnMore}</span>
                      <ChevronRight data-icon="inline-end" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-1 overflow-hidden rounded-3xl border border-black/10 lg:rounded-[3rem] dark:border-white/5">
          <video
            aria-hidden="true"
            autoPlay
            loop
            muted
            playsInline
            className="size-full -scale-x-100 object-cover"
            src={HERO_VIDEO_SRC}
          />
          <div className="absolute inset-0 bg-black/36" />
          <div className="absolute inset-0 bg-linear-to-r from-black/76 via-black/22 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
        </div>
      </div>

      <section className="bg-background py-6">
        <div className="group relative mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-sm font-medium text-muted-foreground md:text-end">
                Built for terminal work
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
