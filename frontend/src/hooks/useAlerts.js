// src/hooks/useAlert.js
import Swal from 'sweetalert2';

export const useAlert = () => {

  const success = (title = '¡Éxito!', text = '') => {
    Swal.fire({
      icon: 'success',
      title,
      text,
      timer: 2500,
      showConfirmButton: false,
    });
  };

  const error = (title = 'Error', text = 'Ocurrió un problema') => {
    Swal.fire({
      icon: 'error',
      title,
      text,
    });
  };

  const warning = (title = 'Atención', text = '') => {
    Swal.fire({
      icon: 'warning',
      title,
      text,
    });
  };

  const info = (title = 'Información', text = '') => {
    Swal.fire({
      icon: 'info',
      title,
      text,
    });
  };

  // Alerta de confirmación (ej: ¿Eliminar?)
  const confirm = (title = '¿Estás seguro?', text = '', confirmText = 'Sí') => {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: confirmText,
      cancelButtonText: 'Cancelar'
    });
  };

  return { success, error, warning, info, confirm };
};