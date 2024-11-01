import { Component } from '@angular/core';
import { AprendizDashboardComponent } from '../aprendiz-dashboard/aprendiz-dashboard.component';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';

@Component({
  selector: 'app-cursos-aprendiz',
  standalone: true,
  imports: [AprendizDashboardComponent, PanelDeControlComponent],
  templateUrl: './cursos-aprendiz.component.html',
  styleUrl: './cursos-aprendiz.component.css'
})
export class CursosAprendizComponent {

}
