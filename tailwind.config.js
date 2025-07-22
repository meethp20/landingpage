/** @type {import('tailwindcss').Config} */
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';


module.exports = {
  content: [ ],
  theme: {
    extend: {
      fontFamily:{
      sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      }
    },
  },
  plugins: [],
}

