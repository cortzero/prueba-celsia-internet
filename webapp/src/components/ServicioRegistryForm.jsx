import React, { useEffect, useState } from 'react'
import { createServicio, getNombresServicios } from '../services/ServicioService';
import { useNavigate } from 'react-router-dom';

function ServicioRegistryForm() {
  const [nombresServicios, setNombresServicios] = useState([]);
  const navigator = useNavigate();

  let clienteId = "";
  const servicio = {
    fechaInicio: "",
    ultimaFacturacion: "",
    ultimoPago: 0
  }

  const handleNumeroIdentificacion = (event) => clienteId = event.target.value;
  const handleFechaInicio = (event) => servicio.fechaInicio = event.target.value;

  useEffect(() => {
    getNombresServicios()
      .then(response => setNombresServicios(response.data))
      .catch(error => console.log("No se pudieron cargar los nombres de los servicios"));
  }, []);

  const serviciosElements = nombresServicios.map(
    nombre => <option key={nombre} value={nombre}>{nombre}</option>
  )

  function saveServicio(event) {
    event.preventDefault();
    let selectElement = document.getElementById("servicios");
    let selectedValue = selectElement.value;
    selectedValue = selectedValue.replaceAll(" ", "-");
    servicio.ultimaFacturacion = servicio.fechaInicio;
    createServicio(clienteId, selectedValue, servicio)
      .then(response => {
        console.log(response.data);
        navigator('/cliente/' + clienteId);
      })
      .catch(error => console.log(error.response.data));
  }

  return (
    <div>
      <div>
        <h1>Registrar servicio</h1>
        <form>
          <div className='form-row'>
            <label>Servicio: </label>
            <select name='servicios' id='servicios'>
              {serviciosElements}
            </select>
          </div>
          <div className='form-row'>
            <label>Número de identificación: </label>
            <input onChange={handleNumeroIdentificacion} type='text' id='identificacion' name='identificacion'></input>
          </div>
          <div className='form-row'>
            <label>Fecha de inicio: </label>
            <input onChange={handleFechaInicio} type='date' id='fechaInicio' name='fechaInicio'></input>
          </div>
          <div className='form-row'>
            <button onClick={saveServicio}>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ServicioRegistryForm