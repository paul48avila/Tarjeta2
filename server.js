// server.js
import express from 'express';
import { loadUsuarios, saveUsuario } from './path-to-your/db.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/usuarios', async (req, res) => {
  const usuarios = await loadUsuarios();
  res.json(usuarios);
});

app.post('/api/usuarios', async (req, res) => {
  const { nombre, correo } = req.body;

  try {
    await saveUsuario({ nombre, correo });
    res.status(201).send('Usuario creado con éxito');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al crear el usuario');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
