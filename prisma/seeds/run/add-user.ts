import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function addUsers() {
  const senhaHashed = await bcrypt.hash('123456789', 10);

  const users = [
    {
      name: 'Adriano Cruz',
      email: 'adriano@gmail.com',
      password: senhaHashed,
      cpf: '849.602.760-02'
    },
  ];

  const createdUsers = await prisma.user.createMany({
    data: users,
    skipDuplicates: true // Ignora usuários que já existem
  });

  console.log('Usuários adicionados:', createdUsers);
}

export default addUsers;
