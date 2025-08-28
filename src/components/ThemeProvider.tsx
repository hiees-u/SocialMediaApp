// src/components/ThemeProvider.tsx
import { useEffect } from "react"
import { useThemeStore } from "@/store/themeStore"

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
  }, [theme])

  return <>{children}</>
}
