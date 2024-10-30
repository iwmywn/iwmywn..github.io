import { useEffect, useState } from "react";
import toggleDark from "../features/theme/toggleDark";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === null;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const handleToggleDark = (event: MouseEvent) => {
      toggleDark({ event, isDark, setIsDark });
    };

    document.body.addEventListener("dblclick", handleToggleDark);

    return () => {
      document.body.removeEventListener("dblclick", handleToggleDark);
    };
  }, [isDark]);

  return null;
}
