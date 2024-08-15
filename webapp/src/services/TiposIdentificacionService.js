import axios from "axios";

const TIPOS_IDENTIFICACION_API_URL = import.meta.env.VITE_REST_API_BASE_URL + "/tipos-identificacion";

export const getAllTiposIdentificacion = () => axios.get(TIPOS_IDENTIFICACION_API_URL);