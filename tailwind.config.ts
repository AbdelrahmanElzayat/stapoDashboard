import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       boxShadow: {
        custom: "0px 20px 25px 0px rgba(210, 210, 210, 0.16)",
        btn: "0px 15px 12.5px 0px rgba(64, 64, 64, 0.11)",
        btnsb: "15px 15px 25px 0px rgba(112, 66, 220, 0.17)"
      },
       fontFamily: {
        almarai: ["almarai", "sans-serif"], // اجعل Inter الخط الافتراضي
        sans: ["Inter", "sans-serif"], // اجعل Inter الخط الافتراضي
      },
      screens: {
        xs: '480px',
      },
      colors: {
        backgroundPrimary: "#F5F8FA",
        textPrimary: "#000",
        textSecondary: "#323232",
      },
    },
     container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        "2xl": "2rem",
      },
    },
  },
    plugins: []
};
export default config;
