"use client";

import { Theme } from "./theme.type";
import { useToggleTheme } from "./useToggleTheme";
import Sun from "@/assets/icons/sun.svg";
import Moon from "@/assets/icons/moon.svg";

interface IThemeSwitcher {
  theme: Theme;
}

export default function ThemeSwitcher({ theme: currentTheme }: IThemeSwitcher) {
  const { theme, toogleTheme } = useToggleTheme(currentTheme);
  return (
    <button onClick={toogleTheme}>
      {theme === Theme.dark ? (
        <Sun className="h-5 w-5  fill-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 " />
      )}
    </button>
  );
}
