import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
//BOOSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
// SweetAlert2 CSS (¡Importante!)
import 'sweetalert2/dist/sweetalert2.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
