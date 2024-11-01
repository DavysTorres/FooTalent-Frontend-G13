import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoTemarioComponent } from './curso-temario.component';

describe('CursoTemarioComponent', () => {
  let component: CursoTemarioComponent;
  let fixture: ComponentFixture<CursoTemarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoTemarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoTemarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
