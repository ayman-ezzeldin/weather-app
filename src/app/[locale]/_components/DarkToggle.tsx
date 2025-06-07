"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
    >
      {resolvedTheme === "dark" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all duration-300 dark:rotate-0 text-white dark:scale-100" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 text-black dark:scale-0" />
      )}
    </Button>
  );
}
