const express = require('express');
const cors = require('cors');

const app = express();

// Permitir conexión con frontend
app.use(cors());

// Permitir enviar datos JSON
app.use(express.json());


// Importar conexión a MySQL - Asegúrate de que el archivo db.js esté en la misma carpeta que server.js y que exporte la conexión correctamente.
const db = require('./db');

// Obtener usuarios
app.get('/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    res.json(result);
  });
});

// Insertar usuario
app.post('/usuarios', (req, res) => {
  const { nombre } = req.body;

  db.query(
    'INSERT INTO usuarios (nombre) VALUES (?)',
    [nombre],
    (err, result) => {
      if (err) return res.status(500).json(err);

      res.json({ mensaje: 'Usuario agregado' });
    }
  );
});

// Levantar servidor
app.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');
});