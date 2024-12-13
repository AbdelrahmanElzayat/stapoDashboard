import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        almarai: ["almarai", "sans-serif"], // اجعل Inter الخط الافتراضي
        sans: ["Inter", "sans-serif"], // اجعل Inter الخط الافتراضي
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        backgroundPrimary: "#F5F8FA",
        textPrimary: '#000',
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
