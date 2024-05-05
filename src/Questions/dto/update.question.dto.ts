import { IsArray, IsString, ArrayNotEmpty, ArrayMinSize } from 'class-validator';

export class UpdateQuestionDto {
    @IsString()
    question: string;

    @IsArray()
    @ArrayNotEmpty()
    @ArrayMinSize(4)
    options: string[];

    @IsString()
    correctAnswer: string;
}
