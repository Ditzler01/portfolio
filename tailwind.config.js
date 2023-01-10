/** @type {import('tailwindcss').Config} */
module.exports = {
  content: 
  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
    {
        colors:
        {
            'primary': '#f0f0f0',
            'secondary': '#1c1c1c',
            'tertiary': '#8250df'
        },
    },
  },
  plugins: [],
}
