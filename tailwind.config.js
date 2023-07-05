/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: false,
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'app-bg': '#191922',
        'bgmatte-primary': '#1E1E29',
        'grad-purple': '#644C8F',
        'grad-green': '#3FAAA1',
      },
    },
    fontFamily: {
      lato: ['Lato', 'sans-serif'],
      mono: ['Roboto Mono', 'monospace'],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
