import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MahasiswaService } from './mahasiswa.service';
import { MahasiswaListComponent } from './mahasiswa-list/mahasiswa-list.component';
import { PengurusListComponent } from './pengurus-list/pengurus-list.component';
import { MataKuliahListComponent } from './mata-kuliah-list/mata-kuliah-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MahasiswaListComponent,
    PengurusListComponent,
    MataKuliahListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MahasiswaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
