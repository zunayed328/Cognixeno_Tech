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
        ink: '#080810',
        base: '#080810',
        'bg-secondary': '#0D0D1A',
        glass: 'rgba(255, 255, 255, 0.04)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
        salmon: '#FF947A',
        midgreen: '#025259',
        lavender: '#C8A8E9',
        velvet: '#1A0030',
        chartreuse: '#E1FF51',
        gunmetal: '#00272C',
        maroon: '#780115',
        xanthous: '#F7B638'
      },
      boxShadow: {
        glow: '0 0 60px rgba(65, 194, 255, 0.16)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.35)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)'
      }
    }
  },
  plugins: []
}

export default config
