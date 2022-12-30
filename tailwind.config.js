/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/assets/2738.jpg')",
        "game-bg": "url('/assets/2738.jpg')",
      },
      fontFamily: {
        "mono-space": ["Space Mono", "monospace"],
      },
      boxShadow: {
        insideShadow: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      },
    },
  },
  plugins: [],
};
