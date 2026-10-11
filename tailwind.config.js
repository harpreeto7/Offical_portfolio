/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg-dark': '#050508',
        'bg-surface': '#0d0e12',
        'bg-card': '#12141c',
        'bg-card-hover': '#181b26',
        'border-subtle': '#1e2230',
        'border-glow': 'rgba(59, 130, 246, 0.5)',
        'blue-accent': '#2563eb',
        'blue-bright': '#3b82f6',
        'blue-light': '#60a5fa',
        'text-main': '#ffffff',
        'text-muted': '#94a3b8',
        'text-dim': '#64748b',
      },
      fontFamily: {
        display: ['Syne', 'Plus Jakarta Sans', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
