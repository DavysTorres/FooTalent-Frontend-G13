import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCursoTarjetaComponent } from './crear-curso-tarjeta.component';

describe('CrearCursoTarjetaComponent', () => {
  let component: CrearCursoTarjetaComponent;
  let fixture: ComponentFixture<CrearCursoTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCursoTarjetaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCursoTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
