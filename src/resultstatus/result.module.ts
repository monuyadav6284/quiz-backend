import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResultController } from './result.controller';
import { ResultService } from './result.service';
import { Result, ResultSchema } from './schema/resultstatus.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Result.name, schema: ResultSchema }])],
    controllers: [ResultController],
    providers: [ResultService],
})
export class ResultModule { }
