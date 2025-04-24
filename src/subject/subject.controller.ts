import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';

@Controller('subjects')
export class SubjectController {
    constructor(private readonly subjectService: SubjectService) { }

    @Post()
    async postSubject(@Body() subjectData: Partial<Subject>): Promise<Subject> {
        return this.subjectService.postSubject(subjectData);
    }

    @Get()
    async findAll(): Promise<Subject[]> {
        return this.subjectService.findAll();
    }

    @Get('active')
    async findAllActive(): Promise<Subject[]> {
        return this.subjectService.findAllActive();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Subject | null> {
        return this.subjectService.findOne(id)
    }

    @Patch(':id')
    async updateSubject(@Param('id') id: number, @Body() newData: Partial<Subject>): Promise<Subject | null> {
        return this.subjectService.updateSubject(id, newData);
    }

    @Patch('sremove/:id')
    async softRemove(@Param('id') id: number): Promise<Subject | null> {
        return this.subjectService.softRemove(id);
    }

    @Delete(':id')
    async removeSubject(@Param('id') id: number): Promise<void> {
        await this.subjectService.removeSubject(id)
    }
}
