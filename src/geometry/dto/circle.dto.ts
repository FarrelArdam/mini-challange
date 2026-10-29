import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class CircleDto {
    @IsNotEmpty()
    @IsNumber()
    @Type (() => Number)
    @Min(1)
    radius!: number
}