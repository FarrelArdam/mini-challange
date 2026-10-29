import { Module } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { GeometryController } from './geometry.controller.js';

@Module({
  controllers: [GeometryController],
  providers: [GeometryService],
})
export class GeometryModule {}
