/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'instagram-pink': '#E1306C',
        'instagram-purple': '#833AB4',
        'instagram-orange': '#F77737',
        'instagram-yellow': '#FCAF45',
      },
      fontFamily: {
        'instagram': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'instagram-gradient': 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
        'story-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(0,0,0,0.6) 100%)',
      },
      animation: {
        'story-progress': 'story-progress 5s linear forwards',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slide-up': 'slide-up-fade 0.5s ease-out',
        'pulse-scale': 'pulse-scale 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'story-progress': {
          'from': { transform: 'scaleX(0)' },
          'to': { transform: 'scaleX(1)' },
        },
        'bounce-in': {
          '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
          '50%': { transform: 'scale(1.2) rotate(10deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        'slide-up-fade': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'pulse-scale': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
  plugins: [],
}
