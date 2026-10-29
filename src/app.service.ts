import { Injectable } from '@nestjs/common';
import { CheckoutDto, ItemDto } from './dto/kasir.dto.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreeting(name: string): string {
    return `Hello ${name}!`;
  }

  getAge(age: number): string {
    let result = "";
    if (age >= 18) {
      result = 'kamu sudah dewasa kamu sudah kecewa';
    } else {
      result = 'kamu belum dewasa';
    }
    return result;
  }

  getBMI(height: number, weight: number): string {
    if (height <= 0 || weight <= 0) {
      return "Invalid Input";
    }

    if (isNaN(height) || isNaN(weight)) {
      return "Invalid Input";
    }

    const bmi = weight / (height * height);
    let category: string = "";
    if (bmi < 18.5) {
      category = "Kamu kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 25) {
      category = "Berat badan kamu normal";
    } else if (bmi >= 25 && bmi < 30) {
      category = "Kamu kelebihan berat badan";
    } else {
      category = "Kamu obesitas";
    } 
    return `your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  countLuasBalok(panjang: number, lebar: number): number {
    if (panjang <= 0 || lebar <= 0) {
      throw new Error("Invalid Input");
    }
    return panjang * lebar;
  }

  countBelahKetupat(d1: number, d2: number, sisi: number): { luas: number; keliling: number } {
    if (d1 <= 0 || d2 <= 0 ) {
      throw new Error("Invalid Input");
    }
    const luas = (d1 * d2) / 2;
    const keliling = 4 * sisi;
    const result = {
      luas: luas,
      keliling: keliling,
    };
    return result;
  }

    //soal 1 Farrel Maulana Habieb Aprilo Ardam

    getangka(angka : number) {
    if (angka <= 0) {
        throw new Error("Invalid Input");
    }
    let jenis = (angka % 2 === 0) ? "genap" : "ganjil";
    let kuadrat = angka  * angka ;
    let kelipatanLima = (angka % 5 === 0) ? "true" : "false";

    let result = {
        angka: angka,
        jenis: jenis,
        kuadrat: kuadrat,
        kelipatanLima: kelipatanLima,
    };
    return result;
}

//soal 2

  getkonversi(nilai: number, dari: string, ke: string): string | { nilaiAsal: number; satuanAsal: string; hasil: number; satuanHasil: string } {
    let hasil = 0
    let suhu = ["Celcius", "Fahrenheit", "Kelvin"].includes(dari && ke)
    

    if (dari == "Celcius" && ke == "Fahrenheit") {
      hasil = nilai * 9/5 + 32
    } else if (dari == 'Celcius' && ke == 'Kelvin') {
      hasil = nilai + 273.15
    } else if (dari == 'Fahrenheit' && ke == 'Celcius') {
      hasil = (nilai - 32) * 5/9
    } else if (dari == 'Fahrenheit' && ke == 'Kelvin') {
      hasil = ((nilai - 32) * 5/9) + 273.15
    } else if (dari == 'Kelvin' && ke == 'Celcius' && nilai > 0) {
      hasil = nilai - 273.15
    } else if (dari == 'Kelvin' && ke == 'Fahrenheit' && nilai > 0) {
      hasil = (nilai - 273.15) * 9/5 + 32
    } else if (dari == ke) {
      return 'konversi tidak bisa sama'
    } else {
      return 'cek inputan suhu anda kembali'
    }

    let result = {
      nilaiAsal: nilai,
      satuanAsal: dari,
      hasil: Math.round(hasil * 100) / 100,
      satuanHasil: ke,
    };
    
    return result
    
  }

  //soal 3

  deret(jenis: string, jumlah: number): any {
    let macam = ["ganjil", "genap", "kuadrat"].includes(jenis)
    let hasil = 0
    let total = 0
    let nilai : number[] = []
    if (jenis == "ganjil") {
      for (let i = 1; i <= jumlah; i++) {
        hasil = 2 * i - 1
        total += hasil
        nilai.push(hasil)
      }
} else if (jenis == "genap") {
      for (let i = 1; i <= jumlah; i++) {
        hasil = 2 * i;
        total += hasil
        nilai.push(hasil)
      }
    } else if (jenis == "kuadrat") {
      for (let i = 1; i <= jumlah; i++) {
        hasil = i * i;
        total += hasil
        nilai.push(hasil)
      }
    }
    let result = {
      jenis: jenis,
      jumlah: jumlah,
      nilai: nilai,
      total: total,
    };
    return result;
  }

  //soal 4

  rapor(nama : string, tugas: number[], uts: number, uas: number): any {
    let rataTugas = (tugas.reduce((total, n) => total + n, 0)) / tugas.length;
    let nilai = (rataTugas * 0.3) + (uts * 0.3) + (uas * 0.4);
    let nilaiAkhir = Math.round(nilai * 100) / 100;
    let predikat;
    let status = (nilaiAkhir >= 75) ? "Lulus" : "Tidak Lulus";

    if (nilaiAkhir >= 90) {
      predikat = "A";
    } else if (nilaiAkhir >= 80) {
      predikat = "B";
    } else if (nilaiAkhir >= 70) {
      predikat = "C";
    } else {
      predikat = "D";
    }

    let result = {
      nama: nama,
      rataTugas: rataTugas,
      nilaiAkhir: nilaiAkhir,
      predikat: predikat,
      status: status,
    };
    return result;
  }

  //soal 5
  private readonly diskonMember: Record<string, number> = {
    reguler: 0,
    silver: 0,
    gold: 0
  }

  CO(member: string, metode: string, dto: CheckoutDto) {
    const membar = member.toLocaleLowerCase()
    if (!membar || !(membar in this.diskonMember)) {
      return "Invalid"
    }

    const method = metode.toLowerCase()
    if (!method || !['tunai', 'qris'].includes(method)) {
      return "Invalid"
    }

    this.Items(dto?.items)

    return this.Total(membar, method, dto.items) 
  }

  private Items(items: ItemDto[]) {
    if (!Array.isArray(items) || items.length === 0) {
      return "Invalid"
    }

    if (items.length > 10) {
      return "Invalid"
    }

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      const index = i + 1

      if (!item || typeof item !== 'object') {
        return `Item ke-${index}: format item tidak valid`;
      }

      if (typeof item.nama !== 'string' || item.nama.trim() === '') {
        return `Item ke-${index}: nama harus string dan tidak boleh kosong`;
      }

      if (typeof item.harga !== 'number' || item.harga <= 0) {
        return `Item ke-${index}: harga harus angka lebih dari 0`;
      }

      if (typeof item.qty !== 'number' || !Number.isInteger(item.qty) || item.qty <= 0) {
        return `Item ke-${index}: qty harus bilangan bulat lebih dari 0`;
      }
    }
  }

  private Total(membar: string, method: string, items: ItemDto[]) {
    let subtotal = 0;
    let totalItem = 0;

    const rincian = items.map((item) => {
      const itemSub = item.harga * item.qty
      subtotal += itemSub
      totalItem += item.qty

      return {
        nama: item.nama,
        harga: item.harga,
        qty: item.qty,
        subtotal: itemSub
      }
    })

    const persen = this.diskonMember[membar]
    const diskon = (subtotal * persen) / 100

    const afterDiskon = subtotal - diskon
    const biayaAdmin = method === 'qris' ? (afterDiskon * 1) / 100 : 0
    
    const total = afterDiskon + biayaAdmin

    return {
      membar,
      method,
      rincian,
      totalItem,
      subtotal, 
      diskon,
      biayaAdmin,
      total,
    };
  }
  
}
