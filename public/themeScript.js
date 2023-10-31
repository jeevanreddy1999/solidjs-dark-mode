let theme = localStorage.getItem("theme");

const html = document.documentElement;

if (!theme) {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
  localStorage.setItem("theme", theme);
}

html.classList.add(theme);
html.setAttribute("style", `color-scheme: ${theme};`);
