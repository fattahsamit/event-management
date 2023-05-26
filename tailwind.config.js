/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0ea5e9",

          secondary: "#6b7280",

          accent: "#6f79ed",

          neutral: "#27213B",

          "base-100": "#f3f4f6",

          info: "#284BD7",

          success: "#61DBA0",

          warning: "#E19705",

          error: "#F83559",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
