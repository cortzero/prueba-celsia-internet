import React from 'react'
import '../styles/CardStyle.css';
import ListServicios from './ListServicios';

function ClientesCard({ currentCliente }) {
  const cliente = {...currentCliente};

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
      <div className='card-component'>
        <ListServicios servicios={cliente.servicios || []} />
      </div>
    </div>
  )
}

export default ClientesCard