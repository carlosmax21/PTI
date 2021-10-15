import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MataKuliahListComponent } from './mata-kuliah-list.component';

describe('MataKuliahListComponent', () => {
  let component: MataKuliahListComponent;
  let fixture: ComponentFixture<MataKuliahListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MataKuliahListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MataKuliahListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
