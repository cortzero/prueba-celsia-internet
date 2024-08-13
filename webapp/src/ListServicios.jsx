import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiciosByCliente } from "./services/ServicioService";

function ListServicios() {
  const [servicios, setServicios] = useState([]);
  const {id} = useParams();

  useEffect(() => retrieveServices());

  function retrieveServices() {
    getServiciosByCliente(id)
      .then(response => {
        console.log(response.data);
        setServicios(response.data);
      })
      .catch(error => console.log('No se pudo obtener los servicios que ha contratado el cliente'));
  }
}

export default ListServicios;