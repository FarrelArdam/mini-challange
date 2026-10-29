import { Test, TestingModule } from '@nestjs/testing';
import { GeometryController } from './geometry.controller.js';
import { GeometryService } from './geometry.service.js';

describe('GeometryController', () => {
  let controller: GeometryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeometryController],
      providers: [GeometryService],
    }).compile();

    controller = module.get<GeometryController>(GeometryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
