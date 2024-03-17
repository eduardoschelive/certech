/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: 'var(--color-purple)',
        'purple-dark': 'var(--color-purple-dark)',
        'purple-light': 'var(--color-purple-light)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
    },
  },
  plugins: [],
}
