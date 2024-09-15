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
    <button onClick={toogleTheme} className="z-10">
      {theme === Theme.dark ? (
        <Sun className="h-8 w-8  fill-yellow-500" />
      ) : (
        <Moon className="h-7 w-7 [&>path]:fill-gray-300" />
      )}
    </button>
  );
}
