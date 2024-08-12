/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        t1:'#adb5bd',
        t2:'#415a77',
      }
    },
  },
  plugins: [],
}

