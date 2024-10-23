import './components.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuariosRegistrados } from './usuarios.js';

export function Formulario() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleIngresar = () => {
    if (validarUsuario()) {
      console.log('Ingreso exitoso');
      // Aquí puedes redirigir al usuario a otra página si es necesario
    } else {
      console.log('Correo o contraseña incorrectos');
    }
  };

  const validarUsuario = () => {
    return usuariosRegistrados.some(usuario => 
      usuario.correo === correo && usuario.password === password
    );
  };

  const handleRegistro = () => {
    navigate('/registro');
  };

  return (
    <>
      <section className='Formulario'>
        <h1>Iniciar Sesión</h1>
        <input 
          type="text"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className='BotonesInicio'>
          <button onClick={handleRegistro}>Soy nuevo</button>
          <button onClick={handleIngresar}>Ingresar</button>
        </div>
      </section>
    </>
  );
}

export default Formulario;