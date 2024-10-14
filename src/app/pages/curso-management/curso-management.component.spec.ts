import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoManagementComponent } from './curso-management.component';

describe('CursoManagementComponent', () => {
  let component: CursoManagementComponent;
  let fixture: ComponentFixture<CursoManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursoManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursoManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
