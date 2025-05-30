/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
      },
      fontFamily: {
        island: ['Quicksand', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light"]
  },
}