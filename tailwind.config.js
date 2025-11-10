/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Menlo", "monospace"],
      },
      colors: {
        pokeball: '#EE1515',
        electric: '#FFCC00',
        grass: '#78C850',
        water: '#6890F0',
        fire: '#F08030',
        psychic: '#F85888',
        ghost: '#705898',
        dragon: '#7038F8',
        rock: '#B8A038',
        ground: '#E0C068',
        ice: '#98D8D8',
        bug: '#A8B820',
        dark: '#705848',
        steel: '#B8B8D0',
        fairy: '#EE99AC',
        normal: '#A8A878',
        background: '#F8F8F8',
        surface: '#FFFFFF',
        border: '#E2E2E2',
        text: '#1A1A1A',
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};