import catppuccin from "@catppuccin/tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [
    // https://github.com/catppuccin/tailwindcss/tree/main?tab=readme-ov-file#usage
    catppuccin({
      prefix: "ctp",
      defaultFlavour: "macchiato",
    }),

    // https://github.com/jamiebuilds/tailwindcss-animate
    tailwindcssAnimate,
  ],
};
