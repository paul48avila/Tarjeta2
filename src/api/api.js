// api.js
import { get, post } from '../routes/api/usuarios.js';

export async function loadUsuarios() {
  const response = await get();
  return response.body.usuarios;
}

export async function saveUsuario({ nombre, correo }) {
  return post({
    body: { nombre, correo },
  });
}
