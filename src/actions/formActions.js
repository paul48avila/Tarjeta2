// formActions.js
import { saveUsuario, loadUsuarios } from '../api/api.js';

export async function onSubmit(event, { nombre, correo }) {
  event.preventDefault();

  // Guarda el usuario utilizando la función de tu API
  await saveUsuario({ nombre, correo });

  // Actualiza la lista de usuarios
  const usuarios = await loadUsuarios();

  // Puedes realizar otras acciones después de guardar el usuario
  console.log('Usuario guardado con éxito:', { nombre, correo });
  console.log('Lista actualizada de usuarios:', usuarios);
}
