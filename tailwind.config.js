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
      },
      backgroundImage: (theme) => ({
        "sahara": "url('./assets/saharaSky.jpg')",
      }),
    },
  },
  plugins: [],
}

