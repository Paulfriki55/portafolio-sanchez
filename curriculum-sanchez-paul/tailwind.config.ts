import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Cambio a modo oscuro manual
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sistema de colores personalizado
        primary: {
          50: 'rgb(var(--primary-50))',
          100: 'rgb(var(--primary-100))',
          200: 'rgb(var(--primary-200))',
          300: 'rgb(var(--primary-300))',
          400: 'rgb(var(--primary-400))',
          500: 'rgb(var(--primary-500))',
          600: 'rgb(var(--primary-600))',
          700: 'rgb(var(--primary-700))',
          800: 'rgb(var(--primary-800))',
          900: 'rgb(var(--primary-900))',
        },
        gray: {
          50: 'rgb(var(--gray-50))',
          100: 'rgb(var(--gray-100))',
          200: 'rgb(var(--gray-200))',
          300: 'rgb(var(--gray-300))',
          400: 'rgb(var(--gray-400))',
          500: 'rgb(var(--gray-500))',
          600: 'rgb(var(--gray-600))',
          700: 'rgb(var(--gray-700))',
          800: 'rgb(var(--gray-800))',
          900: 'rgb(var(--gray-900))',
          950: 'rgb(var(--gray-950))',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
        '2xl': 'var(--spacing-2xl)',
        '3xl': 'var(--spacing-3xl)',
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
        'xl': 'var(--border-radius-xl)',
        '2xl': 'var(--border-radius-2xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'rgb(var(--gray-600))',
            '[class~="lead"]': {
              color: 'rgb(var(--gray-600))',
            },
            a: {
              color: 'rgb(var(--primary-600))',
              '&:hover': {
                color: 'rgb(var(--primary-700))',
              },
            },
            strong: {
              color: 'rgb(var(--gray-900))',
            },
            'ol > li::marker': {
              color: 'rgb(var(--gray-500))',
            },
            'ul > li::marker': {
              color: 'rgb(var(--gray-500))',
            },
            hr: {
              borderColor: 'rgb(var(--gray-200))',
            },
            blockquote: {
              color: 'rgb(var(--gray-600))',
              borderLeftColor: 'rgb(var(--gray-200))',
            },
            h1: {
              color: 'rgb(var(--gray-900))',
            },
            h2: {
              color: 'rgb(var(--gray-900))',
            },
            h3: {
              color: 'rgb(var(--gray-900))',
            },
            h4: {
              color: 'rgb(var(--gray-900))',
            },
            'figure figcaption': {
              color: 'rgb(var(--gray-500))',
            },
            code: {
              color: 'rgb(var(--gray-900))',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            'a code': {
              color: 'rgb(var(--primary-600))',
            },
            pre: {
              color: 'rgb(var(--gray-200))',
              backgroundColor: 'rgb(var(--gray-800))',
            },
            thead: {
              color: 'rgb(var(--gray-900))',
              borderBottomColor: 'rgb(var(--gray-400))',
            },
            'tbody tr': {
              borderBottomColor: 'rgb(var(--gray-200))',
            },
          },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
};

export default config;
