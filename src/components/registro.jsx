import { useState } from 'react';
import { usuariosRegistrados } from './usuarios.js';
import { pedirPermisoNotificaciones, mostrarNotificacion } from './serviceWorkerHelper.js';

export function Registro() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const validarCorreo = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(correo)) {
      console.log('Correo válido:', correo);
      return true;
    } else {
      console.log('Correo inválido:', correo);
      return false;
    }
  };

  const validarContrasena = () => {
    if (password.length < 6) {
      console.log('Contraseña inválida: debe tener al menos 6 caracteres');
      return false;
    }
    if (password !== confirmPassword) {
      console.log('Las contraseñas no coinciden');
      return false;
    }
    console.log('Contraseña válida');
    return true;
  };

  const handleRegistro = () => {
    const correoValido = validarCorreo();
    const contrasenaValida = validarContrasena();
    if (correoValido && contrasenaValida) {
      const nuevoUsuario = { correo, password };
      usuariosRegistrados.push(nuevoUsuario);
      console.log('Registro exitoso:', nuevoUsuario);
      
      // Lanzar notificación push de registro exitoso
      mostrarNotificacion("Registro exitoso");

      // Pedir permiso para notificaciones
      pedirPermisoNotificaciones();
    } else {
      console.log('Registro fallido');
    }
  };

  return (
    <section className='Registro'>
      <h1>Registro</h1>
      <input 
        type="text"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Confirmar contraseña"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={handleRegistro}>Registrar</button>
      <a href="/">Volver a Inicio</a>
    </section>
  );
}

export default Registro;
