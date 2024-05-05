import { Controller, Post, Body, Get } from '@nestjs/common';
import { ResultService } from './result.service';
import { CreateResultDto } from './dto/create-result.dto';
import { Result } from './schema/resultstatus.schema';

@Controller('results')
export class ResultController {
    constructor(private readonly resultService: ResultService) { }

    @Post("/monu")
    async createResult(@Body() createResultDto: CreateResultDto): Promise<Result> {
        return this.resultService.createResult(createResultDto);
    }

    @Get("/getall")
    async getAllResults(): Promise<Result[]> {
        return this.resultService.getAllResults();
    }
}
