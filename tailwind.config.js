/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accentCyan: '#00f5ff',
        accentPurple: '#a855f7',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 23, 42, 0.35)',
        glow: '0 0 25px rgba(0, 245, 255, 0.4)',
        'inner-glow': '0 0 0 1px rgba(255, 255, 255, 0.08)',
      },
      borderRadius: {
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'soft-spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
        'float-slow': 'float-slow 4s ease-in-out infinite',
        'ring-pulse': 'ring-pulse 2.6s ease-out infinite',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'ring-pulse': {
          '0%': { transform: 'scale(0.9)', opacity: '0.8' },
          '80%': { transform: 'scale(1.4)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
}
