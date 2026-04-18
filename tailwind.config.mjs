/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        canvas: '#F6F3ED',
        'canvas-dark': '#0F1B2E',
        ink: '#1A1A1A',
        'ink-muted': '#4A4A4A',
        'ink-subtle': '#7A7A7A',
        'ink-inverse': '#F6F3ED',
        accent: '#C0392B',
        'accent-hover': '#A93226',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        glass: '24px',
        'glass-sm': '20px',
      },
      maxWidth: {
        prose: '65ch',
        reading: '48ch',
      },
    },
  },
  plugins: [],
};
