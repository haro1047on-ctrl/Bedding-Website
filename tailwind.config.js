/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        porcelain: '#fbf9f6',
        chalk: '#ffffff',
        oat: '#D8CBB8',
        'oat-light': '#EAE4DA',
        'oat-stone': '#E2D9CC',
        umber: '#000000',
        'umber-dark': '#1e1e1e',
        'olive-ink': '#596451',
        'olive-light': '#717D69',
        'terracotta': '#bc3636',
        'terracotta-muted': '#B77F70',
        'clay-rose': '#B77F70',
        'dusk-blue': '#71818A',
        'charcoal': '#000000',
        'soft-graphite': '#404040',
        'sand-border': '#e5e5e5',
        'ss-banner': '#E6EFB4',
        'ss-banner-text': '#4B262B',
      },
      fontFamily: {
        sans: ['GrotesqueRegular', 'Roboto', 'Arial', 'sans-serif'],
        medium: ['GrotesqueMedium', 'Roboto', 'Arial', 'sans-serif'],
        bold: ['GrotesqueBold', 'Roboto', 'Arial', 'sans-serif'],
        serif: ['AwesomeSerifVAR', 'BradfordLLRegular', 'Georgia', 'serif'],
        bradford: ['BradfordLLRegular', 'Georgia', 'serif'],
      },
      letterSpacing: {
        'tightest': '-0.03em',
        'widest-atelier': '0.22em',
        'widest-folio': '0.28em',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(73, 55, 47, 0.05)',
        'elevated': '0 12px 32px -4px rgba(73, 55, 47, 0.09)',
        'drawer': '-8px 0 32px rgba(34, 34, 34, 0.15)',
      }
    },
  },
  plugins: [],
}
