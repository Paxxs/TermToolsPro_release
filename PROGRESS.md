# TermTools 官网项目进度跟踪

## 项目目标
创建一个完整的 TanStack 项目作为 TermTools 的新官网，支持中英文双语。

## 技术栈要求
- TanStack Router/Start ✅
- TypeScript + ESLint ✅
- Prettier 代码格式化 ✅
- shadcn/ui + Tailwind CSS ✅
- Bun 作为包管理器 ✅
- 支持静态站点生成（GitHub Pages） ✅

## 功能需求

### 导航栏
- [x] 亮色/深色模式切换 ✅
- [x] 语言切换（中文/英文） ✅

### 页面模块

#### Features 页面
- [x] 首屏 Hero 区 ✅
- [x] 核心功能概览区 ✅
- [x] 适用场景区块 ✅
- [x] 平台支持展示（Linux、MacOS） ✅
- [x] 用户真实反馈 ✅

#### Download 页面
- [x] 下载链接 ✅
- [x] 安装说明 ✅

#### About 页面
- [x] 项目介绍：开发初衷 ✅
- [x] 开发团队/维护者介绍 ✅
- [x] 项目发展历程时间线 ✅

#### 法律页面（独立分页）
- [x] 用户服务协议 ✅
- [x] 隐私政策 ✅
- [x] 开源许可协议说明 ✅
- [x] 免责声明 ✅

## 进度记录

### 2026-06-17

#### 阶段 1: 项目初始化 ✅
- [x] 获取原始首页内容分析
- [x] 初始化 TanStack Start 项目
- [x] 配置 Bun 包管理器
- [x] 配置 TypeScript
- [x] 配置 ESLint
- [x] 配置 Prettier
- [x] 安装 Tailwind CSS
- [x] 安装并配置 shadcn/ui

#### 阶段 2: 核心功能实现 ✅
- [x] 实现主题切换功能
- [x] 实现国际化系统
- [x] 创建基础布局组件
- [x] 创建导航栏组件

#### 阶段 3: 页面开发 ✅
- [x] Features 页面（首页）
  - Hero 区域带终端预览
  - 4个核心功能卡片（录制、回放、导出、主题）
  - 3个使用场景展示
  - 平台支持（Linux、macOS）
  - 用户评价展示
- [x] Download 页面
  - 平台特定下载选项
  - 安装步骤说明
  - 包管理器快速安装命令
- [x] About 页面
  - 项目使命
  - 团队介绍
  - 发展历程时间线
- [x] 法律页面（4个独立页面）
  - `/legal/terms` - 用户服务协议
  - `/legal/privacy` - 隐私政策
  - `/legal/license` - MIT 开源许可
  - `/legal/disclaimer` - 免责声明

#### 阶段 4: 优化与部署 ✅
- [x] 配置静态站点生成
- [x] 测试构建产物
- [x] 配置 GitHub Pages 部署
- [x] 代码格式化

## 当前状态
**阶段**: 4 - 完成 ✅
**状态**: 项目已完成构建，可以部署

## 项目结构

```
termtools-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自动部署
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn 组件
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── dropdown-menu.tsx
│   │   ├── Header.tsx          # 导航栏（主题+语言切换）
│   │   └── Footer.tsx          # 页脚（法律链接）
│   ├── hooks/
│   │   └── use-theme.tsx       # 主题切换 hook
│   ├── lib/
│   │   ├── i18n.ts            # 国际化翻译
│   │   ├── i18n-config.ts     # i18n 配置
│   │   └── utils.ts           # 工具函数
│   ├── routes/
│   │   ├── __root.tsx         # 根路由
│   │   ├── index.tsx          # Features 首页
│   │   ├── download.tsx       # Download 页面
│   │   ├── about.tsx          # About 页面
│   │   └── legal/             # 法律页面
│   │       ├── terms.tsx
│   │       ├── privacy.tsx
│   │       ├── license.tsx
│   │       └── disclaimer.tsx
│   └── styles.css             # 全局样式（含 shadcn 变量）
├── app.config.ts              # 预渲染配置
├── components.json            # shadcn 配置
├── package.json               # Bun 包管理器
├── .prettierrc                # Prettier 配置
├── eslint.config.js           # ESLint 配置
└── vite.config.ts             # Vite 配置
```

## 技术实现细节

### 国际化 (i18n)
- 使用 `react-i18next`
- 支持中文和英文
- 所有页面文本都已翻译
- 导航栏语言切换器

### 主题系统
- 亮色/深色模式自动切换
- localStorage 持久化
- 遵循系统偏好设置
- shadcn/ui 设计令牌集成

### 路由
- 7个预渲染路由
- 类型安全的路由系统
- 文件系统路由
- 支持静态导出

### UI 组件
- shadcn/ui 组件库
- Tailwind CSS v4
- 响应式设计
- 自定义 CSS 变量配色

## 构建与部署

### 本地开发
```bash
bun install
bun run dev
```

### 构建
```bash
bun run build
```

### 预览
```bash
bun run preview
```

### 部署到 GitHub Pages
1. 推送代码到 main 分支
2. GitHub Actions 自动构建和部署
3. 访问 `https://<username>.github.io/<repo-name>`

## 关键决策记录
- 使用 TanStack Start 而非单纯的 TanStack Router，因为需要静态站点生成能力
- Bun 作为运行时和包管理器
- shadcn/ui 作为 UI 组件库，遵守其设计系统配色
- 所有路由预渲染为静态 HTML，确保 SEO 友好
- 使用 CSS 变量而非硬编码颜色，确保主题切换流畅

## 已实现的所有功能
✅ 完整的国际化支持（中英文）
✅ 主题切换（亮色/深色模式）
✅ 响应式设计（移动端友好）
✅ 7个页面全部实现
✅ shadcn/ui 设计系统
✅ TypeScript 严格类型检查
✅ ESLint + Prettier 代码质量保证
✅ 静态站点生成
✅ GitHub Pages 自动部署
✅ 优化的构建输出（代码分割、压缩）

## 下一步（可选优化）
- [ ] 添加页面加载动画
- [ ] 添加更多自定义插图
- [ ] SEO 优化（meta 标签）
- [ ] 添加 sitemap.xml
- [ ] 性能优化（懒加载图片）
- [ ] 添加单元测试
- [ ] 添加 E2E 测试
