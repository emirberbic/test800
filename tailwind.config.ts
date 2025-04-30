import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
        rajdhani: ['Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'glitch-1': {
          '0%': {
            clip: 'rect(16px, 9999px, 89px, 0)',
            transform: 'translate(0)',
          },
          '10%': {
            clip: 'rect(126px, 9999px, 76px, 0)',
            transform: 'translate(-1px, 0)',
          },
          '20%': {
            clip: 'rect(48px, 9999px, 33px, 0)',
            transform: 'translate(1px, 0)',
          },
          // More frames...
          '100%': {
            clip: 'rect(16px, 9999px, 89px, 0)',
            transform: 'translate(0)',
          },
        },
        'glitch-2': {
          '0%': {
            clip: 'rect(51px, 9999px, 81px, 0)',
            transform: 'translate(0)',
          },
          '10%': {
            clip: 'rect(141px, 9999px, 39px, 0)',
            transform: 'translate(0)',
          },
          '20%': {
            clip: 'rect(56px, 9999px, 120px, 0)',
            transform: 'translate(-1px, 0)',
          },
          // More frames...
          '100%': {
            clip: 'rect(51px, 9999px, 81px, 0)',
            transform: 'translate(0)',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'glitch-1': 'glitch-1 2s infinite linear alternate-reverse',
        'glitch-2': 'glitch-2 3s infinite linear alternate-reverse',
      },
    },
  },
  safelist: [
    'text-chart-1',
    'text-chart-2',
    'text-chart-3',
    'text-chart-4',
    'text-chart-5',
    'bg-chart-1',
    'bg-chart-2',
    'bg-chart-3',
    'bg-chart-4',
    'bg-chart-5',
    'bg-chart-1/10',
    'bg-chart-2/10',
    'bg-chart-3/10',
    'bg-chart-4/10',
    'bg-chart-5/10',
    'bg-chart-1/20',
    'bg-chart-2/20',
    'bg-chart-3/20',
    'bg-chart-4/20',
    'bg-chart-5/20',
    'bg-chart-1/5',
    'bg-chart-2/5',
    'bg-chart-3/5',
    'bg-chart-4/5',
    'bg-chart-5/5',
    'border-chart-1',
    'border-chart-2',
    'border-chart-3',
    'border-chart-4',
    'border-chart-5',
    'hover:bg-chart-1/80',
    'hover:bg-chart-2/80',
    'hover:bg-chart-3/80',
    'hover:bg-chart-4/80',
    'hover:bg-chart-5/80',
  ],
  plugins: [require('tailwindcss-animate')],
};
export default config;