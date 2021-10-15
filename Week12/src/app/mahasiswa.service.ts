import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MahasiswaService {

  constructor() { }

  getEmployees = function (){
    return [
      {"id": 'SKR', 'name': 'Kevin H', 'age' : 20},
      {"id": 'BDH', 'name': 'Nataya H', 'age' : 20},
      {"id": 'PRE', 'name': 'Ynika L', 'age' : 19},
      {"id": 'HMN', 'name': 'Wilson P', 'age' : 19},
      {"id": 'KSM', 'name': 'Andre I', 'age' : 21}
    ]
  }

  getMataKuliah = function(){
    return[
      {'kode': 'IF210' , 'nama': 'Algoritma dan Struktur Data'},
      {'kode': 'IF402' , 'nama': 'Pemrograman Berorientasi Objek'},
      {'kode': 'IF300' , 'nama': 'Pengantar Teknologi Internet'},
      {'kode': 'IF430' , 'nama': 'Pemrograman Web'},
      {'kode': 'IF633' , 'nama': 'Pemrograman Aplikasi Mobile'},
      {'kode': 'IF733' , 'nama': 'Pemrograman Mobile Cross-Platform'}
    ]
  }
}
