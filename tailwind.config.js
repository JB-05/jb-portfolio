/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Neumorphic animation used for subtle background gradients
      animation: {
        gradient: 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        // Neumorphic dark theme palette
        'ink-900': '#070b13', // body background
        'ink-800': '#0e1422', // primary surface
        'ink-700': '#151d2f', // raised surface
        'ink-fg': '#f9fafb', // primary text
        'ink-fg-soft': '#c1c8da', // secondary text
        'ink-fg-muted': '#8b94aa', // muted text
        'accent-apricot': '#f6b17a', // primary accent
        'accent-mint': '#7dd3b0', // secondary accent
        'accent-amber': '#ffd670', // highlight / focus
        'danger-soft': '#fb7185', // soft danger
      },
      boxShadow: {
        // Soft raised neumorphic surface
        'neu-soft':
          '0 -2px 4px rgba(255, 255, 255, 0.04), 0 12px 28px rgba(0, 0, 0, 0.65)',
        // Sunken / inset surface
        'neu-inset':
          'inset 0 6px 16px rgba(0, 0, 0, 0.85), inset 0 -1px 1px rgba(255, 255, 255, 0.06)',
        // Accent glows
        'neu-glow-apricot': '0 0 18px rgba(246, 177, 122, 0.45)',
        'neu-glow-mint': '0 0 18px rgba(125, 211, 176, 0.45)',
      },
      borderRadius: {
        'card-xl': '24px',
        pill: '999px',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};