/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: '#261A17',
          deep: '#171311',
          light: '#352521',
          surface: '#201614',
        },
        ivory: {
          DEFAULT: '#F3E9D9',
          cream: '#FFF9F0',
          muted: '#E5D8C3',
          dark: '#C8B89F',
        },
        burgundy: {
          DEFAULT: '#722D35',
          dark: '#521D24',
          light: '#8E3842',
          glow: 'rgba(114, 45, 53, 0.4)',
        },
        gold: {
          DEFAULT: '#B58A52',
          light: '#D4AA70',
          dark: '#8E6735',
          accent: '#E5C07B',
        },
        olive: {
          DEFAULT: '#526044',
          light: '#6B7D5A',
          dark: '#3C4732',
        },
        charcoal: {
          DEFAULT: '#171311',
          darker: '#0F0C0B',
          card: '#1F1715',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #261A17 0%, #171311 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #B58A52 0%, #E5C07B 50%, #B58A52 100%)',
        'burgundy-radial': 'radial-gradient(circle at center, rgba(114, 45, 53, 0.25) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(181, 138, 82, 0.25)',
        'burgundy-glow': '0 0 30px rgba(114, 45, 53, 0.35)',
        'royal-card': '0 15px 35px -5px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(181, 138, 82, 0.15)',
      }
    },
  },
  plugins: [],
}
