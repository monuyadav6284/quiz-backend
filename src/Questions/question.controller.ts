import { Controller, Body, Post, Get, HttpException, HttpStatus, Put, Param, Delete } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { Question } from './schemas/question.schema';
import { QuestionService } from './question.service';
import { UpdateQuestionDto } from "./dto/update.question.dto"


@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionService) { }

    @Post('/post')
    async create(@Body() createQuestionDto: CreateQuestionDto): Promise<Question> {
        try {
            const question = await this.questionService.create(createQuestionDto);
            return question;
        } catch (error) {
            throw new HttpException('Failed to create question', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('/get')
    async findAll(): Promise<Question[]> {
        try {
            const questions = await this.questionService.findAll();
            return questions;
        } catch (error) {
            throw new HttpException('Failed to fetch questions', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Put('/update/:id')
    async update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto): Promise<Question> {
        try {
            const updatedQuestion = await this.questionService.update(id, updateQuestionDto);
            return updatedQuestion;
        } catch (error) {
            throw new HttpException('Failed to update question', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }




    @Delete('/delete/:id')
    async delete(@Param('id') id: string): Promise<Question> {
        try {
            const deletedQuestion = await this.questionService.delete(id);
            return deletedQuestion;
        } catch (error) {
            throw new HttpException('Failed to delete question', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
