import { useNavigate } from "react-router-dom"

function App() {
  const navigator = useNavigate();
  let clienteId = "";
  
  const handleNumeroIdentificacion = (event) => clienteId = event.target.value;
  const goToClienteInformation = () => navigator('/cliente/' + clienteId);

  return (
    <div>
      <div>
        <h1>Consultar cliente</h1>
      </div>
      <form>
        <div className='form-row'>
          <label>Número de identificación: </label>
          <input 
            onChange={handleNumeroIdentificacion} 
            type='text' 
            id='identificacion' 
            name='identificacion'
            placeholder='Ingresa el número de identificación'></input>
        </div>
        <div className='form-row'>
          <button onClick={goToClienteInformation}>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default App
