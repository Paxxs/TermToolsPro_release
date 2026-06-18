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
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
const MORFANS_URL = "https://www.morfans.cn"

const iconMap = {
  archive: Archive,
  code: Code,
  eyeOff: EyeOff,
  fileJson: FileJson,
  fileText: FileText,
  play: Play,
  server: Server,
  shieldCheck: ShieldCheck,
  terminal: Terminal,
  video: Video,
  zap: Zap,
} as const

const homeCopy = {
  en: {
    featuresKicker: "Features",
    featuresTitle: "Core capabilities at a glance",
    featuresIntro:
      "TermRecord, ReplayTheTerm, and FakeTerm have merged into TermTools Pro. The new app brings recording, playback, and replacement together so the old single-purpose tools can work as one stable workflow.",
    downloadPro: "Download TermTools Pro",
    useCasesTitle: "Perfect for terminal work",
    useCasesIntro:
      "Practical workflows where recording, replay, and privacy-aware replacement help more than a plain text log.",
    testimonialsKicker: "User feedback",
    testimonialsTitle: "Trusted in real terminal work",
    testimonialsIntro:
      "Teams use TermTools Pro when the terminal output needs to be recorded, replayed, reviewed, and shared without exposing sensitive details.",
    platformIntro:
      "Available for Linux and macOS as a portable, single-binary release.",
    legacyKicker: "Legacy tools",
    legacyTitle: "Still want the single-purpose versions?",
    legacyIntro:
      "We still keep them available for focused use. TermTools Pro is the recommended version because it combines multiple functions into one more stable workflow.",
    releaseKicker: "Release",
    releaseTitle: "Try version 1.0.2",
    releaseIntro:
      "Start with the latest TermTools Pro release, or contact the author if you need help choosing between the combined app and a single-purpose edition.",
    releaseAction: "Download v1.0.2",
    contactAction: "Contact author",
    authorLine: "Originally by SuperPaxxs for AppPro.DEV.",
    morfansAction: "MorFans Dev",
    coreFeatures: [
      {
        icon: "video",
        title: "Terminal tutorial recording",
        description:
          "Create a visual record of terminal lessons and workflows that is clearer than shell history.",
      },
      {
        icon: "play",
        title: "Recording playback",
        description:
          "Replay captured sessions and restore the terminal scene as it happened.",
      },
      {
        icon: "eyeOff",
        title: "Live text replacement",
        description:
          "Replace sensitive terminal output in real time to avoid exposing secrets or private text.",
      },
      {
        icon: "server",
        title: "Server operation recording",
        description:
          "Configure Linux servers to automatically record SSH sessions by user and timestamp.",
      },
      {
        icon: "fileText",
        title: "Readable YAML config",
        description:
          "Use concise, human-readable YAML configuration instead of brittle setup steps.",
      },
      {
        icon: "fileJson",
        title: "Shareable JSON recordings",
        description:
          "Keep recordings as text-friendly JSON files that are easy to inspect and share.",
      },
      {
        icon: "archive",
        title: "Automatic replay compression",
        description:
          "Compress replay files automatically so captured sessions stay small and portable.",
      },
      {
        icon: "shieldCheck",
        title: "Single binary file",
        description:
          "Ship with its own runtime in one binary, reducing environment and dependency issues.",
      },
    ],
    useCases: [
      {
        title: "Developer documentation",
        description:
          "Record installs, CLI walkthroughs, and troubleshooting flows as reusable visual guides.",
        icon: "terminal",
      },
      {
        title: "Bug reports",
        description:
          "Capture terminal sessions so maintainers can see the exact commands and output.",
        icon: "code",
      },
      {
        title: "Tutorials and demos",
        description:
          "Show command-line workflows step by step with replayable, shareable recordings.",
        icon: "zap",
      },
    ],
    testimonials: [
      {
        quote:
          "TermTools Pro turned our install docs into replayable terminal sessions. Reviewers can see every command, every pause, and every output line without asking us to re-run the demo.",
        name: "Mia Chen",
        role: "Developer documentation lead",
        initials: "MC",
      },
      {
        quote:
          "For SSH handoff reviews, the JSON recordings are easier to inspect than a screen share and much clearer than raw history files.",
        name: "Noah Reed",
        role: "Platform engineer",
        initials: "NR",
      },
      {
        quote:
          "The live replacement mode keeps secrets from leaking while we record release walkthroughs for customers.",
        name: "Iris Wang",
        role: "Solutions engineer",
        initials: "IW",
      },
      {
        quote:
          "Bug reports are faster now because maintainers receive the exact terminal flow instead of a pasted command list.",
        name: "Leo Martin",
        role: "Open-source maintainer",
        initials: "LM",
      },
    ],
    legacyTools: [
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
    ],
  },
  zh: {
    featuresKicker: "功能特性",
    featuresTitle: "各个特性，一眼秒懂",
    featuresIntro:
      "TermRecord、ReplayTheTerm、FakeTerm 现已强强合体。全新 TermTools Pro 功能翻倍，集成录制、回放、替换三大主要功能，让旧版三个应用程式的能力一起稳定工作。",
    downloadPro: "立即下载",
    useCasesTitle: "适合这些终端工作",
    useCasesIntro:
      "当纯文本日志不够直观时，用录制、回放和隐私替换把终端现场讲清楚。",
    testimonialsKicker: "用户评价",
    testimonialsTitle: "真实终端工作中的用户反馈",
    testimonialsIntro:
      "当终端输出需要被录制、回放、复盘和安全分享时，TermTools Pro 能让团队少解释，多还原现场。",
    platformIntro: "支持 Linux 和 macOS，以单二进制文件发布，自带运行时。",
    legacyKicker: "单功能版本",
    legacyTitle: "仍然想用单功能版本？",
    legacyIntro:
      "不用担心，我们也为你拆开了！但我们更推荐使用 TermTools Pro，它能结合多个功能一块更稳定运行。",
    releaseKicker: "发布版本",
    releaseTitle: "体验 1.0.2 版本",
    releaseIntro:
      "从最新 TermTools Pro 版本开始；如果你还在全功能版和单功能版之间犹豫，也可以直接联系作者。",
    releaseAction: "下载 v1.0.2",
    contactAction: "联系作者",
    authorLine: "由 SuperPaxxs 为 AppPro.DEV 原创制作。",
    morfansAction: "MorFans Dev",
    coreFeatures: [
      {
        icon: "video",
        title: "终端教学录制",
        description:
          "比 History 命令更可视，能把终端教学和工作流程直接记录下来。",
      },
      {
        icon: "play",
        title: "播放录制文件",
        description: "身临其境复原终端当时场景，方便复盘、演示和分享。",
      },
      {
        icon: "eyeOff",
        title: "实时文本替换",
        description: "避免暴露隐私机密文本，在终端显示时实时替换敏感内容。",
      },
      {
        icon: "server",
        title: "服务器操作录制",
        description:
          "在 Linux 服务器上配置后，可自动录制 SSH 会话并按用户名和时间存档。",
      },
      {
        icon: "fileText",
        title: "YAML 简约配置",
        description: "使用人类可读的配置文件，减少环境和配置负担。",
      },
      {
        icon: "fileJson",
        title: "JSON 文件易分享",
        description: "录制文件可直接以文本方式分享，方便审阅与传递。",
      },
      {
        icon: "archive",
        title: "回放体积自动压缩",
        description: "自动压缩回放文件体积，让录制内容更小、更便携。",
      },
      {
        icon: "shieldCheck",
        title: "单二进制文件",
        description: "无需担心环境问题，自带运行时，下载后即可使用。",
      },
    ],
    useCases: [
      {
        title: "开发者文档",
        description: "记录安装、CLI 演示和排障流程，沉淀成可复用的可视化指南。",
        icon: "terminal",
      },
      {
        title: "问题反馈",
        description: "捕获终端会话，让维护者看到真实命令、输出和复现过程。",
        icon: "code",
      },
      {
        title: "教程与演示",
        description: "用可回放、可分享的录制内容逐步展示命令行工作流。",
        icon: "zap",
      },
    ],
    testimonials: [
      {
        quote:
          "TermTools Pro 把安装文档变成了可回放的终端现场，评审能看到每条命令、停顿和输出，不用我们反复重跑演示。",
        name: "陈明",
        role: "开发者文档负责人",
        initials: "CM",
      },
      {
        quote:
          "做 SSH 交接复盘时，JSON 录制文件比屏幕共享更容易检查，也比纯 history 清楚得多。",
        name: "周诺",
        role: "平台工程师",
        initials: "ZN",
      },
      {
        quote:
          "给客户录制发布演示时，实时替换可以隐藏临时 token 和内部地址，分享起来安心很多。",
        name: "王以然",
        role: "解决方案工程师",
        initials: "WY",
      },
      {
        quote:
          "现在提 Bug 不用贴一堆命令列表，维护者直接拿到完整终端流程，复现速度快了很多。",
        name: "李默",
        role: "开源维护者",
        initials: "LM",
      },
    ],
    legacyTools: [
      {
        name: "TermRecord",
        description:
          "如果你想记录所有 SSH 会话历史，可通过配置 Linux 服务器自动录制所有 SSH 会话，并按用户名和时间保存。",
        action: "下载 TermRecord",
      },
      {
        name: "ReplayTheTerm",
        description: "演示命令行终端的最佳方式，适合只需要聚焦回放的场景。",
        action: "下载 ReplayTheTerm",
      },
      {
        name: "FakeTerm",
        description:
          "眼见不一定为真，实时替换终端显示文本，巧妙干扰显示来隐藏机密信息。",
        action: "下载 FakeTerm",
      },
    ],
  },
} as const

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
}

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial
  featured?: boolean
}) {
  return (
    <Card
      className={
        featured
          ? "grid grid-rows-[auto_1fr] gap-8 border-none bg-muted shadow-none sm:col-span-2 sm:p-6 lg:row-span-2"
          : "border-none bg-muted shadow-none"
      }
    >
      {featured ? (
        <CardHeader>
          <div className="inline-flex w-fit rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
            TermTools Pro
          </div>
        </CardHeader>
      ) : null}
      <CardContent className={featured ? "" : "h-full pt-6"}>
        <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
          <p
            className={
              featured
                ? "text-xl font-medium text-foreground"
                : "font-medium text-foreground"
            }
          >
            {testimonial.quote}
          </p>

          <div className="grid grid-cols-[auto_1fr] items-center gap-3">
            <Avatar size="lg">
              <AvatarFallback>{testimonial.initials}</AvatarFallback>
            </Avatar>
            <div>
              <cite className="text-sm font-medium not-italic">
                {testimonial.name}
              </cite>
              <span className="block text-sm text-muted-foreground">
                {testimonial.role}
              </span>
            </div>
          </div>
        </blockquote>
      </CardContent>
    </Card>
  )
}

export function HomePage() {
  const { i18n, t } = useTranslation()
  const copy = i18n.resolvedLanguage === "zh" ? homeCopy.zh : homeCopy.en

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
          <span className="island-kicker">{copy.featuresKicker}</span>
          <h2 className="demo-title mt-3 mb-4">{copy.featuresTitle}</h2>
          <p className="demo-muted mx-auto max-w-3xl text-lg">
            {copy.featuresIntro}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {copy.coreFeatures.map((feature) => {
            const Icon = iconMap[feature.icon]

            return (
              <Card
                key={feature.title}
                className="feature-card border border-[var(--border)] transition-all duration-200"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon aria-hidden="true" />
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
            )
          })}
        </div>
        <div className="mt-10 text-center">
          <Button asChild className="rounded-full">
            <a href={RELEASE_URL}>
              <Download data-icon="inline-start" />
              {copy.downloadPro}
            </a>
          </Button>
        </div>
      </section>

      <section className="demo-page demo-page-wide py-20">
        <div className="mb-12 text-center">
          <h2 className="demo-title mb-4">{copy.useCasesTitle}</h2>
          <p className="demo-muted mx-auto max-w-2xl text-lg">
            {copy.useCasesIntro}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {copy.useCases.map((useCase) => {
            const Icon = iconMap[useCase.icon]

            return (
              <div key={useCase.title} className="demo-card text-center">
                <div className="mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-secondary">
                  <Icon
                    aria-hidden="true"
                    className="text-[var(--lagoon-deep)]"
                  />
                </div>
                <h3 className="demo-section-title mb-2">{useCase.title}</h3>
                <p className="demo-muted text-sm">{useCase.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-16 md:py-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:gap-16">
          <div className="relative z-10 mx-auto flex max-w-xl flex-col gap-4 text-center">
            <span className="island-kicker">{copy.testimonialsKicker}</span>
            <h2 className="demo-title">{copy.testimonialsTitle}</h2>
            <p className="demo-muted text-lg">{copy.testimonialsIntro}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            {copy.testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="demo-page py-20">
        <div className="demo-panel mx-auto max-w-3xl text-center">
          <h2 className="demo-title mb-4">{t("platform.title")}</h2>
          <p className="demo-muted mb-8 text-lg">{copy.platformIntro}</p>
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
          <span className="island-kicker">{copy.legacyKicker}</span>
          <h2 id="legacy-tools-heading" className="demo-title mt-3 mb-4">
            {copy.legacyTitle}
          </h2>
          <p className="demo-muted mx-auto max-w-3xl text-lg">
            {copy.legacyIntro}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.legacyTools.map((tool) => (
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
          <span className="island-kicker">{copy.releaseKicker}</span>
          <h2 className="demo-title mt-3 mb-4">{copy.releaseTitle}</h2>
          <p className="demo-muted mx-auto mb-8 max-w-2xl text-lg">
            {copy.releaseIntro}
          </p>
          <p className="demo-muted mx-auto mb-6 max-w-2xl text-sm">
            {copy.authorLine}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-full">
              <a href={LATEST_RELEASE_URL}>
                <Download data-icon="inline-start" />
                {copy.releaseAction}
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <a href={CONTACT_URL}>{copy.contactAction}</a>
            </Button>
            <Button asChild variant="ghost" className="rounded-full">
              <a href={MORFANS_URL}>{copy.morfansAction}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
