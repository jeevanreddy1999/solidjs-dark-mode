import Button from "./ui/Button";
import { createEffect, createSignal } from "solid-js";

const initializeTheme = () => {
  let theme = "dark";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme") as "light" | "dark";
  }
  return theme;
};

const ThemeSwitcher = () => {
  const [theme, setTheme] = createSignal(initializeTheme());

  createEffect(() => {
    const html = document.documentElement;
    if (theme() === "light") {
      html.classList.remove("dark");
      html.classList.add("light");
    } else {
      html.classList.add("dark");
    }
    localStorage.setItem("theme", theme());
    html.setAttribute("style", `color-scheme: ${theme()};`);
  });

  return (
    <div>
      <Button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        {theme()}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
