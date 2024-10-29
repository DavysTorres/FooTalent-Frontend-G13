import { Component } from '@angular/core';
import { AprendizDashboardComponent } from '../aprendiz-dashboard/aprendiz-dashboard.component';

@Component({
  selector: 'app-cursos-aprendiz',
  standalone: true,
  imports: [AprendizDashboardComponent],
  templateUrl: './cursos-aprendiz.component.html',
  styleUrl: './cursos-aprendiz.component.css'
})
export class CursosAprendizComponent {

}
