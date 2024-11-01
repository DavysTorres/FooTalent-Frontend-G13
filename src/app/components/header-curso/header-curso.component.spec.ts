import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCursoComponent } from './header-curso.component';

describe('HeaderCursoComponent', () => {
  let component: HeaderCursoComponent;
  let fixture: ComponentFixture<HeaderCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
