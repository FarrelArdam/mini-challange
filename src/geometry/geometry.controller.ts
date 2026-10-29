import { Controller, Post, Body } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { CircleDto } from './dto/circle.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post("/circle")
  countAreaOfCircle(@Body() dto: CircleDto) {
    return this.geometryService.countCircleArea(dto);
  }
}
