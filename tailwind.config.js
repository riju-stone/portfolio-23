/** @type {import('tailwindcss').Config} */
import { COLORS, TEXTCOLORS, DISABLEDTEXTCOLORS } from "./src/utils/constants";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      lightbg: COLORS.light,
      darkbg: COLORS.dark,
      orangebg: COLORS.orange,
      greenbg: COLORS.green,
      lighttext: TEXTCOLORS.light,
      darktext: TEXTCOLORS.dark,
      lightdisabled: DISABLEDTEXTCOLORS.light,
      darkdisabled: DISABLEDTEXTCOLORS.dark
    },
    extend: {
      fontFamily: {
        "space-grotesk": "Space Grotesk",
        // "work-sans": "Work Sans",
        // playfair: "Playfair Display"
        "avant-garde": "Avant Garde Book BT",
        caveat: "Caveat"
      }
    }
  },
  plugins: []
};
