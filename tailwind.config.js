/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: '#F4F0E8',
        chalk: '#FBF9F5',
        oat: '#D8CBB8',
        'oat-light': '#E9E2D7',
        'oat-dark': '#B8A892',
        umber: '#49372F',
        'umber-dark': '#382A24',
        'olive-ink': '#596451',
        'olive-light': '#717D69',
        'clay-rose': '#B77F70',
        'clay-light': '#D4A396',
        'dusk-blue': '#71818A',
        'dusk-light': '#93A4AE',
        'soft-graphite': '#282725',
        'sand-border': '#E4DDD3',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'widest-atelier': '0.18em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(73, 55, 47, 0.05)',
        'elevated': '0 12px 32px -4px rgba(73, 55, 47, 0.09)',
        'drawer': '-8px 0 32px rgba(40, 39, 37, 0.12)',
      }
    },
  },
  plugins: [],
}
