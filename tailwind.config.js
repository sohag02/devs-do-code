/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-jakarta)'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        gradient: 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#4354FF',
          50: '#F8F9FF',
          100: '#E6E8FF',
          200: '#B3B9FF',
          300: '#808AFF',
          400: '#4D5BFF',
          500: '#4354FF',
          600: '#0011FF',
          700: '#000DC2',
          800: '#000985',
          900: '#000547',
        },
        secondary: {
          DEFAULT: '#A855F7',
          50: '#F9F1FE',
          100: '#F3E2FD',
          200: '#E7C6FB',
          300: '#DBA9F9',
          400: '#CF8DF7',
          500: '#A855F7',
          600: '#8B1EF3',
          700: '#6B0BC4',
          800: '#4B0888',
          900: '#2C054C',
        },
        tertiary: {
          DEFAULT: '#0EA47A',
          50: '#E6F7F2',
          100: '#CCEFE5',
          200: '#99DFCB',
          300: '#66CFB1',
          400: '#33BF97',
          500: '#0EA47A',
          600: '#0B7D5D',
          700: '#085640',
          800: '#052F23',
          900: '#021109',
        },
      },
    },
  },
  plugins: [],
}
