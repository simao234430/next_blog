import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        handwritten: 'Virgil',
      },
      colors: {
        gray: {
          850: '#18202F',
          950: '#0b0f1a',
        },
      },
      screens: {
        '1.5xl': '1440px',
      },
    },
  },
  plugins: [require('tailwindcss-radix')(), require('@tailwindcss/typography')],
}
export default config
