// page.svelte.js
export async function load({ fetch }) {
    const response = await fetch('/api/usuarios');
    const usuarios = await response.json();
    return {
      props: { usuarios },
    };
  }
  