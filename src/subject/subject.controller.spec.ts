import { Test, TestingModule } from '@nestjs/testing';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';

describe('SubjectController', () => {
  let controller: SubjectController;
  let service: SubjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubjectController],
      providers: [
        {
          provide: SubjectService,
          useValue: {
            postSubject: jest.fn(),
            findAll: jest.fn(),
            findAllActive: jest.fn(),
            findOne: jest.fn(),
            updateSubject: jest.fn(),
            softRemove: jest.fn(),
            removeSubject: jest.fn(),
          }
        }
      ]
    }).compile();

    controller = module.get<SubjectController>(SubjectController);
    service = module.get<SubjectService>(SubjectService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('Crear Múltiples asignaturas', async () => {
   
  })
});
