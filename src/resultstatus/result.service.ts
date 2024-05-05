import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './schema/resultstatus.schema';

@Injectable()
export class ResultService {
    constructor(@InjectModel(Result.name) private readonly resultModel: Model<Result>) { }

    async createResult(createResultDto: CreateResultDto): Promise<Result> {
        const createdResult = new this.resultModel(createResultDto);
        return createdResult.save();
    }
    async getAllResults(): Promise<Result[]> {
        return this.resultModel.find().exec();
    }
}
