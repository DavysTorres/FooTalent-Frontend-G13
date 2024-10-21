import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseViewcardComponent } from './course-viewcard.component';

describe('CourseViewcardComponent', () => {
  let component: CourseViewcardComponent;
  let fixture: ComponentFixture<CourseViewcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseViewcardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseViewcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
