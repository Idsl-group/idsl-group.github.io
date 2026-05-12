"use client";

import * as React from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

const ThemeContext = React.createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: Theme;
}>({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: "system",
});

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "system",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as Theme;
    if (stored) {
      setTheme(stored);
    } else if (enableSystem) {
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setTheme(system);
    }
  }, [enableSystem]);

  const resolvedTheme = React.useMemo(() => {
    if (theme === "system" && enableSystem) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return theme;
  }, [theme, enableSystem]);

  React.useEffect(() => {
    const root = window.document.documentElement;

    if (disableTransitionOnChange) {
      root.style.setProperty("--transition-duration", "0ms");
    }

    if (theme === "system" && enableSystem) {
      const system = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      root.setAttribute(attribute, system);
    } else {
      root.setAttribute(attribute, theme);
    }

    if (disableTransitionOnChange) {
      const timeout = setTimeout(() => {
        root.style.removeProperty("--transition-duration");
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [theme, attribute, enableSystem, disableTransitionOnChange]);

  const handleThemeChange = React.useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: handleThemeChange, resolvedTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
