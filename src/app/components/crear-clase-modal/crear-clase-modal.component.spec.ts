import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClaseModalComponent } from './crear-clase-modal.component';

describe('CrearClaseModalComponent', () => {
  let component: CrearClaseModalComponent;
  let fixture: ComponentFixture<CrearClaseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearClaseModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearClaseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
