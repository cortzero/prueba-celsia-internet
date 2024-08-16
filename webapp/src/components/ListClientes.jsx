import { useState } from 'react'
import { useEffect } from 'react';
import { getAllClientes } from '../services/ClienteService'

function ListClientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAllClientes()
      .then(response => setClientes(response.data))
      .catch(error => console.log('No se pudieron obtener los clientes'));
  }, []);
  
  const clienteElements = clientes.map(
    cliente =>       
      <div key={cliente.identificacion} className='card'>
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
      </div>
  );

  return (
    <div>
      {clienteElements}
    </div>
  )
}

export default ListClientes