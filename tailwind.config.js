/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#2563eb',
        soft: '#f8fafc',
      },
      boxShadow: {
        glow: '0 0 40px rgba(37, 99, 235, 0.25)',
      },
    },
  },
  plugins: [],
};
