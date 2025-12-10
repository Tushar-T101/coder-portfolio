/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'editor-bg': '#1e1e1e',
        'editor-sidebar': '#252526',
        'editor-line': '#2d2d30',
        'editor-selection': '#264f78',
        'editor-text': '#d4d4d4',
        'editor-comment': '#6a9955',
        'editor-keyword': '#569cd6',
        'editor-string': '#ce9178',
        'editor-function': '#dcdcaa',
        'editor-variable': '#9cdcfe',
      },
      fontFamily: {
        'mono': ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'blink 1s step-end infinite',
        'type': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}
