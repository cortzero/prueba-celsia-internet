import React from "react";
import ServiciosCard from "./ServiciosCard";

function ListServicios({ servicios }) {
  const servicioElements = servicios.map(
    servicio => <ServiciosCard key={servicio.servicioId.nombreServicio} currentServicio={servicio} />
  )

  return (
    <div>
      <div>
        <h2>Servicios contratados</h2>
      </div>
      {servicioElements}
    </div>
  );
}

export default ListServicios;