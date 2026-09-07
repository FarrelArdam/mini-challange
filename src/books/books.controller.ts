import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}
  @Get() findAll() {
    return this.booksService.findAll();
  }
  @Get(':id') findOne(@Param('id', ParseIntPipe) id: number) {
    return this.booksService.findOne(id);
  }
  @Post() create(@Body() dto: CreateBookDto) {
    return this.booksService.create(dto);
  }
  @Put(':id') update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateBookDto,
  ) {
    return this.booksService.update(id, dto);
  }
  @Delete(':id') remove(@Param('id', ParseIntPipe) id: number) {
    this.booksService.remove(id);
    return { message: `Buku id ${id} berhasil dihapus` };
  }
}
