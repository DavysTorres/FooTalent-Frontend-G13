import { Component } from '@angular/core';
import { PanelDeControlComponent } from '../../components/panel-de-control/panel-de-control.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { CourseNavbarComponent } from '../../components/course-navbar/course-navbar.component';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';
import { CommonModule } from '@angular/common';
import { CursoTarjetaMovibleComponent } from '../../components/curso-tarjeta-movible/curso-tarjeta-movible.component';

@Component({
  selector: 'app-aprendiz-dashboard',
  standalone: true,
  imports: [PanelDeControlComponent, RouterLinkWithHref, CourseNavbarComponent, CursoTarjetaMovibleComponent, CommonModule, RouterModule],
  templateUrl: './aprendiz-dashboard.component.html',
  styleUrls: ['./aprendiz-dashboard.component.css']
})
export class AprendizDashboardComponent {
  cursos: Curso[] = [];
  loading: boolean = true;

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  obtenerCursos(): void {
    this.cursoService.obtenerCursos().subscribe(
      (data) => {
        this.cursos = data.data; 
        this.loading = false;
      },
      (error) => {
        console.error('Error al obtener los cursos', error);
        this.loading = false;
      }
    );
  }
}
