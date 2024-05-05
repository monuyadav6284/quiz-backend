import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { User } from './schemas/user.schema';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/post')
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        try {
            const user = await this.userService.create(createUserDto);
            return user;
        } catch (error) {

            throw new Error('Failed to create user');
        }
    }

    @Get('/get')
    async findAll(): Promise<User[]> {
        try {
            const users = await this.userService.findAll();
            return users;
        } catch (error) {

            throw new Error('Failed to fetch users');
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        try {
            const user = await this.userService.findOne(id);
            return user;
        } catch (error) {

            throw new Error('Failed to fetch user');
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        try {
            const updatedUser = await this.userService.update(id, updateUserDto);
            return updatedUser;
        } catch (error) {

            throw new Error('Failed to update user');
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<User> {
        try {
            const deletedUser = await this.userService.delete(id);
            return deletedUser;
        } catch (error) {

            throw new Error('Failed to delete user');
        }
    }
}
