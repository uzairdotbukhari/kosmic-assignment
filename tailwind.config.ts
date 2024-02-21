import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './elements/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #6546db, #ff7dff)',
      },
      screens: {
        'sm': '375px',     // Mobile: 375px
        'md': '745px',     // Tablet: 745px
        'lg': '1440px',    // Default/Larger Screens: 1440px
        'xl': '1728px',    // Larger Screens: 1728px
      },
      colors: {
        'theme-light': '#12111a',
        'theme-dark': '#09090d',
        'theme-blue': '#523fd7',
        'theme-purple': '#6546db',
        'theme-pink': '#ff7dff',
      },
    },
  },
  plugins: [],
}
export default config
