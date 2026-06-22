import { useTranslation } from "react-i18next"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

const LATEST_RELEASE_URL =
  "https://github.com/Paxxs/TermToolsPro_release/releases/tag/v1.0.2"

export function DownloadPage() {
  const { t } = useTranslation()

  /*
   * 分系统下载区域已按需求下线：Linux 与 macOS 不再展示独立安装包入口。
   *
   * const platforms = [
   *   {
   *     name: t("download.platforms.linux.name"),
   *     icon: Terminal,
   *     version: t("download.platforms.linux.version"),
   *     downloads: [
   *       { label: t("download.platforms.linux.downloads.deb"), link: "#" },
   *       { label: t("download.platforms.linux.downloads.rpm"), link: "#" },
   *       { label: t("download.platforms.linux.downloads.aur"), link: "#" },
   *       { label: t("download.platforms.linux.downloads.appimage"), link: "#" },
   *     ],
   *   },
   *   {
   *     name: t("download.platforms.macos.name"),
   *     icon: Code,
   *     version: t("download.platforms.macos.version"),
   *     downloads: [
   *       { label: t("download.platforms.macos.downloads.homebrew"), link: "#" },
   *       { label: t("download.platforms.macos.downloads.dmg"), link: "#" },
   *       { label: t("download.platforms.macos.downloads.pkg"), link: "#" },
   *     ],
   *   },
   * ]
   *
   * const installSteps = [
   *   {
   *     title: t("download.installSteps.step1.title"),
   *     description: t("download.installSteps.step1.description"),
   *   },
   *   {
   *     title: t("download.installSteps.step2.title"),
   *     description: t("download.installSteps.step2.description"),
   *   },
   *   {
   *     title: t("download.installSteps.step3.title"),
   *     description: t("download.installSteps.step3.description"),
   *   },
   *   {
   *     title: t("download.installSteps.step4.title"),
   *     description: t("download.installSteps.step4.description"),
   *   },
   * ]
   */

  return (
    <div className="min-h-screen">
      <section className="demo-page demo-page-wide py-20">
        <div className="demo-panel rise-in mx-auto max-w-3xl text-center">
          <span className="island-kicker">{t("download.release.kicker")}</span>
          <h1 className="demo-title mt-3 mb-4">
            {t("download.release.title")}
          </h1>
          <p className="demo-muted mx-auto mb-8 max-w-2xl text-lg">
            {t("download.release.intro")}
          </p>
          <p className="demo-muted mx-auto mb-6 max-w-2xl text-sm">
            {t("download.release.authorLine")}
          </p>
          <Button asChild className="rounded-full">
            <a href={LATEST_RELEASE_URL}>
              <Download data-icon="inline-start" />
              {t("download.release.action")}
            </a>
          </Button>
        </div>
      </section>

      {/*
        通过包管理器快速安装板块已按需求完整注释，不再展示 Homebrew、APT、DNF 安装入口。

        <section className="demo-page py-20">
          <div className="demo-panel mx-auto max-w-3xl">
            <h2 className="demo-section-title mb-4">
              {t("download.quickInstall.title")}
            </h2>
            <div className="space-y-4">
              <div>
                <p className="demo-muted mb-2 text-sm font-semibold">
                  {t("download.quickInstall.homebrew")}
                </p>
                <div className="demo-code-block font-mono text-sm">
                  <code>brew install termtools</code>
                </div>
              </div>
              <div>
                <p className="demo-muted mb-2 text-sm font-semibold">
                  {t("download.quickInstall.apt")}
                </p>
                <div className="demo-code-block font-mono text-sm">
                  <code>sudo apt install termtools</code>
                </div>
              </div>
              <div>
                <p className="demo-muted mb-2 text-sm font-semibold">
                  {t("download.quickInstall.dnf")}
                </p>
                <div className="demo-code-block font-mono text-sm">
                  <code>sudo dnf install termtools</code>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button className="demo-button gap-2">
                <Download className="h-5 w-5" />
                {t("download.quickInstall.downloadButton")}
              </Button>
            </div>
          </div>
        </section>
      */}
    </div>
  )
}
