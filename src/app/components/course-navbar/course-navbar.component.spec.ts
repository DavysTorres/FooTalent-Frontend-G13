import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNavbarComponent } from './course-navbar.component';

describe('CourseNavbarComponent', () => {
  let component: CourseNavbarComponent;
  let fixture: ComponentFixture<CourseNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
