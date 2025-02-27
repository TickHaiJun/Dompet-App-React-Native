/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
        background: '#0F172A',
        card: '#1E293B',
        text: '#F8FAFC',
        border: '#334155',
        notification: '#EF4444',
      },
    },
  },
  plugins: [],
}

