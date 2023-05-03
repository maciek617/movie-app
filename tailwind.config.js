/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-white': 'rgb(250, 250, 250)',
        'my-red': '#F9252C',
        'my-black': '#160102',
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), linear-gradient(to top, rgba(0,0,0,0) 10%, rgba(0,0,0,0.7)), url(src/assets/header-image.jpg)',
      },
    },
  },
  plugins: [],
};
