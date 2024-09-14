"use client";
import { useState } from "react";
import clsx from "clsx";
import ThemeSwitcher from "@/components/ui/theme-switcher/ThemeSwitcher";
import { cookies, headers } from "next/headers";
import { Theme } from "@/components/ui/theme-switcher/theme.type";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header
      className={clsx(" z-50 w-[1080px] mx-auto", {
        ["bottom-0 right-0 top-0 w-full overflow-hidden bg-[var(--navbar)] transition-colors duration-500"]:
          isOpen,
      })}
    >
      <div className="mx-auto flex w-[390px] items-center bg-[var(--navbar)] justify-between px-6  xl:w-full xl:h-20">
        header
        <ThemeSwitcher theme={Theme.dark} />
      </div>
    </header>
  );
}
