import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUser();
  }

  @Get(':id')
  getUserById(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    return this.userService.getUserById(userId);
  }

  @Post()
  async createUser(@Body() user: any) {
    const createdUser = await this.userService.createUser(user);
    
    await this.userService.createDefaultProfile(createdUser.id);

    return createdUser;
  }

  @Put(':id')
  updateUser(@Param('id') id: string, @Body() user: any) {
    const userId = parseInt(id, 10);
    return this.userService.updateUser(userId, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    const userId = parseInt(id, 10);
    return this.userService.deleteUser(userId);
  }
}
