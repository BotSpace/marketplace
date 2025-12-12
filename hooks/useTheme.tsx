"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  if (!mounted) {
    return {
      theme: "light",
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }

  return {
    theme: (theme as "light" | "dark") || "light",
    toggleTheme,
    setTheme,
  };
};
