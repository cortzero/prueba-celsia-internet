import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiciosByCliente } from "../services/ServicioService";
import ServiciosCard from "./ServiciosCard";

function ListServicios() {
  const [servicios, setServicios] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    getServiciosByCliente(id)
      .then(response => setServicios(response.data))
      .catch(error => console.log(error.response.data));
  }, []);

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