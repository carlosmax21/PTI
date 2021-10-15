import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { MataKuliahListComponent } from './mata-kuliah-list/mata-kuliah-list.component'
import { from } from 'rxjs';


const routes: Routes = [
  { path: 'mahasiswa-list', component: MahasiswaListComponent},
  { path: 'pengurus-list', component: PengurusListComponent},
  { path: 'mata-kuliah-list', component: MataKuliahListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }