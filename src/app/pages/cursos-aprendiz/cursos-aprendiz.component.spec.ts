import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAprendizComponent } from './cursos-aprendiz.component';

describe('CursosAprendizComponent', () => {
  let component: CursosAprendizComponent;
  let fixture: ComponentFixture<CursosAprendizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosAprendizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosAprendizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
