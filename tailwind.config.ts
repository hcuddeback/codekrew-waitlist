import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx,js,jsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#8B5CF6",
          orange: "#F97316",
          navy: "#0A0A0A",
          slate: "#94A3B8",
          white: "#FFFFFF"
        }
      }
    }
  },
  plugins: [],
}
export default config
