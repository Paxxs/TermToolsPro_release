export const translations = {
  en: {
    nav: {
      features: "Features",
      download: "Download",
      about: "About",
    },
    hero: {
      title: "TermTools Pro",
      subtitle: "Powerful Terminal Recorder",
      description:
        "Professional terminal recording and playback tool for developers",
      getStarted: "Get Started",
      learnMore: "Learn More",
    },
    features: {
      title: "Features",
      subtitle: "Everything you need for terminal recording",
      record: {
        title: "Easy Recording",
        description: "One-click terminal recording with high-quality output",
      },
      replay: {
        title: "Smart Replay",
        description: "Intelligent playback with speed control and editing",
      },
      export: {
        title: "Multiple Formats",
        description: "Export to GIF, MP4, or asciicast formats",
      },
      themes: {
        title: "Custom Themes",
        description: "Beautiful color schemes and customizable appearance",
      },
    },
    platform: {
      title: "Platform Support",
      linux: "Linux",
      macos: "macOS",
    },
    testimonials: {
      title: "What Users Say",
      subtitle: "Trusted by developers worldwide",
      users: {
        alex: {
          name: "Alex Chen",
          role: "DevOps Engineer",
          content: "TermTools has streamlined our documentation process. Recording terminal sessions has never been easier.",
        },
        sarah: {
          name: "Sarah Martinez",
          role: "Technical Writer",
          content: "The export quality is exceptional. Perfect for creating professional documentation and tutorials.",
        },
        michael: {
          name: "Michael Kim",
          role: "Software Engineer",
          content: "Best tool for capturing terminal workflows. The replay feature is a game-changer.",
        },
      },
    },
    download: {
      title: "Download",
      subtitle: "Get TermTools for your platform",
      latest: "Latest Release",
      install: "Installation",
    },
    about: {
      title: "About TermTools",
      subtitle: "Mission and Team",
      mission: {
        title: "Our Mission",
        description:
          "Created to make terminal recording and sharing easier for developers worldwide.",
      },
      team: {
        title: "Team",
        description: "Built and maintained by passionate developers",
      },
      timeline: {
        title: "Timeline",
      },
    },
    footer: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      license: "License",
      disclaimer: "Disclaimer",
    },
    legal: {
      terms: {
        title: "Terms of Service",
        content: "Terms of service content...",
      },
      privacy: {
        title: "Privacy Policy",
        content: "Privacy policy content...",
      },
      license: {
        title: "Open Source License",
        content: "License information...",
      },
      disclaimer: {
        title: "Disclaimer",
        content: "Disclaimer content...",
      },
    },
  },
  zh: {
    nav: {
      features: "功能特性",
      download: "下载",
      about: "关于",
    },
    hero: {
      title: "TermTools Pro",
      subtitle: "强大的终端录制器",
      description: "为开发者打造的专业终端录制与回放工具",
      getStarted: "立即开始",
      learnMore: "了解更多",
    },
    features: {
      title: "功能特性",
      subtitle: "终端录制所需的一切功能",
      record: {
        title: "轻松录制",
        description: "一键录制终端，输出高质量内容",
      },
      replay: {
        title: "智能回放",
        description: "智能播放控制，支持速度调节和编辑",
      },
      export: {
        title: "多格式导出",
        description: "支持导出为 GIF、MP4 或 asciicast 格式",
      },
      themes: {
        title: "自定义主题",
        description: "精美的配色方案和可定制的外观",
      },
    },
    platform: {
      title: "平台支持",
      linux: "Linux",
      macos: "macOS",
    },
    testimonials: {
      title: "用户评价",
      subtitle: "深受全球开发者信赖",
      users: {
        alex: {
          name: "Alex Chen",
          role: "DevOps 工程师",
          content: "TermTools 简化了我们的文档流程。录制终端会话从未如此简单。",
        },
        sarah: {
          name: "Sarah Martinez",
          role: "技术文档工程师",
          content: "导出质量非常出色。非常适合创建专业文档和教程。",
        },
        michael: {
          name: "Michael Kim",
          role: "软件工程师",
          content: "捕获终端工作流程的最佳工具。回放功能改变了游戏规则。",
        },
      },
    },
    download: {
      title: "下载",
      subtitle: "获取适合您平台的 TermTools",
      latest: "最新版本",
      install: "安装说明",
    },
    about: {
      title: "关于 TermTools",
      subtitle: "使命与团队",
      mission: {
        title: "我们的使命",
        description: "致力于让全球开发者更轻松地录制和分享终端操作。",
      },
      team: {
        title: "团队",
        description: "由充满热情的开发者构建和维护",
      },
      timeline: {
        title: "发展历程",
      },
    },
    footer: {
      terms: "用户服务协议",
      privacy: "隐私政策",
      license: "开源许可",
      disclaimer: "免责声明",
    },
    legal: {
      terms: {
        title: "用户服务协议",
        content: "服务条款内容...",
      },
      privacy: {
        title: "隐私政策",
        content: "隐私政策内容...",
      },
      license: {
        title: "开源许可协议",
        content: "许可证信息...",
      },
      disclaimer: {
        title: "免责声明",
        content: "免责声明内容...",
      },
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.en
