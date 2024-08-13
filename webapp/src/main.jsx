import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListServicios from './ListServicios.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<App></App>}></Route>
        <Route path='/servicios/:id' element={<ListServicios></ListServicios>}></Route>
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
