import { useState } from 'react'
import './App.css'
import { getAllClientes } from './services/ClienteService'
import { useEffect } from 'react';

function App() {
  const [clientes, setClientes] = useState([]);
  const goToListServicios = (clienteId) => navigator(`/servicios/${clienteId}`);

  useEffect(() => retrieveClientes(), []);
  
  function retrieveClientes() {
    getAllClientes()
      .then(response => {
        console.log(response.data)
        setClientes(response.data)
      })
      .catch(error => console.log('No se pudo obtener los clientes'));
  }

  const clienteElements = clientes.map(
    cliente => <tr key={cliente.identificacion}>
                <td>{cliente.identificacion}</td>
                <td>{cliente.nombres}</td>
                <td>{cliente.apellidos}</td>
                <td>{cliente.tipoIdentificacion}</td>
                <td>{cliente.fechaNacimiento}</td>
                <td>{cliente.numeroCelular}</td>
                <td>{cliente.correoElectronico}</td>
                <td><button onClick={() => goToListServicios(cliente.identificacion)}>Servicios</button></td>
              </tr>
  );

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>
                Identificación
              </th>
              <th>
                Nombres
              </th>
              <th>
                Apellidos
              </th>
              <th>
                Tipo de identificación
              </th>
              <th>
                Fecha de nacimiento
              </th>
              <th>
                Número de celular
              </th>
              <th>
                Correo electrónico
              </th>
              <th>
                Ver servicios
              </th>
            </tr>
          </thead>
          <tbody>
            {clienteElements}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
