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
    },
    extend: {
      animation: {
        "spin-slowest": "spin 200s linear infinite",
      },
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // background:{
      //     gradient:linear-gradient(180deg, #FFE27E 0%, #FFA81C 100%);
      // }
    },
  },
  plugins: [],
};
export default config;

// background:
