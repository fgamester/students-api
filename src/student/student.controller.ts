import { Controller, Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }

    @Post()
    async postStudent(@Body() newData: Partial<Student>): Promise<Student> {
        return this.studentService.create(newData);
    }

    @Get('active')
    async findAllActive(): Promise<Student[]> {
        return this.studentService.findAllActive();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Student | null> {
        return this.studentService.findOne(id);
    }

    @Get()
    async findAll(): Promise<Student[]> {
        return this.studentService.findAll();
    }

    @Patch(':id')
    async update(@Param('id') id: number, @Body() newData: Partial<Student>): Promise<Student | null> {
        console.log(newData);
        return this.studentService.update(id, newData);
    }

    @Patch('sremove/:id')
    async softRemove(@Param('id') id: number): Promise<Student | null> {
        return this.studentService.softRemove(id);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        await this.studentService.remove(id);
    }
}
