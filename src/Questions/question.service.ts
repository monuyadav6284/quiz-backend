import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question, QuestionDocument } from './schemas/question.schema';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question.name)
        private questionModel: Model<QuestionDocument>,
    ) { }

    async create(question: Question): Promise<QuestionDocument> {
        try {
            const createdQuestion = new this.questionModel(question);
            return await createdQuestion.save();
        } catch (error) {
            throw new Error(`Error creating question: ${error.message}`);
        }
    }

    async findAll(): Promise<QuestionDocument[]> {
        try {
            return await this.questionModel.find().exec();
        } catch (error) {
            throw new Error(`Error fetching questions: ${error.message}`);
        }
    }

    async update(id: string, question: Question): Promise<Question> {
        const res = await this.questionModel.findByIdAndUpdate(id, question, { new: true });
        if (!res) {
            throw new NotFoundException('Question not found');
        }
        return res;
    }

    async delete(id: string): Promise<Question> {
        const res = await this.questionModel.findByIdAndDelete(id);
        if (!res) {
            throw new NotFoundException('Question not found for deletion');
        }
        return res;
    }

}
