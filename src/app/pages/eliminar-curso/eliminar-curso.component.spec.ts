import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarCursoComponent } from './eliminar-curso.component';

describe('EliminarCursoComponent', () => {
  let component: EliminarCursoComponent;
  let fixture: ComponentFixture<EliminarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
