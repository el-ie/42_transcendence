import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private readonly prisma = new PrismaClient();

  async getAllUser() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        profile: true, // This includes the associated Profile data
      },
    });
  }

  async createUser(user: any) {
    return this.prisma.user.create({
      data: user,
    });
  }

  async createDefaultProfile(userId: number) {
    return this.prisma.profile.create({
      data: {
        userId: userId,
      },
    });
  }
  

  async updateUser(id: number, user: any) {
    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async $disconnect() {
    await this.prisma.$disconnect();
  }
}
