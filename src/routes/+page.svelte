<!-- +app.svelte -->
<script>
  import { onMount } from 'svelte';
  import { onSubmit } from '../actions/formActions.js';
  import { loadUsuarios } from '../api/api.js';

  let nombre = '';
  let correo = '';
  let usuarios = [];

  onMount(async () => {
    usuarios = await loadUsuarios();
  });
</script>

<style>
  /* Agrega estilos según tus preferencias */
  .tarjeta {
    margin-bottom: 20px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
  }
</style>

<h1>Formulario</h1>

<form on:submit|preventDefault={e => onSubmit(e, { nombre, correo })}>
  <label>
    Nombre:
    <input type="text" name="nombre" bind:value={nombre} />
  </label>
  <label>
    Correo:
    <input type="email" name="correo" bind:value={correo} />
  </label>
  <button type="submit">Enviar</button>
</form>

<h1>Tarjetas de Usuarios</h1>

<div id="tarjetas">
  {#each usuarios as usuario (usuario.id)}
    <div class="tarjeta">
      <h3>{usuario.nombre}</h3>
      <p>{usuario.correo}</p>
    </div>
  {/each}
</div>
