import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
//import { CourseService, Course } from '../../services/course.service';
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
    CommonModule
  ],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  //cursos: Course[] = [];
  cargando: boolean = false;

  constructor(
    //private courseService: CourseService,
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
    //this.courseService.mostrarCursos().subscribe(
      //(data: Course[]) => {
        //this.cursos = data;
        this.cargando = false;
      //},
      //(error) => {
        //this.toastr.error(error, 'Error');
        //this.cargando = false;
      }
   // );
  }
//}
