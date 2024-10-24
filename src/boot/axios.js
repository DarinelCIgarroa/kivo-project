// src/boot/axios.js
import { boot } from "quasar/wrappers";
import axios from "axios";

// Configura Axios para usar la URL base desde las variables de entorno
const api = axios.create({
  // baseURL: import.meta.env.VITE_API_URL,
});

export default boot(({ app }) => {
  // Puedes agregar Axios a la instancia global de Vue
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
