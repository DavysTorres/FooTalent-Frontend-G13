import { Component } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-course-navbar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './course-navbar.component.html',
  styleUrl: './course-navbar.component.css'
})
export class CourseNavbarComponent {

}
