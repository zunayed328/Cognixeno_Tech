import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#05070f',
        glow: '#41c2ff',
        neon: '#8d5cff',
        ultramarine: '#2c3bf1'
      },
      boxShadow: {
        glow: '0 0 60px rgba(65, 194, 255, 0.16)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
}

export default config
