import { BrowserRouter, Routes, Route } from 'react-router-dom';


import NavBar from "./components/NavBar";
import Registro from "./pages/Registro";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar visible en todas las páginas */}
      <NavBar />

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Registro />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
