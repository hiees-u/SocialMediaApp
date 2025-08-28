// src/components/ThemeToggle.tsx
import { useThemeStore } from "@/store/themeStore"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 rounded border"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  )
}
