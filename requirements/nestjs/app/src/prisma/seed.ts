import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const user1 = await prisma.user.create({
      data: {
        email: 'john@example.com',
        pseudo: 'JohnDoe',
        password: 'hashedpassword',
        auth42Id: 123,
        refreshToken: 'refreshToken123',
        is2faActive: true,
        secret2fa: 'secret2fa123',
        profile: {
          create: {
            avatarUrl: 'https://avatars.dicebear.com/v2/male/3794ec2b7564aef10e192bb113ea4ed0.svg',
            xp: 100,
          }
        }
      }
    });

    const user2 = await prisma.user.create({
      data: {
        email: 'jane@example.com',
        pseudo: 'JaneSmith',
        password: 'hashedpassword',
        auth42Id: 456,
        refreshToken: 'refreshToken456',
        is2faActive: false,
        secret2fa: 'secret2fa456',
        profile: {
          create: {
            avatarUrl: 'https://avatars.dicebear.com/v2/female/db994a8377c99c5a0db61909523cdc58.svg',
            xp: 150,
          }
        }
      }
    });

    console.log({ user1, user2 });

  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
