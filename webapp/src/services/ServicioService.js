import axios from "axios";

const SERVICIOS_API_URL = import.meta.env.VITE_REST_API_BASE_URL + "/servicios";

export const getServiciosByCliente = (clienteId) => axios.get(SERVICIOS_API_URL + "/" + clienteId);
export const getNombresServicios = () => axios.get(SERVICIOS_API_URL + "/nombres-servicios");
export const createServicio = (clienteId, nombreServicio, servicio) =>
  axios.post(
    SERVICIOS_API_URL + "/" + clienteId + "/" + nombreServicio,
    servicio
  );
