/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "space-grotesk": "Space Grotesk",
        "caveat-cursive": "Caveat",
        "work-sans": "Work Sans",
        "space-mono": "Space Mono"
      }
    }
  },
  plugins: []
};
