import { Injectable } from '@nestjs/common';
import { Subject } from './subject.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubjectService {
    constructor(
        @InjectRepository(Subject)
        private readonly subjectRepository: Repository<Subject>
    ) { }

    async postSubject(subjectData: Partial<Subject>): Promise<Subject> {
        const subject = this.subjectRepository.create(subjectData);
        return this.subjectRepository.save(subject);
    }

    async findAll(): Promise<Subject[]> {
        return this.subjectRepository.find();
    }

    async findAllActive(): Promise<Subject[]> {
        return this.subjectRepository.findBy({ active: true });
    }

    async findOne(id: number): Promise<Subject | null> {
        return this.subjectRepository.findOne({ where: { id: id } });
    }

    async updateSubject(id: number, newData: Partial<Subject>): Promise<Subject | null> {
        await this.subjectRepository.update(id, newData);
        return this.findOne(id);
    }

    async softRemove(id: number): Promise<Subject | null> {
        await this.subjectRepository.update(id, { active: false })
        return this.findOne(id);
    }

    async removeSubject(id: number): Promise<void> {
        await this.subjectRepository.delete(id);
    }
}
