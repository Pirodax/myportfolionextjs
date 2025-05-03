import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",       // si tu utilises le dossier /app
      "./pages/**/*.{js,ts,jsx,tsx}",     // ou /pages
      "./components/**/*.{js,ts,jsx,tsx}",// et tes composants
    ],
    theme: {
      extend: {
        colors : {
          black:{
            DEFAULT: '#000',
            100: '#000319'
         }
        }
      },
    },
    plugins: [],
  }
  
export default config;  