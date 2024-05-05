import { IsString, IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateResultDto {
    @IsNotEmpty()
    @IsString()
    result: string;

    @IsNotEmpty()
    @IsMongoId()
    userId: string;
}
