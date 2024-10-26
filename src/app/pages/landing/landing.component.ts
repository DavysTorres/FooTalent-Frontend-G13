import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CursoService } from '../../services/curso.service';
import { CourseNavbarComponent } from "../../components/course-navbar/course-navbar.component";

@Component({
  selector: 'app-landing',
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule,
    FormsModule,
    CommonModule,
    CourseNavbarComponent
],
  standalone: true,
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  cursos: any[] = [];
  explorarCursos: any[] = [];

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.obtenerCursos();
  }

  // Método para obtener los cursos desde el servicio
  obtenerCursos(): void {
    this.cursoService.obtenerCursos().subscribe(
      (response: any) => {
        this.cursos = response.data; // Ajusta esto según la estructura de tu respuesta
        this.explorarCursos = [...this.cursos]; // También inicializa la lista para explorar cursos
      },
      (error) => {
        console.error('Error al obtener los cursos:', error);
      }
    );
  }
}
