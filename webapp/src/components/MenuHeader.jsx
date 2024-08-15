import React from 'react'
import { useNavigate } from 'react-router-dom'

function MenuHeader() {
  const navigator = useNavigate();
  const goToHome = () => navigator('/');

  return (
    <header>
      <button onClick={() => goToHome()}>Inicio</button>
      <button>Clientes</button>
    </header>
  )
}

export default MenuHeader