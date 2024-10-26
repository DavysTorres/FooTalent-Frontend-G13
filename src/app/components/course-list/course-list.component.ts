import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CursoService } from '../../services/curso.service';
import { ToastrService } from 'ngx-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    MatProgressSpinnerModule,
    CommonModule,
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  cursos: any[] = [];
  listaCursos: any[] = [];
  cargando: boolean = false;

  constructor(
    private cursoService: CursoService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  trackByCursoId(index: number, curso: any): number {
    return curso.id;
  }

  obtenerCursos(): void {
    this.cargando = true;
    this.cursoService.obtenerCursos().subscribe(
      (response: any) => {
        this.cursos = response.data;
        this.listaCursos = [...this.cursos];
      },
      (error) => {
        console.error('Error al obtener los cursos:', error);
      }
    );
  }
}
