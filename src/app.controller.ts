<<<<<<< HEAD
import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CheckoutDto } from './dto/kasir.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greeting/:name')
  getGreeting(@Param('name') name: string): string {
    return this.appService.getGreeting(name);
  }
  @Get('age/:age')
  getAge(@Param('age') age: number): string {
    return this.appService.getAge(age);
  }
  @Get('bmi')
  getBMI(@Query('weight') weight: string, @Query('height') height: string): string {
    const weightnumber = parseFloat(weight);
    const heightnumber = parseFloat(height);
    if (isNaN(weightnumber) || isNaN(heightnumber)) {
      return "Invalid Input";
    }
    return this.appService.getBMI(heightnumber, weightnumber);
  }

  @Post(`luas-balok`)
  countLuasBalok(@Body() body: { panjang: number; lebar: number }): number {
    return this.appService.countLuasBalok(body.panjang, body.lebar);
  }

  @Post(`belah-ketupat`)
  countBelahKetupat(@Body() body: { d1: number; d2: number; sisi: number }): { luas: number; keliling: number } {
    return this.appService.countBelahKetupat(body.d1, body.d2, body.sisi);
  }

  @Get('bilangan/:angka')
  getangka(@Param('angka') angka: number) {
    return this.appService.getangka(angka);
  }

  @Get('suhu')
  getsuhu(@Query('nilai') nilai: number, @Query('dari') dari: string, @Query('ke') ke: string) {
    return this.appService.getkonversi(nilai, dari, ke);
  }

  @Get('deret/:jenis')
  deret(
    @Param('jenis') jenis: string,
    @Query('jumlah') jumlahQuery: string,
  ): any {
    const jumlah = Number(jumlahQuery);

    if (
      !Number.isInteger(jumlah) ||
      Number.isNaN(jumlah) ||
      jumlah < 1 ||
      jumlah > 20
    ) {
      return 'Invalid Input';
  }

  return this.appService.deret(jenis, jumlah);
}

  @Post('nilai/hitung')
  @HttpCode(200)
  rapor(@Body('nama') nama: string, @Body('tugas') tugas: number[], @Body('uts') uts: number, @Body('uas') uas: number): any {
    if (typeof nama !== 'string' || nama.trim() === '') {
      return "Invalid Input";
    }

    if (!Array.isArray(tugas) || tugas.length === 0 || !tugas.every(item => typeof item === 'number')) {
      return "Invalid Input"
    }

    if (typeof uts !== 'number' || typeof uas !== 'number') {
      return "Invalid Input"
    }

    if (tugas.every(item => item < 0 || item > 100) || (uas < 0 || uas > 100) || (uts < 0 || uts > 100)) {
      return "Invalid Input"
    }

    return this.appService.rapor(nama, tugas, uts, uas)
  }

@Post('checkout/:member')
@HttpCode(200)
CO(
  @Param('member') member: string,
  @Query('metode') metode: string,
  @Body() items: CheckoutDto,
) {
  return this.appService.CO(member, metode, items);
}

}
=======
import { Body, Controller, Get, HttpCode, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service.js';
import { CheckoutDto } from './dto/kasir.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greeting/:name')
  getGreeting(@Param('name') name: string): string {
    return this.appService.getGreeting(name);
  }
  @Get('age/:age')
  getAge(@Param('age') age: number): string {
    return this.appService.getAge(age);
  }
  @Get('bmi')
  getBMI(@Query('weight') weight: string, @Query('height') height: string): string {
    const weightnumber = parseFloat(weight);
    const heightnumber = parseFloat(height);
    if (isNaN(weightnumber) || isNaN(heightnumber)) {
      return "Invalid Input";
    }
    return this.appService.getBMI(heightnumber, weightnumber);
  }

  @Post(`luas-balok`)
  countLuasBalok(@Body() body: { panjang: number; lebar: number }): number {
    return this.appService.countLuasBalok(body.panjang, body.lebar);
  }

  @Post(`belah-ketupat`)
  countBelahKetupat(@Body() body: { d1: number; d2: number; sisi: number }): { luas: number; keliling: number } {
    return this.appService.countBelahKetupat(body.d1, body.d2, body.sisi);
  }

  @Get('bilangan/:angka')
  getangka(@Param('angka') angka: number) {
    return this.appService.getangka(angka);
  }

  @Get('suhu')
  getsuhu(@Query('nilai') nilai: number, @Query('dari') dari: string, @Query('ke') ke: string) {
    return this.appService.getkonversi(nilai, dari, ke);
  }

    @Get('deret/:jenis/') 
  deret(@Param('jenis') jenis: string, @Query('jumlah') jumlah: number): any {
      if (
        Number.isInteger(jumlah) ||
        Number.isNaN(jumlah) ||
        jumlah < 1 ||
        jumlah > 20
      ) {
        return 'Invalid Input';
      }
    return this.appService.deret(jenis, jumlah)
  }

  @Post('nilai/hitung')
  @HttpCode(200)
  rapor(@Body('nama') nama: string, @Body('tugas') tugas: number[], @Body('uts') uts: number, @Body('uas') uas: number): any {
    if (typeof nama !== 'string' || nama.trim() === '') {
      return "Invalid Input";
    }

    if (!Array.isArray(tugas) || tugas.length === 0 || !tugas.every(item => typeof item === 'number')) {
      return "Invalid Input"
    }

    if (typeof uts !== 'number' || typeof uas !== 'number') {
      return "Invalid Input"
    }

    if (tugas.every(item => item < 0 || item > 100) || (uas < 0 || uas > 100) || (uts < 0 || uts > 100)) {
      return "Invalid Input"
    }

    return this.appService.rapor(nama, tugas, uts, uas)
  }

@Post('checkout/:member')
@HttpCode(200)
CO(
  @Param('member') member: string,
  @Query('metode') metode: string,
  @Body() items: CheckoutDto,
) {
  return this.appService.CO(member, metode, items);
}

}
>>>>>>> ba4278faf27a6a1a6ef06c07797dd4287a512773
