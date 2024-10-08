import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-curso',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './editar-curso.component.html',
  styleUrl: './editar-curso.component.css'
})
export class EditarCursoComponent implements OnInit {

  curso: Curso = {
    _id: '',
    nombre: '',
    descripcion: '',
    docenteId: ''
  };

  private route = inject(ActivatedRoute);
  private cursoService = inject(CursoService);
  private router = inject(Router);

  constructor(){}
  
  ngOnInit(): void {
    // Obtiene el id del curso desde la URL
    const cursoId = this.route.snapshot.paramMap.get('id');
    if (cursoId) {
      this.obtenerCurso(cursoId);
    }
  }

  // Método para obtener el curso por ID
  obtenerCurso(id: string): void {
    this.cursoService.obtenerCursoPorId(id).subscribe(
      (response) => {
        this.curso = response.data; // Asigna los datos del curso al modelo
      },
      (error) => {
        console.error('Error al obtener el curso:', error);
      }
    );
  }

  // Método para manejar el envío del formulario de edición
  onSubmit(): void {
    if (this.curso.nombre && this.curso.descripcion && this.curso.docenteId) {
      this.cursoService.editarCurso(this.curso._id, this.curso).subscribe(
        (response) => {
          console.log('Curso editado exitosamente:', response);
          // Redirige al panel del docente
          this.router.navigate(['/teacher/dashboard']);
        },
        (error) => {
          console.error('Error al editar el curso:', error);
        }
      );
    } else {
      console.error('Por favor completa todos los campos');
    }
  }

}
