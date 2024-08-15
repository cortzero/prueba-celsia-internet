import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/CardStyle.css';

function ClientesCard({ currentCliente }) {
  const cliente = {...currentCliente};
  const navigator = useNavigate();

  const goToListServicios = (clienteId) => navigator(`/servicios/${clienteId}`);

  return (
    <div className='card'>
      <div className='card-component'>
        <p className='card-label'>Identificación: </p>
        <p className='card-value'>{cliente.identificacion}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Tipo de identificación: </p>
        <p className='card-value'>{cliente.tipoIdentificacion}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Nombre completo: </p>
        <p className='card-value'>{cliente.nombres} {cliente.apellidos}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Fecha de nacimiento: </p>
        <p className='card-value'>{cliente.fechaNacimiento}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Número de celular: </p>
        <p className='card-value'>{cliente.numeroCelular}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Correo electrónico: </p>
        <p className='card-value'>{cliente.correoElectronico}</p>
      </div>
      <div className='card-component button-section'>
        <button onClick={() => goToListServicios(cliente.identificacion)}>Servicios</button>
      </div>
    </div>
  )
}

export default ClientesCard