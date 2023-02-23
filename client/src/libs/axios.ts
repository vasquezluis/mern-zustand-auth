import axios from "axios";
import { useAuthStore } from "../store/auth";

// ! para a;adir cabecera a las peticiones de axios

const authAPI = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

// TODO aqui se a;ade la cabecera: token almacenado en local storage
authAPI.interceptors.request.use((config) => {

  // ? obtener token del local storage
  const token = useAuthStore.getState().token;

  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default authAPI;
