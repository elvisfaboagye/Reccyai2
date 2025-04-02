
// Need to update the tailwind configuration to include the new color names
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Rename recombee colors to reccy colors
        "reccy-blue": "#3B82F6", 
        "reccy-lightBlue": "#60A5FA",
        "reccy-dark": "#111827",
        "reccy-light": "#F9FAFB"
      },
    },
  },
  plugins: [],
}
