import axios from "axios";

const CLIENTES_API_URL = import.meta.env.VITE_REST_API_BASE_URL + "/clientes";

export const getAllClientes = () => axios.get(CLIENTES_API_URL);
export const getCliente = (clienteId) => axios.get(CLIENTES_API_URL + "/" + clienteId);
export const createCliente = (cliente) => axios.post(CLIENTES_API_URL, cliente);
export const updateCliente = (clienteId, cliente) => axios.put(CLIENTES_API_URL + "/" + clienteId, cliente);
export const deleteCliente = (clienteId) => axios.delete(CLIENTES_API_URL + "/" + clienteId);