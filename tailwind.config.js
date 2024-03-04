/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        colors: {
            action: "#1b4b84"
        }
    },
  },
  plugins: [],
}

