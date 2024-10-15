import { Component } from '@angular/core';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { RouterLinkWithHref } from '@angular/router';
import { CourseNavbarComponent } from '../../components/course-navbar/course-navbar.component';

@Component({
  selector: 'app-aprendiz-dashboard',
  standalone: true,
  imports: [PanelDeControlComponent, RouterLinkWithHref, CourseNavbarComponent],
  templateUrl: './aprendiz-dashboard.component.html',
  styleUrl: './aprendiz-dashboard.component.css'
})
export class AprendizDashboardComponent {

}
