import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "premios-bit": "url('/assets/back-BIT.png')",
      },
      colors: {
        green: "#80b661",
        white: "#fff",
        "background-black": "rgba(43, 46, 51, 0.6)",
        "background-grey": "#484f59",
        grey: "#b8bcc1",
      },
    },
  },
  plugins: [],
};
export default config;
