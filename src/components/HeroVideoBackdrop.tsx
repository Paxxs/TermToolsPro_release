const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"

export function HeroVideoBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-none border-y border-black/10 dark:border-white/10"
    >
      <video
        data-testid="hero-video-backdrop"
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        className="size-full -scale-x-100 object-cover opacity-55 mix-blend-luminosity invert dark:opacity-35 dark:invert-0"
        src={HERO_VIDEO_SRC}
      />
      <div className="absolute inset-0 bg-background/70 dark:bg-background/78" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent_0%,var(--background)_72%)]" />
    </div>
  )
}
