import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartamentosComponent } from './apartamentos.component';

describe('ApartamentosComponent', () => {
  let component: ApartamentosComponent;
  let fixture: ComponentFixture<ApartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
