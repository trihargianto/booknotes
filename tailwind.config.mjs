import catppuccin from "@catppuccin/tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    // https://github.com/catppuccin/tailwindcss/tree/main?tab=readme-ov-file#usage
    catppuccin({
      prefix: "ctp",
      defaultFlavour: "macchiato",
    }),
  ],
};
