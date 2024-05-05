import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './schemas/question.schema';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }])],
    controllers: [QuestionController],
    providers: [QuestionService]
})
export class QuestionModule { }
