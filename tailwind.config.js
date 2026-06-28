/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        night: '#05070d',
        panel: '#0d1320',
        electric: '#38bdf8',
      },
      boxShadow: {
        glow: '0 0 42px rgba(139, 92, 246, 0.24)',
      },
    },
  },
  plugins: [],
};
