import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTarjetaMovibleComponent } from './curso-tarjeta-movible.component';

describe('CursoTarjetaMovibleComponent', () => {
  let component: CursoTarjetaMovibleComponent;
  let fixture: ComponentFixture<CursoTarjetaMovibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoTarjetaMovibleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoTarjetaMovibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
