import Formulario from "./components/formulario.jsx"
import Registro from "./components/registro.jsx"
import Calendario from './components/calendario.jsx'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Link to='/'>
      </Link>

      <Routes>
        <Route path='/' element={<Formulario />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/calendario' element={<Calendario />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

