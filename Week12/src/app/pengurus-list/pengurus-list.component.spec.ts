import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengurusListComponent } from './pengurus-list.component';

describe('PengurusListComponent', () => {
  let component: PengurusListComponent;
  let fixture: ComponentFixture<PengurusListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengurusListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengurusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
