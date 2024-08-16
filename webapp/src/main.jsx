import { StrictMode } from 'react'
import './styles/index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import ListServicios from './components/ListServicios.jsx'
import MenuHeader from './components/MenuHeader.jsx'
import ClienteForm from './components/ClienteForm.jsx'
import ServicioRegistryForm from './components/ServicioRegistryForm.jsx'
import ListClientes from './components/ListClientes.jsx'
import ClienteInformation from './components/ClienteInformation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MenuHeader></MenuHeader>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/cliente/:id' element={<ClienteInformation />}></Route>
        <Route path='/clientes' element={<ListClientes />}></Route>
        <Route path='/servicios/:id' element={<ListServicios />}></Route>
        <Route path='/crear-cliente' element={<ClienteForm />}></Route>
        <Route path='/registrar-servicio' element={<ServicioRegistryForm />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
