import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';

@Component({
  selector: 'app-teacher-dashboard',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, PanelDeControlComponent],
  templateUrl: './teacher-dashboard.component.html',
  styleUrl: './teacher-dashboard.component.css'
})
export class TeacherDashboardComponent {

}
