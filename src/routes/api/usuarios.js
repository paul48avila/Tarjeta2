// usuarios.js (ubicado en src/routes/api)
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function get() {
  const usuarios = await prisma.usuario.findMany();
  return {
    body: {
      usuarios,
    },
  };
}

export async function post(request) {
  const { nombre, correo } = request.body;
  await prisma.usuario.create({
    data: {
      nombre,
      correo,
    },
  });
  return {
    status: 201,
  };
}
