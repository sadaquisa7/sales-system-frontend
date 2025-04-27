import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/configs/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/primereact/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "green-joinnus": "#42a692",
        "green-joinnus-2": "#00e0b1",
        "green-joinnus-3": "#E6FCF7",
        "green-joinnus-4": "#00B38E",
        "white-joinnus-1": "#F2F6FA",
        "white-joinnus-2": "#E4EDF5",
        "blue-joinnus-1": "#031425",
        "gray-joinnus-1": "#717D8B",
        "gray-joinnus-2": "#DDDDDD",
        "gray-joinnus-3": "#ececec",
        "gray-joinnus-4": "#cccccc",
        "red-joinnus-1": "#F8E8E8",
        "red-joinnus-2": "#951515",
      },
      height: {
        "screen-navbar": "calc(100vh - 64px)",
        "screen-navbar-section": "calc(100vh - 109px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
