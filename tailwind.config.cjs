// @ts-check
/** @type{import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#3D3D3D',
        secondary: '#737373'
      }
    },
  },
  plugins: [],
}
