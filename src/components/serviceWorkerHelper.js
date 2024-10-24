// Registrar el Service Worker
export const registerServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js')
        .then((registration) => {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch((error) => {
          console.error('Error al registrar el Service Worker:', error);
        });
    }
  };
  
  // Pedir permiso para notificaciones
  export const pedirPermisoNotificaciones = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          console.log("Permiso concedido para notificaciones.");
        } else {
          console.log("Permiso denegado para notificaciones.");
        }
      });
    } else {
      console.log("Las notificaciones no están soportadas en este navegador.");
    }
  };
  
  // Función para mostrar la notificación
  export const mostrarNotificacion = (mensaje) => {
    if (Notification.permission === "granted") {
      const opciones = {
        body: mensaje,
        icon: "https://example.com/icon.png" // Cambia a la URL de un icono real si lo deseas
      };
      new Notification(mensaje, opciones);
    } else {
      console.log("No se ha dado permiso para notificaciones.");
    }
  };
  
  // Función para convertir la fecha en objeto Date
  export const convertirAFecha = (fechaHora) => {
    return new Date(fechaHora);
  };
  
  // Función para agregar un recordatorio y enviar notificación push
  export const agregarRecordatorioConNotificacion = (eventName, fechaHoraRecordatorio) => {
    const ahora = new Date();
    const fechaObjetivo = convertirAFecha(fechaHoraRecordatorio);
    const dosMinutosAntes = 2 * 60 * 1000; // 2 minutos en milisegundos
    const tiempoRestante = fechaObjetivo - ahora - dosMinutosAntes;
  
    if (tiempoRestante > 0) {
      setTimeout(() => {
        mostrarNotificacion("Es momento de prepararse para: " + eventName);
      }, tiempoRestante);
      console.log("Evento agregado exitosamente.");
    } else {
      console.log("La fecha del evento ya pasó o es muy cercana.");
    }
  };
  