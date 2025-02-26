import axios from "axios";
import { createHttpClient } from "./base.lib"; // Asegúrate de que la ruta sea correcta
import Cookies from "js-cookie"; // Librería para manejar cookies en el cliente

// Configuración básica de Axios
const configApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_SALES, // Usamos variable de entorno
  timeout: 10000, // Tiempo máximo de espera en milisegundos
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para añadir el token desde la cookie antes de cada solicitud
configApi.interceptors.request.use(
  (config) => {
    const token = Cookies.get("session_token"); // Nombre de la cookie donde está el token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Añadimos el token al header
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Crear el cliente HTTP con la configuración específica
export const configApiClient = createHttpClient(configApi);

export default configApiClient;
