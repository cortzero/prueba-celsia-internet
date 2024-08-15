import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuHeader() {
  const navigator = useNavigate();
  const goToHome = () => navigator('/');
  const goToClienteForm = () => navigator('/crear-cliente');

  return (
    <header>
      <button onClick={() => goToHome()}>Inicio</button>
      <button onClick={() => goToClienteForm()}>Registrar un cliente</button>
    </header>
  )
}

export default MenuHeader