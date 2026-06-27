/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base canvas
        ink: {
          DEFAULT: '#0B0F1A',
          50: '#F4F6FB',
          100: '#E7EAF4',
          200: '#C7CCE0',
          300: '#9CA8C2',
          400: '#6B7693',
          500: '#3F4760',
          600: '#272D42',
          700: '#1A2034',
          800: '#131A2B',
          900: '#0B0F1A',
          950: '#06080F',
        },
        // Primary accent - focus violet
        focus: {
          50: '#F2EFFF',
          100: '#E5DEFF',
          200: '#C9B9FF',
          300: '#AD94FF',
          400: '#9270FE',
          500: '#7C5CFC',
          600: '#6440E0',
          700: '#4D2EB8',
          800: '#382390',
          900: '#251868',
        },
        // Secondary accent - clarity cyan
        clarity: {
          50: '#EAFCFC',
          100: '#CFF7F7',
          200: '#9DEDEE',
          300: '#6BE0E2',
          400: '#45D9D9',
          500: '#26B8BA',
          600: '#1B8E91',
          700: '#176D70',
          800: '#134F52',
          900: '#0E3739',
        },
        // Highlighter accent - amber
        glow: {
          50: '#FFF8E8',
          100: '#FFEEC4',
          200: '#FFE093',
          300: '#FFD05D',
          400: '#FFC857',
          500: '#F5A623',
          600: '#D6850F',
          700: '#A8650C',
          800: '#7A4A0C',
          900: '#553309',
        },
        coral: {
          400: '#FF6B6B',
          500: '#F2495C',
          600: '#D62E48',
        },
        mint: {
          400: '#3DDC97',
          500: '#23BD81',
          600: '#159A68',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora': 'radial-gradient(circle at 15% 20%, rgba(124,92,252,0.35), transparent 45%), radial-gradient(circle at 85% 15%, rgba(69,217,217,0.28), transparent 40%), radial-gradient(circle at 50% 90%, rgba(255,200,87,0.12), transparent 45%)',
        'glass-sheen': 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.02) 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(6,8,15,0.45)',
        'glass-sm': '0 4px 16px rgba(6,8,15,0.35)',
        glow: '0 0 24px rgba(124,92,252,0.35)',
        'glow-cyan': '0 0 24px rgba(69,217,217,0.3)',
      },
      backdropBlur: {
        glass: '18px',
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
    },
  },
  plugins: [],
}
