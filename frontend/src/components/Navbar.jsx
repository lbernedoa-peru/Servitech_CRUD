import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary mb-5" data-bs-theme="dark">
      <div className="container-fluid">
        <span className="navbar-brand">SENATI</span>
        <div className="navbar-nav">
          {/* NavLink añade la clase "active" automáticamente si la ruta coincide */}
          <NavLink to="/" className="nav-link">
            Registrar
          </NavLink>
          <NavLink to="/lista" className="nav-link">
            Lista Usuarios
          </NavLink> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;