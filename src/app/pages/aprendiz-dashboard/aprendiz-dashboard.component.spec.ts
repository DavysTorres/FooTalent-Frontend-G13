import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprendizDashboardComponent } from './aprendiz-dashboard.component';

describe('AprendizDashboardComponent', () => {
  let component: AprendizDashboardComponent;
  let fixture: ComponentFixture<AprendizDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AprendizDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprendizDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
