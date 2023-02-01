import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/


// import { defineConfig } from 'vite';

// export default defineConfig({
//   base: '/roulette-simulation/'
// });

export default defineConfig({
  plugins: [react()],
  // base:'/'
})
