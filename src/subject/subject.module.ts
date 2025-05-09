import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Subject])],
  controllers: [SubjectController],
  providers: [SubjectService]
})
export class SubjectModule {}
