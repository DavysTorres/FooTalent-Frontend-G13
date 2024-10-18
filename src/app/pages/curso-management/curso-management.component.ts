import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-curso-management',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './curso-management.component.html',
  styleUrl: './curso-management.component.css'
})
export class CursoManagementComponent implements OnInit {

  cursos: any[] = [];
  idUsuario: string | null = null;

  constructor(private cursoService: CursoService, private usuarioService: UsersService) { }

  ngOnInit(): void {
    this.idUsuario = this.usuarioService.getIdUsuario();
    this.obtenerCursosPropios(this.idUsuario);  // Llama a la función para obtener los cursos al inicializar el componente
  }

  obtenerCursos(): void {
    this.cursoService.obtenerCursos().subscribe((response: any) => {
      this.cursos = response.data;  // Asigna los cursos a la propiedad
    });
  }

  obtenerCursosPropios(idUsuario:any): void {

    this.cursoService.obtenerCursoPorIdUsuario(idUsuario).subscribe((response: any) => {
      this.cursos = response.data;  // Asigna los cursos a la propiedad
    });

  }


}

