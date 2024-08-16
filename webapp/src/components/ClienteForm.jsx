import React, { useEffect, useState } from 'react'
import { getAllTiposIdentificacion } from '../services/TiposIdentificacionService';
import '../styles/FormStyle.css';
import { createCliente } from '../services/ClienteService';
import { useNavigate } from 'react-router-dom';

function ClienteForm() {
  const [tiposIdentificacion, setTiposIdentificacion] = useState([]);
  const navigator = useNavigate();

  const cliente = {
    identificacion: "",
    nombres: "",
    apellidos: "",
    tipoIdentificacion: "",
    fechaNacimiento: "",
    numeroCelular: "",
    correoElectronico: ""
  };

  useEffect(() => {
      getAllTiposIdentificacion()
        .then(response => setTiposIdentificacion(response.data))
        .catch(error => console.log('No se pudieron obtener los tipos de identificación disponibles.'));
    }, []);

  const tiposIdentificacionElements = [];

  for (const key in tiposIdentificacion) {
    tiposIdentificacionElements.push(<option key={key} value={key}>{tiposIdentificacion[key]}</option>)
  }

  const handleNumeroIdentificacion = (event) => cliente.identificacion = event.target.value;
  const handleNombres = (event) => cliente.nombres = event.target.value;
  const handleApellidos = (event) => cliente.apellidos = event.target.value;
  const handleFechaNacimiento = (event) => cliente.fechaNacimiento = event.target.value;
  const handleNumeroCelular = (event) => cliente.numeroCelular = event.target.value;
  const handleCorreoElectronico = (event) => cliente.correoElectronico = event.target.value;

  function saveCliente(event) {
    event.preventDefault();
    let selectElement = document.getElementById("tiposIdentificacion");
    let selectedValue = selectElement.value;
    cliente.tipoIdentificacion = selectedValue;
    createCliente(cliente)
      .then(response => {
        console.log(response.data);
        navigator('/clientes');
      })
      .catch(error => console.log(error.response.data));
  }

  return (
    <div>
      <div>
        <h1>Registrar cliente</h1>
      </div>
      <form>
        <div className='form-row'>
          <label>Número de identificación: </label>
          <input onChange={handleNumeroIdentificacion} type='text' id='identificacion' name='identificacion'></input>
        </div>
        <div className='form-row'>
          <label>Tipo de identificación: </label>
          <select name='tiposIdentificacion' id='tiposIdentificacion'>
            {tiposIdentificacionElements}
          </select>
        </div>
        <div className='form-row'>
          <label>Nombres: </label>
          <input onChange={handleNombres} type='text' id='nombres' name='nombres'></input>
        </div>
        <div className='form-row'>
          <label>Apellidos: </label>
          <input onChange={handleApellidos} type='text' id='apellidos' name='apellidos'></input>
        </div>
        <div className='form-row'>
          <label>Fecha de nacimiento: </label>
          <input onChange={handleFechaNacimiento} type='date' id='fechaNacimiento' name='fechaNacimiento'></input>
        </div>
        <div className='form-row'>
          <label>Número de celular: </label>
          <input onChange={handleNumeroCelular} type='text' id='numeroCelular' name='numeroCelular'></input>
        </div>
        <div className='form-row'>
          <label>Correo electrónico: </label>
          <input onChange={handleCorreoElectronico} type='text' id='correoElectronico' name='correoElectronico'></input>
        </div>
        <div className='form-row'>
          <button onClick={saveCliente}>Registrar</button>
        </div>
      </form>
    </div>
  )
}

export default ClienteForm