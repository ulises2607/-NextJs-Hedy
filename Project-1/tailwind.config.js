/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cRecommend: 'rgb(148, 201, 169)',
        cTopTrack: 'rgb(213, 87, 59)'
      }
    },
  },
  plugins: [],
}

