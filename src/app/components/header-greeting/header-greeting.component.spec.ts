import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGreetingComponent } from './header-greeting.component';

describe('HeaderGreetingComponent', () => {
  let component: HeaderGreetingComponent;
  let fixture: ComponentFixture<HeaderGreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
