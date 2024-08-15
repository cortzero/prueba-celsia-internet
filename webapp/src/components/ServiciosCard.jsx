import React from 'react';
import '../styles/CardStyle.css';

function ServiciosCard({ currentServicio }) {
  const servicio = {...currentServicio};

  return (
    <div className='card'>
      <div className='card-component'>
        <p className='card-label'>Nombre del servicio: </p>
        <p className='card-value'>{servicio.servicioId.nombreServicio}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Fecha de inicio: </p>
        <p className='card-value'>{servicio.fechaInicio}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Última facturación: </p>
        <p className='card-value'>{servicio.ultimaFacturacion}</p>
      </div>
      <div className='card-component'>
        <p className='card-label'>Último pago: </p>
        <p className='card-value'>{servicio.ultimoPago}</p>
      </div>
    </div>
  )
}

export default ServiciosCard