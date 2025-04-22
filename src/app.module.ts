import { Module, Logger } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import * as dotenv from 'dotenv'

dotenv.config()

const logger = new Logger('AppModule')

logger.log(process.env.DATABASE_URL)

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true
    }),
    StudentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
