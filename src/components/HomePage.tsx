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
import { getLocalizedRoute } from "@/lib/i18n-routing"
import type { Language } from "@/lib/i18n-routing"

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
    featuresTitle:
      "One terminal suite for recording, replay, and privacy protection",
    featuresIntro:
      "TermTools Pro brings TermRecord, ReplayTheTerm, and FakeTerm together in one professional terminal recording platform. Capture SSH sessions, replay command-line workflows, and mask sensitive output without switching between separate tools.",
    downloadPro: "Download TermTools Pro",
    useCasesTitle: "Built for professional terminal workflows",
    useCasesIntro:
      "Advanced workflows where intelligent recording, precise replay, and privacy-aware protection deliver far more value than basic text logs.",
    testimonialsKicker: "Production Ready",
    testimonialsTitle: "Proven in demanding production environments",
    testimonialsIntro:
      "Professional teams rely on TermTools Pro when terminal output demands flawless recording, accurate replay, thorough review, and secure sharing without exposing sensitive data.",
    platformIntro:
      "Available for Linux and macOS as an optimized, single-binary release with zero dependencies.",
    legacyKicker: "Single-function editions",
    legacyTitle: "All three original tools, now in one workflow",
    legacyIntro:
      "TermTools Pro unifies the original TermRecord, ReplayTheTerm, and FakeTerm capabilities into a single integrated terminal toolkit. Instead of maintaining separate single-purpose apps, teams get one zero-dependency binary for terminal recording, precise replay, live privacy masking, SSH session capture, JSON review, and shareable developer documentation.",
    coreFeatures: [
      {
        icon: "video",
        title: "Professional terminal recording",
        description:
          "Create crystal-clear visual records of terminal workflows with industry-leading quality that surpasses basic shell history.",
      },
      {
        icon: "play",
        title: "Intelligent playback engine",
        description:
          "Replay captured sessions with pixel-perfect accuracy, restoring the exact terminal context as it occurred.",
      },
      {
        icon: "eyeOff",
        title: "Real-time privacy protection",
        description:
          "Shield sensitive terminal output instantly with live text replacement, preventing exposure of credentials and confidential data.",
      },
      {
        icon: "server",
        title: "Enterprise server recording",
        description:
          "Configure Linux servers for automatic SSH session capture with comprehensive user and timestamp tracking.",
      },
      {
        icon: "fileText",
        title: "Human-readable YAML config",
        description:
          "Leverage intuitive, maintainable YAML configuration that eliminates fragile setup procedures.",
      },
      {
        icon: "fileJson",
        title: "Portable JSON recordings",
        description:
          "Store recordings as text-based JSON files optimized for seamless inspection, version control, and sharing.",
      },
      {
        icon: "archive",
        title: "Intelligent compression",
        description:
          "Automatically compress replay files with advanced algorithms, ensuring minimal storage footprint without quality loss.",
      },
      {
        icon: "shieldCheck",
        title: "Zero-dependency binary",
        description:
          "Deploy with confidence using a self-contained runtime in a single optimized binary, eliminating environment conflicts.",
      },
    ],
    useCases: [
      {
        title: "Technical documentation excellence",
        description:
          "Transform installations, CLI walkthroughs, and troubleshooting procedures into reusable, high-fidelity visual guides.",
        icon: "terminal",
      },
      {
        title: "Comprehensive bug reporting",
        description:
          "Deliver complete terminal sessions to maintainers, showing exact commands, outputs, and failure points with full context.",
        icon: "code",
      },
      {
        title: "Professional tutorials and demos",
        description:
          "Showcase command-line workflows step-by-step with broadcast-quality, replayable recordings designed for professional distribution.",
        icon: "zap",
      },
    ],
    testimonials: [
      {
        quote:
          "TermTools Pro transformed our installation documentation into production-quality, replayable terminal sessions. Technical reviewers can examine every command, timing detail, and output line with zero ambiguity—no more repeated demo requests.",
        name: "Mia Chen",
        role: "Developer documentation lead",
        initials: "MC",
      },
      {
        quote:
          "For SSH handoff audits, the JSON recordings provide unprecedented clarity—far easier to inspect than screen recordings and infinitely more detailed than raw history files. It's become our standard review format.",
        name: "Noah Reed",
        role: "Platform engineer",
        initials: "NR",
      },
      {
        quote:
          "The live replacement feature is a security game-changer. We can now record customer-facing release walkthroughs with complete confidence, knowing API keys and internal endpoints are masked in real-time.",
        name: "Iris Wang",
        role: "Solutions engineer",
        initials: "IW",
      },
      {
        quote:
          "Bug investigation velocity has skyrocketed. Maintainers receive the complete terminal context—not just pasted command snippets—enabling immediate reproduction and dramatically faster resolution.",
        name: "Leo Martin",
        role: "Technical lead",
        initials: "LM",
      },
      {
        quote:
          "For engineer onboarding, replay files deliver authentic terminal walkthroughs that new team members can explore at their own pace, eliminating the need for senior engineers to repeat live sessions.",
        name: "Ava Brooks",
        role: "Engineering enablement manager",
        initials: "AB",
      },
    ],
    legacyTools: [
      {
        name: "TermRecord",
        description:
          "SSH session capture is now integrated into TermTools Pro, giving teams automated Linux server recording with user and timestamp context inside the same production workflow.",
      },
      {
        name: "ReplayTheTerm",
        description:
          "High-fidelity terminal playback is built into TermTools Pro, so recorded command-line workflows can be reviewed, shared, and replayed without a separate player.",
      },
      {
        name: "FakeTerm",
        description:
          "Real-time text replacement is included in TermTools Pro, helping demos, tutorials, and customer-facing sessions hide credentials and sensitive output as they appear.",
      },
    ],
  },
  zh: {
    featuresKicker: "功能特性",
    featuresTitle: "一个终端套件，兼顾录制、回放与隐私保护",
    featuresIntro:
      "TermTools Pro 将原来的 TermRecord、ReplayTheTerm、FakeTerm 整合为一款完整的终端录制平台。无需在多个工具之间切换，即可完成 SSH 会话捕获、命令行工作流回放与敏感输出实时隐藏。",
    downloadPro: "立即下载 TermTools Pro",
    useCasesTitle: "为专业终端工作流而生",
    useCasesIntro:
      "先进的工作流中，智能录制、精准回放和隐私保护带来的价值远超基础文本日志。",
    testimonialsKicker: "生产就绪",
    testimonialsTitle: "在苛刻的生产环境中久经考验",
    testimonialsIntro:
      "当终端输出需要完美录制、精确回放、全面审查以及在不暴露敏感数据的前提下安全分享时，专业团队信赖 TermTools Pro。",
    platformIntro: "支持 Linux 和 macOS，零依赖的优化单二进制文件发布。",
    legacyKicker: "单功能版本",
    legacyTitle: "三项原子能力，现在合并成一个工作流",
    legacyIntro:
      "TermTools Pro 将 TermRecord、ReplayTheTerm、FakeTerm 的核心能力整合为一款一体化终端工具。一个零依赖二进制文件即可覆盖终端录制、精准回放、实时隐私替换、SSH 会话捕获、JSON 审阅与开发文档分享，让团队获得更完整、更稳定、更高效的生产级工作流。",
    coreFeatures: [
      {
        icon: "video",
        title: "专业终端录制",
        description:
          "创建清晰的终端工作流可视化记录，行业领先的质量远超基础 Shell 历史记录。",
      },
      {
        icon: "play",
        title: "智能回放引擎",
        description: "以像素级精度回放捕获的会话，完美还原当时的终端上下文。",
      },
      {
        icon: "eyeOff",
        title: "实时隐私保护",
        description:
          "通过实时文本替换即时屏蔽敏感终端输出，防止凭证和机密数据泄露。",
      },
      {
        icon: "server",
        title: "企业服务器录制",
        description:
          "为 Linux 服务器配置自动 SSH 会话捕获，提供全面的用户和时间戳跟踪。",
      },
      {
        icon: "fileText",
        title: "人类可读的 YAML 配置",
        description: "利用直观、易维护的 YAML 配置，消除脆弱的设置流程。",
      },
      {
        icon: "fileJson",
        title: "便携式 JSON 录制",
        description:
          "将录制内容存储为基于文本的 JSON 文件，优化检查、版本控制和分享体验。",
      },
      {
        icon: "archive",
        title: "智能压缩",
        description:
          "使用先进算法自动压缩回放文件，确保存储空间最小化且无质量损失。",
      },
      {
        icon: "shieldCheck",
        title: "零依赖二进制",
        description:
          "使用单个优化的自包含运行时二进制文件放心部署，消除环境冲突。",
      },
    ],
    useCases: [
      {
        title: "卓越技术文档",
        description:
          "将安装、CLI 演示和故障排除流程转化为可复用的、高保真可视化指南。",
        icon: "terminal",
      },
      {
        title: "全面问题反馈",
        description:
          "向维护者提供完整的终端会话，展示准确的命令、输出和完整上下文的故障点。",
        icon: "code",
      },
      {
        title: "专业教程与演示",
        description:
          "通过广播级质量、可回放的录制内容，逐步展示命令行工作流，专为专业分发而设计。",
        icon: "zap",
      },
    ],
    testimonials: [
      {
        quote:
          "TermTools Pro 将我们的安装文档转变为生产级、可回放的终端会话。技术审阅者可以检查每个命令、时间细节和输出行，零歧义——再也不需要重复演示。",
        name: "陈明",
        role: "开发者文档负责人",
        initials: "CM",
      },
      {
        quote:
          "在 SSH 交接审计中，JSON 录制文件提供了前所未有的清晰度——比屏幕录制更易检查，比原始历史文件详细得多。它已成为我们的标准审查格式。",
        name: "周诺",
        role: "平台工程师",
        initials: "ZN",
      },
      {
        quote:
          "实时替换功能是安全领域的颠覆性创新。我们现在可以完全自信地录制面向客户的发布演示，确信 API 密钥和内部端点实时被屏蔽。",
        name: "王以然",
        role: "解决方案工程师",
        initials: "WY",
      },
      {
        quote:
          "问题调查速度飙升。维护者收到完整的终端上下文——不只是粘贴的命令片段——实现即时重现和大幅更快的解决方案。",
        name: "李默",
        role: "技术负责人",
        initials: "LM",
      },
      {
        quote:
          "在工程师入职培训中，回放文件提供真实的终端演示，新团队成员可以按自己的节奏探索，消除了资深工程师重复现场会话的需要。",
        name: "许安",
        role: "工程效能负责人",
        initials: "XA",
      },
    ],
    legacyTools: [
      {
        name: "TermRecord",
        description:
          "SSH 会话捕获已集成至 TermTools Pro，可在同一生产级工作流中完成 Linux 服务器自动录制、用户信息与时间戳记录。",
      },
      {
        name: "ReplayTheTerm",
        description:
          "高保真终端回放已内置于 TermTools Pro，录制后的命令行工作流无需独立播放器即可审阅、分享与复现。",
      },
      {
        name: "FakeTerm",
        description:
          "实时文本替换已纳入 TermTools Pro，可在演示、教程和客户交付场景中即时隐藏凭证、密钥与敏感输出。",
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
  const language: Language = i18n.resolvedLanguage === "zh" ? "zh" : "en"
  const copy = language === "zh" ? homeCopy.zh : homeCopy.en
  const downloadHref = getLocalizedRoute("/download", language)

  return (
    <div className="min-h-screen">
      <HomeHero
        subtitle={t("hero.subtitle")}
        title={t("hero.title")}
        description={t("hero.description")}
        getStarted={t("hero.getStarted")}
        learnMore={t("hero.learnMore")}
        getStartedHref={downloadHref}
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
            <a href={downloadHref}>
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
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
