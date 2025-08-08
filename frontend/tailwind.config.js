/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        charcoal: "#121212",
        darkgray: "#1E1E1E",
        offwhite: "#EAEAEA",
        coolgray: "#A1A1A1",
        teal: "#14B8A6",
        violet: "#8B5CF6",
        bordergray: "#2C2C2C",
        softred: "#EF4444",
        emerald: "#10B981",
        softwhite: "#F9FAFB",
        lightgray: "#E5E7EB",
        darkcoolgray: "#4B5563",
      }
    }
  },
  plugins: [],
}