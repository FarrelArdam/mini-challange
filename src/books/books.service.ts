import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from './entities/book.entity.js';
import { CreateBookDto } from './dto/create-book.dto.js';
import { UpdateBookDto } from './dto/update-book.dto.js';
@Injectable()
export class BooksService {
  private books: Book[] = [
    { id: 1, judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005 },
  ];
  private nextId = 2;
  findAll(): Book[] {
    return this.books;
  }
  findOne(id: number): Book {
    const book = this.books.find((b) => b.id === id);
    if (!book) {
      throw new NotFoundException(`Buku id ${id} tidak ditemukan`);
    }
    return book;
  }
  create(dto: CreateBookDto): Book {
    const newBook: Book = { id: this.nextId++, ...dto };
    this.books.push(newBook);
    return newBook;
  }
  update(id: number, dto: UpdateBookDto): Book {
    const book = this.findOne(id);
    Object.assign(book, dto);
    return book;
  }
  remove(id: number): void {
    const index = this.books.findIndex((b) => b.id === id);
    if (index === -1) {
      throw new NotFoundException(`Buku id ${id} tidak ditemukan`);
    }
    this.books.splice(index, 1);
  }
}
