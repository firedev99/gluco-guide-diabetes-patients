import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
      "2xl": "1440px",
      "3xl": "1536px",
    },
    extend: {
      transformOrigin: {
        "0": "0% 0%",
        "top-bottom": "0% 100%",
      },
    },
  },
  plugins: [],
}
export default config
