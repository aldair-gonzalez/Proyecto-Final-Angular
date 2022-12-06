import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInscripcionesComponent } from './detail-inscripciones.component';

describe('DetailInscripcionesComponent', () => {
  let component: DetailInscripcionesComponent;
  let fixture: ComponentFixture<DetailInscripcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInscripcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailInscripcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
