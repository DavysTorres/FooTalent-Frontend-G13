import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';

@Component({
  selector: 'app-curso-management',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './curso-management.component.html',
  styleUrl: './curso-management.component.css'
})
export class CursoManagementComponent implements OnInit {

  cursos: any[] = [];  

  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.obtenerCursos();  // Llama a la función para obtener los cursos al inicializar el componente
  }

  obtenerCursos(): void {
    this.cursoService.obtenerCursos().subscribe((response: any) => {
      this.cursos = response.data;  // Asigna los cursos a la propiedad
    });
  }
}
