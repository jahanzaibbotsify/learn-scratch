/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'scratch-blue': '#4C97FF',
        'scratch-orange': '#FF8C1A',
        'scratch-green': '#4CAF50',
        'scratch-blue-dark': '#3A75CC', 
        'scratch-orange-dark': '#D67315',
        'scratch-green-dark': '#3A8C3A',
        'scratch-blue-light': '#80BDFF',
        'scratch-orange-light': '#FFC380',
        'scratch-green-light': '#A5D6A7',
        success: '#00C853',
        warning: '#FFD600',
        error: '#FF3D00',
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        }
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};