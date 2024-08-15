import { useState } from 'react'
import { getAllClientes } from './services/ClienteService'
import { useEffect } from 'react';
import ClientesCard from './components/ClientesCard';

function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAllClientes()
      .then(response => setClientes(response.data))
      .catch(error => console.log('No se pudo obtener los clientes'));
  }, []);
  
  const clienteElements = clientes.map(
    cliente => <ClientesCard key={cliente.identificacion} currentCliente={cliente} />
  );

  return (
    <div>
      {clienteElements}
    </div>
  )
}

export default App
