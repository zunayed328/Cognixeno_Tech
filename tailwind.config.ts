import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
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
        xanthous: '#F7B638',
      },
      boxShadow: {
        glow: '0 0 60px rgba(65, 194, 255, 0.16)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.35)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        travel: 'travel 2s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        blob: 'blobMorph 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        travel: {
          '0%': { left: '-5%' },
          '100%': { left: '105%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70%' },
          '25%': { borderRadius: '30% 60% 70% 40%' },
          '50%': { borderRadius: '50% 60% 30% 60%' },
          '75%': { borderRadius: '60% 40% 60% 30%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
