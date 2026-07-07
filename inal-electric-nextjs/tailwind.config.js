/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brend boje izvučene iz INAL Electric logotipa
        "bg-darker": "#10142A",   // skoro crna, zatamnjena verzija brend navy
        "bg-dark": "#1B2140",     // tamno-navy iz desne strane loga
        surface: "#242C57",
        "surface-2": "#2E3768",
        accent: "#4A5FAE",        // solid dugme boja, sredina loga gradijenta
        "accent-dim": "#384080",  // tamnija plava (desna strana loga)
        instrument: "#5E75BE",    // svijetlo-plava (lijeva strana loga)
        steel: "#606062",         // siva iz zupčanika/trake loga
        "steel-light": "#8A8A8C",
        light: "#F4F6F7",
        "text-light": "#E8EDF0",
        "text-dim": "#9FA8C9",
        "text-dark": "#181C33",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
