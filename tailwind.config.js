/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          card: '#1A1A1A',
          border: 'rgba(255, 255, 255, 0.1)',
        },
        sky: {
          400: '#38BDF8',
        },
        accent: {
          yellow: '#FEF08A',
          green: '#86EFAC',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
