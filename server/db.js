// db.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loadUsuarios() {
  return prisma.usuario.findMany();
}

export async function saveUsuario({ nombre, correo }) {
  return prisma.usuario.create({
    data: {
      nombre,
      correo,
    },
  });
}
