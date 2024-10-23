import './App.css'
import Formulario from "./components/formulario.jsx"
import Registro from "./components/registro.jsx"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Link to='/'>
      </Link>

      <Routes>
        <Route path='/' element={<Formulario />} />
        <Route path='/registro' element={<Registro />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;