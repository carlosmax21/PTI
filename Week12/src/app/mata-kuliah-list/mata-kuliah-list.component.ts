import { Component, OnInit } from '@angular/core';
import { MahasiswaService } from '../mahasiswa.service';

@Component({
  selector: 'app-mata-kuliah-list',
  templateUrl: './mata-kuliah-list.component.html',
  styleUrls: ['./mata-kuliah-list.component.css']
})
export class MataKuliahListComponent implements OnInit {

  public mhs = [{'kode': '', 'nama': ''}]
  constructor(private mhsService: MahasiswaService) { }

  ngOnInit(): void {
    this.mhs = this.mhsService.getMataKuliah();
  }

}
