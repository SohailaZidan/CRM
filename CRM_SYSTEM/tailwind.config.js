/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // مسار الملفات في مشروع Angular
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "  oklch(0.623 0.214 259.815)", // تعريف اللون الأساسي
        lightColor : "oklch(0.962 0.018 272.314)"
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

