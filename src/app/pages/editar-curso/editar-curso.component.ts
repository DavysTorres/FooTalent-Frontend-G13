import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../../services/curso.service';
import { Curso } from '../../models/curso.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-curso',
  standalone: true,
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css'],
  imports: [
    FormsModule, CommonModule
  ],
})
export class EditarCursoComponent implements OnInit {
  curso: Curso = {
    nombre: '',
    descripcion: '',
    imagen: '',
    que_aprenderas: '',
    requisitos: '',
    razon_eleccion: '',
    informacion_adicional: '',
    duracion:''
  };
  idCurso: string | null = null;
  private dialog = inject(MatDialog);

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Obtenemos el ID del curso desde la ruta
    this.idCurso = this.route.snapshot.paramMap.get('id');
    if (this.idCurso) {
      this.cargarCurso(); // Cargamos los datos del curso
    } else {
      console.error('El ID del curso es null o no válido');
    }
  }

  cargarCurso(): void {
    if (this.idCurso) {
      // Llamamos al servicio para obtener los datos del curso
      this.cursoService.obtenerCursoPorId(this.idCurso).subscribe(
        (response: any) => { // Cambia a any si no tienes un tipo definido para la respuesta
          this.curso = response.data; // Asignamos los datos del curso al objeto curso
        },
        (error) => {
          console.error('Error al cargar el curso', error); // Manejamos el error
        }
      );
    }
  }

  onSubmit(): void {
    // Abre el diálogo de confirmación
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmar cambios',
        message: '¿Estás seguro de que deseas guardar los cambios?'
      }
    });
  
    // Después de cerrar el diálogo, proceder con la actualización si el usuario confirma
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) { // Verifica si el usuario confirmó
        if (this.idCurso) {
          this.cursoService.editarCurso(this.idCurso, this.curso).subscribe(
            (response) => {
              this.router.navigate(['/teacher-dashboard']); // Navegar de vuelta a la lista de cursos
            },
            (error) => {
              console.error('Error al actualizar el curso:', error);
            }
          );
        }
      }
    });
  }

}
