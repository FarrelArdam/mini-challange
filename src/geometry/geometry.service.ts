import { Injectable } from '@nestjs/common';
import { CircleDto } from './dto/circle.dto.js';

@Injectable()
export class GeometryService {
    countCircleArea(circleDto: CircleDto) {
        const area = Math.PI * circleDto.radius * circleDto.radius;
        return {
            message: `Area of circle has counted`,
            data: area
        }
    }
}