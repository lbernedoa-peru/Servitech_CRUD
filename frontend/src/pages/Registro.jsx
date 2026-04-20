//no olvidar importar el useState para manejar el estado del nombre en el formulario
import { useState } from 'react';
import { useAlert } from '../hooks/useAlerts';

function Registro() {

    //parte del backend - conexión con el backend
    // 1. Definimos el estado para el nombre
  const [nombre, setNombre] = useState("");
  const { success, error } = useAlert();
  // 2. Función para enviar los datos
  const agregarUsuario = () => {
    if (!nombre.trim()) return alert("Escribe un nombre"); // Validación simple

    fetch('http://localhost:3000/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre })
    })
    .then(res => {
      if (res.ok) {
        success("Usuario registrado", `El usuario ${nombre} ha sido registrado exitosamente.`);
        setNombre(""); // Limpiamos el input después de registrar
      }
    })
    .catch(err => console.error("Error:", err));
  };

  //parte de fronted -  interfaz de usuario
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card text-center shadow-sm"> {/* shadow-sm opcional para que se vea mejor */}
        <div className="card-header">
          Gestión Empleados
        </div>
        <div className="card-body">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Nombre:</span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Ingresa tu nombre ..." 
              value={nombre} // 3. Vinculamos el valor al estado
              onChange={(e) => setNombre(e.target.value)} // 4. Actualizamos el estado al escribir
            />
          </div>
        </div>
        <div className="card-footer text-body-secondary">
          {/* 5. Conectamos el clic al envío */}
          <button 
            type="button" 
            className="btn btn-success w-100" 
            onClick={agregarUsuario}
          >
            Registrar Empleado
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registro;
            