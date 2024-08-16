import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCliente } from '../services/ClienteService';
import ClientesCard from './ClientesCard';

function ClienteInformation() {
  const {id} = useParams();
  const [cliente, setCliente] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    getCliente(id)
      .then(response => setCliente(response.data))
      .catch(error => setErrorMessage(error.response.data));
  }, []);

  return (
    <div>
      <h1>Información del cliente</h1>
      {!errorMessage ? <ClientesCard currentCliente={cliente} /> : <p>{errorMessage}</p> }
    </div>
  )
}

export default ClienteInformation