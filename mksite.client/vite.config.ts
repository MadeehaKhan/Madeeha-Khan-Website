import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    build: {
        sourcemap: true,
        rollupOptions: {
          onwarn(warning, defaultHandler) {
            if (warning.code === 'SOURCEMAP_ERROR') {
              return
            }
    
            defaultHandler(warning)
          },
        },
      },
    plugins: [react()],
    base: "/Madeeha-Khan-Website"
    
})
