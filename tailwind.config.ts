import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["montserrat"],
      bellefair: ["bellefair"],
    },

    colors: {
      yellow: {
        100: "#FFDB72",
        200: " #F5BE3D",
      },
      white: {
        100: "#FFFFFF",
        200: "#EEF0F2",
      },
      gray: {
        100: "#32323A",
        200: "#1A1D23",
      },
      red: {
        500: "#FF0000",
      },
    },
    extend: {
      animation: {
        "spin-slowest": "spin 200s linear infinite",
      },
      backgroundImage: {
        gradient: "linear-gradient(120.24deg ,#000,rgba(25, 25, 34, 0))",
      },
    },
  },
  plugins: [],
};
export default config;

// background:
