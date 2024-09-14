import { useState } from "react";
import { Theme } from "./theme.type";

export const useToggleTheme = (currentTheme: Theme) => {
  const [theme, setTheme] = useState<Theme>(currentTheme);
  const toogleTheme = () => {
    const bodyClass = document.body.classList;
    if (bodyClass.contains(Theme.light)) {
      bodyClass.remove(Theme.light);
      bodyClass.add(Theme.dark);
    } else {
      bodyClass.remove(Theme.dark);
      bodyClass.add(Theme.light);
    }
    if (bodyClass.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  };
  return { toogleTheme, theme };
};
