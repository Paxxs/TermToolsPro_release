import { createContext, useContext, useEffect, useRef, useState } from "react"

type Theme = "light" | "dark"
const DEFAULT_THEME: Theme = "light"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null
  const stored = localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return null
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.remove("light", "dark")
  document.documentElement.classList.add(theme)
  document.documentElement.setAttribute("data-theme", theme)
  document.documentElement.style.colorScheme = theme
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)
  const hasResolvedTheme = useRef(false)

  useEffect(() => {
    if (!hasResolvedTheme.current) return
    applyTheme(theme)
  }, [theme])

  useEffect(() => {
    const resolvedTheme = getStoredTheme() || getSystemTheme()

    hasResolvedTheme.current = true
    setTheme(resolvedTheme)

    if (resolvedTheme === DEFAULT_THEME) {
      applyTheme(resolvedTheme)
    }
  }, [])

  // Listen to system theme changes if no stored preference
  useEffect(() => {
    if (getStoredTheme()) return // Don't listen if user has set a preference

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
