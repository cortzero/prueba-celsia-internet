import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiciosByCliente } from "../services/ServicioService";
import ServiciosCard from "./ServiciosCard";

function ListServicios() {
  const [servicios, setServicios] = useState([]);
  const {id} = useParams();

  useEffect(() => retrieveServices(), []);

  function retrieveServices() {
    getServiciosByCliente(id)
      .then(response => setServicios(response.data))
      .catch(error => console.log('No se pudo obtener los servicios que ha contratado el cliente'));
  }

  const servicioElements = servicios.map(
    servicio => <ServiciosCard key={servicio.servicioId.nombreServicio} currentServicio={servicio} />
  )

  return (
    <div>
      <div>
        <h1>Cliente {id}</h1>
      </div>
      {servicioElements}
    </div>
  );
}

export default ListServicios;