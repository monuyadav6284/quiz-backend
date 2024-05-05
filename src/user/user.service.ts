import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
    ) { }

    async create(user: User): Promise<User> {
        const res = await this.userModel.create(user);
        return res;
    }
    async findAll(): Promise<User[]> {
        const res = await this.userModel.find();
        return res;
    }
    async findOne(id: string): Promise<User> {
        const res = await this.userModel.findById(id);
        if (!res) {
            throw new NotFoundException('User not found');
        }
        return res;
    }

    async update(id: string, user: User): Promise<User> {
        const res = await this.userModel.findByIdAndUpdate(id, user, { new: true });
        if (!res) {
            throw new NotFoundException('User not found');
        }
        return res;
    }

    async delete(id: string): Promise<User> {
        const res = await this.userModel.findByIdAndDelete(id);
        if (!res) {
            throw new NotFoundException('User not deleted');
        }
        return res;
    }



}
