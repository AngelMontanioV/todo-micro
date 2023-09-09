/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#222222', // Agrega un color personalizado llamado "primary"do
        backCcontainer : '#1c1c1c'
      },
      backgroundImage: () => ({
        "sahara": "url('./assets/saharaSky.jpg')",
        "montania.niebla": "url('./assets/montania.niebla.jpg')",
        "pexels-maxime-francis-2246476": "url('./assets/pexels-maxime-francis-2246476.jpg')",
        "pexels-pixabay-326055": "url('./assets/pexels-pixabay-326055.jpg')",
        "aveExotica": "url('./assets/aveExotica.jpg')",
        "pexels-pixabay-36717": "url('./assets/pexels-pixabay-36717.jpg')",
        "pexels-eberhard-grossgasteiger-443446": "url('./assets/pexels-eberhard-grossgasteiger-443446.jpg')",
      }),
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

