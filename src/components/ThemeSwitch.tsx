"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import iconMoon from "@/assets/icon-moon.svg";
import iconSun from "@/assets/icon-sun.svg";
import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeSwitch = () => {
    if (theme === "light" || resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <button onClick={handleThemeSwitch}>
        {(theme === "light" || resolvedTheme === "light") && (
          <motion.span
            key="switchDark"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            className="flex gap-4 items-center justify-between"
          >
            <span className="text-h4 text-metallic-blue tracking-[0.15625rem]">
              DARK
            </span>
            <Image src={iconMoon} className="h-5 w-5" alt="Dark Theme Icon" />
          </motion.span>
        )}
        {(theme === "dark" || resolvedTheme === "dark") && (
          <motion.span
            key="switchLight"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            className="flex gap-4 items-center justify-between"
          >
            <span className="text-h4 text-white tracking-[0.15625rem]">
              LIGHT
            </span>
            <Image src={iconSun} className="w-5 h-5" alt="Light Theme Icon" />
          </motion.span>
        )}
      </button>
    </AnimatePresence>
    // <select value={theme} onChange={(e) => setTheme(e.target.value)}>
    //   <option value="system">System</option>
    //   <option value="dark">Dark</option>
    //   <option value="light">Light</option>
    // </select>
  );
}
