/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
            "header-bg-color":"#fff",
            "footer-bg-color":"#fff",
            "body-bg-color":"#e3e3e3",
            "input-bg":"#f2f2f2",
            "input-bg-focus":"#dbdbdb",
            "text-color":"#000",
            "light-text-color":"#545454",
            "light-text-title":"353535",
            
      },
    },
  },
  plugins: [],
};
