import { IsArray, IsString } from 'class-validator';

export class CreateQuestionDto {
    @IsString()
    question: string;

    @IsArray()
    options: string[];

    @IsString()
    correctAnswer: string;
}
