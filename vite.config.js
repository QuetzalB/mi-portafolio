import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/mi-portafolio/', // Reemplaza "mi-portafolio" con el nombre de tu repositorio
});
