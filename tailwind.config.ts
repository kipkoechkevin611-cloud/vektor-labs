import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#07111F',
          surface: '#0D1B2A',
          blue: '#2F80FF',
          orange: '#FF8A3D',
        },
      },
      spacing: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}
export default config
