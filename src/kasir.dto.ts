import {
  IsArray,
  IsInt,
  IsNumber,
  IsString,
  IsNotEmpty,
  Min,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

export class ItemDto {
  @IsString()
  @IsNotEmpty()
  nama: string;

  @IsNumber()
  @Min(1)
  harga: number;

  @IsInt()
  @Min(1)
  qty: number;
}

export class CheckoutDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ItemDto)
  items: ItemDto[];
}
