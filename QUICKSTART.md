# TermTools Pro 官网 - 快速启动指南

## 🎉 项目已完成！

所有功能已实现并测试通过。项目位于：`termtools-web/` 目录。

## 📦 快速开始

### 1. 进入项目目录
```bash
cd termtools-web
```

### 2. 安装依赖
```bash
bun install
```

### 3. 启动开发服务器
```bash
bun run dev
```

访问：http://localhost:3000

## 🏗️ 构建与部署

### 本地构建
```bash
bun run build
```

构建产物在 `dist/client/` 目录

### 预览构建产物
```bash
bun run preview
```

### 部署到 GitHub Pages

#### 方式一：自动部署（推荐）
1. 将代码推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 推送到 main 分支，GitHub Actions 会自动构建和部署

#### 方式二：手动部署
```bash
# 构建
bun run build

# 将 dist/client 目录部署到 gh-pages 分支
# 或上传到任何静态托管服务
```

## 📝 可用命令

```bash
bun run dev              # 启动开发服务器
bun run build            # 构建生产版本
bun run preview          # 预览构建产物
bun run format           # 格式化代码
bun run format:check     # 检查代码格式
bun run lint             # 运行 ESLint
bun run generate-routes  # 生成路由类型
bun run test             # 运行测试
```

## 🌐 查看所有页面

开发服务器运行后，访问以下页面：

- **首页（Features）**: http://localhost:3000/
- **下载页面**: http://localhost:3000/download
- **关于页面**: http://localhost:3000/about
- **服务条款**: http://localhost:3000/legal/terms
- **隐私政策**: http://localhost:3000/legal/privacy
- **开源许可**: http://localhost:3000/legal/license
- **免责声明**: http://localhost:3000/legal/disclaimer

## 🎨 测试功能

### 主题切换
点击右上角的太阳/月亮图标切换亮色/深色模式

### 语言切换
点击右上角的地球图标，选择中文或英文

## 📄 项目文档

- **README.md** - 完整的项目文档
- **PROGRESS.md** - 详细的开发进度
- **PROJECT_SUMMARY.md** - 项目完成总结

## ✅ 已完成的功能

- ✅ 完整的国际化（中英文）
- ✅ 主题切换（亮色/深色）
- ✅ 7个页面全部实现
- ✅ 响应式设计
- ✅ TypeScript 类型安全
- ✅ ESLint + Prettier
- ✅ 静态站点生成
- ✅ GitHub Pages 自动部署配置

## 🚀 下一步

1. **测试网站** - 在浏览器中查看所有页面
2. **自定义内容** - 根据需要修改文本和样式
3. **部署** - 推送到 GitHub 触发自动部署

## 💡 提示

- 所有翻译在 `src/lib/i18n.ts`
- 颜色变量在 `src/styles.css`
- 新增页面在 `src/routes/` 目录
- shadcn 组件在 `src/components/ui/`

## 🎯 项目特点

- **快速** - Vite + Bun，极速开发体验
- **现代** - 最新的 React 19 + TanStack Start
- **美观** - shadcn/ui + Tailwind CSS v4
- **完整** - 所有必需页面都已实现
- **专业** - 代码质量保证，生产就绪

---

**恭喜！项目已完成，可以开始使用了！** 🎊
