// .storybook/preview.ts
import type { Preview, Decorator } from "@storybook/react";
import "../app/globals.css";

const SB_KEY = "sb-theme"; // <- diferente da key do app ("app-theme")

function resolveTheme(choice: "light" | "dark" | "system"): "light" | "dark" {
  const saved = localStorage.getItem(SB_KEY) as "light" | "dark" | null;
  const sysDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  // "system" segue saved (se existir) senão o sistema
  return choice === "system" ? (saved ?? (sysDark ? "dark" : "light")) : choice;
}

function applyTheme(choice: "light" | "dark" | "system") {
  const want = resolveTheme(choice);
  document.documentElement.classList.toggle("dark", want === "dark");

  // persiste só quando não for "system"
  if (choice === "system") localStorage.removeItem(SB_KEY);
  else localStorage.setItem(SB_KEY, want);
}

// toolbar para escolher tema
export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Light/Dark/System for Storybook",
    defaultValue: "system",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark", "system"],
    },
  },
} satisfies Preview["globalTypes"];

// aplica tema a cada render do SB (Canvas e Docs)
const withTheme: Decorator = (StoryFn, ctx) => {
  applyTheme(ctx.globals.theme as "light" | "dark" | "system");
  return StoryFn();
};

export const decorators = [withTheme];

// opcional: faz os backgrounds seguirem seus tokens
export const parameters: Preview["parameters"] = {
  backgrounds: {
    default: "app",
    values: [
      { name: "app", value: "var(--color-bg)" },
      { name: "card", value: "var(--color-card)" },
    ],
  },
};
