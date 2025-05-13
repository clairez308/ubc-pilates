import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        skyblue: '#B3D8F1',
        aqua: '#D6F0F9',
        denim: '#709FC4',
        navy: '#1E3A5F',
        pale: '#F8FAFC',
        lemon: '#FFF7BF',
      },
    },
  },
  plugins: [],
};
export default config;
