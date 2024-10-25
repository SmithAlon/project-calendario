import './components.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usuariosRegistrados } from './usuarios.js';
import { pedirPermisoNotificaciones, mostrarNotificacion } from './serviceWorkerHelper.js';

export function Formulario() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleIngresar = () => {
    if (validarUsuario()) {
      console.log('Ingreso exitoso!');
      
      // Lanzar notificación push de inicio de sesión exitoso
      mostrarNotificacion("¡Inicio de sesión exitoso!");

      // Pedir permiso para notificaciones
      pedirPermisoNotificaciones();
      navigate('/calendario');
    } else {
      mostrarNotificacion('Correo o contraseña incorrectos, inténtelo de nuevo. ');
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
          placeholder="Correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Contraseña"
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
