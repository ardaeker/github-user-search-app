import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full mt-8 md:mx-auto md:max-w-xl lg:max-w-3xl">
      <h1 className="text-h1 text-dark-slate dark:text-white">devfinder</h1>
      <ThemeSwitch />
    </header>
  );
}
