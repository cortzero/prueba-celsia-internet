import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getServiciosByCliente } from "./services/ServicioService";

function Header() {
  return (
    <header>
      <button>Inicio</button>
      <button>Clientes</button>
    </header>
  );
}

export default Header;