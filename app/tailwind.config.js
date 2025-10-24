/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Next.js app folder
    './pages/**/*.{js,ts,jsx,tsx}', // if using pages directory
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-inter)', 'sans-serif'],
        body: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
