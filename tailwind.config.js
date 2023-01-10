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
            'primary': '#f5f5f5',
            'secondary': '#1c1c1c',
            'tertiary': '#8250df'
        },
    },
  },
  plugins: [],
}
