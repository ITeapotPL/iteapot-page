/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue': {
          '100': '#000814',
          '200': '#001D3D',
          '300': '#003566',
        },
        'yellow': {
          '100': '#FFC300',
          '200': '#FFD60A',
        }
      },
      fontFamily: {
        'sourcecode': ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}

