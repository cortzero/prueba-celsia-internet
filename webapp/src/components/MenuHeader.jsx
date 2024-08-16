import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/MenuHeader.css';

function MenuHeader() {
  const navigator = useNavigate();
  const goToHome = () => navigator('/');
  const goToClienteForm = () => navigator('/crear-cliente');
  const goToServicioRegistryForm = () => navigator('/registrar-servicio');
  const goToClientesList = () => navigator('/clientes');

  return (
    <header>
      <button className='menu-header-button' onClick={() => goToHome()}>Inicio</button>
      <button className='menu-header-button' onClick={() => goToClientesList()}>Lista de clientes</button>
      <button className='menu-header-button' onClick={() => goToClienteForm()}>Registrar un cliente</button>
      <button className='menu-header-button' onClick={() => goToServicioRegistryForm()}>Registrar servicio</button>
    </header>
  )
}

export default MenuHeader