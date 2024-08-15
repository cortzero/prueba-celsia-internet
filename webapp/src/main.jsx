import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import ListServicios from './components/ListServicios.jsx'
import MenuHeader from './components/MenuHeader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MenuHeader></MenuHeader>
      <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/servicios/:id' element={<ListServicios></ListServicios>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
