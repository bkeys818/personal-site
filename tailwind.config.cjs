// @ts-check
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    backgroundColor: {
      primary: '#FAFBFC',
      secondary: '#F2F3F5',
    },
    colors: {
      primary: '#0C120F',
      secondary: '#5E5E5E',
      blue: {
        50: '#EFF6FA',
        100: '#DCEEFA',
        200: '#92AABC',
        300: '#55788F',
        400: '#284C63',
        500: '#0C2636',
      },
      green: {
        100: '#C7E7A6',
        200: '#92BA69',
        300: '#638D3A',
        400: '#3C6018',
        500: '#1C3305',
      },
      aqua: {
        100: '#58E2C8',
        200: '#45B19F',
        300: '#328073',
        400: '#1F4F47',
        500: '#0C1E1B',
      }
    },
  },
  plugins: [],
}
